import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import DropDown from "../../components/DropDown";

const Nav = styled.nav`

`

const Left = styled.div`

`

const Right = styled.div`

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

export default function TopBarMenu({open}){
    return (
        <MenuStyled open={open}>
                <Left>
                    <DropDown>
                        <DropDown.Handle>
                            <TopMenuItem>
                                Product
                            </TopMenuItem>
                        </DropDown.Handle>
                        <DropDown.Drawer>
                            <SubMenu>
                                <SubMenuItem>Overview</SubMenuItem>
                                <SubMenuItem>Pricing</SubMenuItem>
                                <SubMenuItem>Marketplace</SubMenuItem>
                                <SubMenuItem>Features</SubMenuItem>
                                <SubMenuItem>Integrations</SubMenuItem>
                            </SubMenu>
                        </DropDown.Drawer>
                    </DropDown>
                    <DropDown>
                        <DropDown.Handle>
                            <TopMenuItem>
                                Company
                            </TopMenuItem>
                        </DropDown.Handle>
                        <DropDown.Drawer>
                            <SubMenu>
                                <SubMenuItem>About</SubMenuItem>
                                <SubMenuItem>Team</SubMenuItem>
                                <SubMenuItem>Blog</SubMenuItem>
                                <SubMenuItem>Careers</SubMenuItem>
                            </SubMenu>
                        </DropDown.Drawer>
                    </DropDown>
                    <DropDown>
                        <DropDown.Handle>
                            <TopMenuItem>
                                Connect
                            </TopMenuItem>
                        </DropDown.Handle>
                        <DropDown.Drawer>
                            <SubMenu>
                                <SubMenuItem>Contact</SubMenuItem>
                                <SubMenuItem>Newsletter</SubMenuItem>
                                <SubMenuItem>LinkedIn</SubMenuItem>
                            </SubMenu>
                        </DropDown.Drawer>
                    </DropDown>
                </Left>
                <Right>
                    <TopMenuItem>Login</TopMenuItem>
                </Right>
        </MenuStyled>
    )
}
