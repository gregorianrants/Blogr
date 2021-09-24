import React from "react";
import styled from "styled-components";


const TopMenuItem = styled.a`
  display: block;
  text-decoration: none;
`

const SubMenu = styled.ul`
    
`

const SubMenuItem = styled.li`

`

function MenuSection(){
    return (
        <div>
            <TopMenuItem>Product</TopMenuItem>
            <SubMenu>
                <SubMenuItem>Overview</SubMenuItem>
                <SubMenuItem>Pricing</SubMenuItem>
                <SubMenuItem>Marketplace</SubMenuItem>
                <SubMenuItem>Features</SubMenuItem>
                <SubMenuItem>Integrations</SubMenuItem>
            </SubMenu>
        </div>
        )
}

export function Menu(){
    return (
        <div>
          <MenuSection />
        </div>
    )
}