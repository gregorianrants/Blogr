import React from "react";
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import iconHamburger from '../../images/icon-hamburger.svg'
import logo from '../../images/logo.svg'
import TopBarMenu from './TopBarMenu'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Burger = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${iconHamburger});
  background-repeat: no-repeat;
  background-position: center center;
`

const Logo = styled.img`
  width: 82px;
`

export const TopBar = ()=>{
    const [open,setOpen] = React.useState(true)
    function toggleOpen(){
        setOpen(val=>!val)
    }

    return (
        <Wrapper>
            <Logo src={logo} alt={'logo'}/>
            <TopBarMenu open={open}/>
            <Burger onClick={toggleOpen}/>
        </Wrapper>
    )
}