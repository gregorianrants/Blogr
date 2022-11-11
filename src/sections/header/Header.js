import styled from "styled-components";
import React from "react";
import Section from'../../components/Section'
import Background from "./Background";
import iconHamburger from '../../images/icon-hamburger.svg'
import logo from '../../images/logo.svg'
import Menu from './Menu'
import Dropdown from "../../components/Dropdown";

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Left = styled.div`

`

const Right = styled.div`

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

const Container = styled.div`
  padding-top: 56px;
`

const TopMenuItem = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  padding-top: 24px;
  font-family: Overpass;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #1F3E5A;
  `

const SubMenu = styled.ul`
  font-family: Overpass;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #1F3E5A;
  text-align: center;
  background-color: rgba(45,46,64,0.08);
  margin-top: 24px;

`

const SubMenuItem = styled.li`
padding-top: 24px;
  &:last-child {
    padding-bottom: 24px;
  }
`

const MenuStyled = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  overflow: hidden;
  height: ${props=> props.open ? 'auto' : 0};
  padding-left: 24px;
  padding-right: 24px;
  box-shadow: 0 10px 15px 10px rgba(45,46,64,0.08);;
`

function Header(){
    const [open,setOpen] = React.useState(true)
    const {closeAll}=Dropdown.useDropdown()
    function toggleOpen(){
        setOpen(val=>!val)
        closeAll()
    }

    return (
                <Background>
                    <Section>
                        <Container>
                            <TopBar>
                                <Logo src={logo} alt={'logo'}/>
                                <MenuStyled open={open}>
                                        <Left>
                                            <Dropdown.SubMenu id={1}>
                                                <Dropdown.Handle>
                                                    <TopMenuItem>
                                                        Product
                                                    </TopMenuItem>
                                                </Dropdown.Handle>
                                                <Dropdown.Drawer>
                                                    <SubMenu>
                                                        <SubMenuItem>Overview</SubMenuItem>
                                                        <SubMenuItem>Pricing</SubMenuItem>
                                                        <SubMenuItem>Marketplace</SubMenuItem>
                                                        <SubMenuItem>Features</SubMenuItem>
                                                        <SubMenuItem>Integrations</SubMenuItem>
                                                    </SubMenu>
                                                </Dropdown.Drawer>
                                            </Dropdown.SubMenu>
                                            <Dropdown.SubMenu id={2}>
                                                <Dropdown.Handle>
                                                    <TopMenuItem>
                                                        Company
                                                    </TopMenuItem>
                                                </Dropdown.Handle>
                                                <Dropdown.Drawer>
                                                    <SubMenu>
                                                        <SubMenuItem>About</SubMenuItem>
                                                        <SubMenuItem>Team</SubMenuItem>
                                                        <SubMenuItem>Blog</SubMenuItem>
                                                        <SubMenuItem>Careers</SubMenuItem>
                                                    </SubMenu>
                                                </Dropdown.Drawer>
                                            </Dropdown.SubMenu>
                                            <Dropdown.SubMenu id={3}>
                                                <Dropdown.Handle>
                                                    <TopMenuItem>
                                                        Connect
                                                    </TopMenuItem>
                                                </Dropdown.Handle>
                                                <Dropdown.Drawer>
                                                    <SubMenu>
                                                        <SubMenuItem>Contact</SubMenuItem>
                                                        <SubMenuItem>Newsletter</SubMenuItem>
                                                        <SubMenuItem>LinkedIn</SubMenuItem>
                                                    </SubMenu>
                                                </Dropdown.Drawer>
                                            </Dropdown.SubMenu>
                                        </Left>
                                        <Right>
                                            <TopMenuItem>Login</TopMenuItem>
                                        </Right>
                                </MenuStyled>
                                <Burger onClick={toggleOpen}/>
                            </TopBar>
                        </Container>
                    </Section>
                </Background>
    )
}

function WithProvider(){
    return (
        <Dropdown.Provider>
            <Header />
        </Dropdown.Provider>
    )
}




export default WithProvider