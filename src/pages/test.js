import React, {Children, useContext} from "react";

import styled from "styled-components";

const DropDownContext = React.createContext({})

const OPEN = 'open'
const CLOSED = 'closed'
const ADD_SUBMENU = 'addSubMenu'
const TOGGLE_SUBMENU = 'toggleSubMenu'
const CLOSE_ALL = 'closeAll'

function setAllProperties(obj,value){
    const result = {}
    for (const key in obj){
        result[key]=value
    }
    return result
}

function reducer(state,action){
    const {type,payload}=action
    const {id} = payload
    if(type===ADD_SUBMENU){
        return {
            ...state,
            [payload]: false
        }
    }
    if(type===TOGGLE_SUBMENU){
        return {
            ...setAllProperties(state,false),
            [id]: !state[id]
        }
    }
    if(type===CLOSE_ALL){
        return {
            ...setAllProperties(state,false)
        }
    }
    else{
        return state
    }
}

const Dropdown = {}

function Provider({children}){
    const [isOpen,dispatch] = React.useReducer(reducer,{})

    function addSubMenu(i){
        dispatch({
            type: ADD_SUBMENU,
            payload: {id: i}
        })
    }

    function toggleSubMenu(i){
        dispatch({
            type: TOGGLE_SUBMENU,
            payload: {id: i}
        })
    }

    function closeAll(){
        dispatch({
            type: CLOSE_ALL,
            payload: null
        })
    }

    const contextValue = {
        addSubMenu,
        isOpen,
        toggleSubMenu,
        closeAll
    }

    return (
        <DropDownContext.Provider value={contextValue}>
            <>
                {children}
            </>
        </DropDownContext.Provider>
    )
}

Dropdown.Provider = Provider

function useDropDown(){
    const {
        addSubMenu,
        isOpen,
        toggleSubMenu,
        closeAll
    } = useContext(DropDownContext)

    return {
        addSubMenu,
        isOpen,
        toggleSubMenu,
        closeAll
    }
}

Dropdown.useDropDown = useDropDown


function SubMenu({children,id}){
    const DropdownContext = useDropDown()
    const {addSubMenu,isOpen,toggleSubMenu} = DropdownContext

    React.useEffect(()=>{
       addSubMenu(id)
    },[])

    return (<div>
        {Children.map(children,(child)=>(
            React.cloneElement(child,{
                id,
                isOpen: isOpen[id],
                toggleSubMenu: ()=>toggleSubMenu(id)
            })
        ))}
    </div>)
}

Dropdown.SubMenu = SubMenu

function Handle({children,toggleSubMenu,id}){
    function handleClick(e){
        e.stopPropagation()
        console.log(id)
        toggleSubMenu()
    }

    return (
        <div
            onClick={handleClick}
        >{children}
        </div>
    )
}

Dropdown.Handle = Handle

const DrawerStyled = styled.div`
  overflow: hidden;
  height: ${({isOpen}) => isOpen ? 'auto' : 0}
`

function Drawer({children,isOpen}){
    return (
        <DrawerStyled isOpen={isOpen}>
            {children}
        </DrawerStyled>
    )
}

Dropdown.Drawer = Drawer

function Main(){
    return (
        <Dropdown.Provider>
                    <Dropdown.SubMenu id={2}>
                        <Dropdown.Handle>click me</Dropdown.Handle>
                        <Dropdown.Drawer>some content</Dropdown.Drawer>
                    </Dropdown.SubMenu>
                    <Dropdown.SubMenu id={3}>
                        <Dropdown.Handle>click me to </Dropdown.Handle>
                        <Dropdown.Drawer>look at me also</Dropdown.Drawer>
                    </Dropdown.SubMenu>
        </Dropdown.Provider>

    )
}

export default Main