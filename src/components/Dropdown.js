import React, {Children, useContext} from "react";

import styled from "styled-components";

const DropdownContext = React.createContext({})

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

    if(type===ADD_SUBMENU){
        const {id} = payload
        return {
            ...state,
            [payload]: false
        }
    }
    if(type===TOGGLE_SUBMENU){
        const {id} = payload
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
        <DropdownContext.Provider value={contextValue}>
            <>
                {children}
            </>
        </DropdownContext.Provider>
    )
}

Dropdown.Provider = Provider

function useDropdown(){
    const {
        addSubMenu,
        isOpen,
        toggleSubMenu,
        closeAll
    } = useContext(DropdownContext)

    return {
        addSubMenu,
        isOpen,
        toggleSubMenu,
        closeAll
    }
}

Dropdown.useDropdown = useDropdown


function SubMenu({children,id}){
    const DropdownContext = useDropdown()
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


export default Dropdown