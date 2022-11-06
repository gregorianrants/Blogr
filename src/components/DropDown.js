import React from 'react'
import styled from "styled-components";
import Context from "./DropDownContext";

const DrawerStyled = styled.div`
  overflow: hidden;
  height: ${({open}) => open ? 'auto' : 0}
`



function DropDown({children}){
    const [open,setOpen] = React.useState(false)

    console.log(open)

    const toggleOpen = function() {
        setOpen((val)=> {
            return !val
        })
    }

    const value = {
        open,
        toggle: toggleOpen}

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

const Handle =({children})=>{
    const {toggle} = React.useContext(Context)


    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}

DropDown.Handle = Handle

const Drawer = ({children})=>{
    const {open} = React.useContext(Context)


    return (
        <DrawerStyled open={open}>
            {children}
        </DrawerStyled>
    )
}

DropDown.Drawer = Drawer

export default DropDown