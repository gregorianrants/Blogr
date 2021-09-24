import React from "react";
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import iconHamburger from '../images/icon-hamburger.svg'

console.log(iconHamburger)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const H1 = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Burger = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${iconHamburger});
  background-repeat: no-repeat;
  background-position: center center;
`

export const LogoContainer = ()=>{
    return (
        <Wrapper>
            <H1>
                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="../images/logo.svg"
                />
            </H1>
            <Burger />
        </Wrapper>
    )
}