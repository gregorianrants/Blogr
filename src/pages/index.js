import React, {useRef} from "react"
import styled from 'styled-components'
import {Reset} from 'styled-reset'
import FutureSection from '../sections/futureSection/futureSection'
import Header from '../sections/header/Header'
import {createGlobalStyle} from 'styled-components'
import {ROOT_FONT_SIZE} from "../css_globals";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${ROOT_FONT_SIZE}px;
  }
`

const Wrapper = styled.div`
`



// markup
const IndexPage = () => {
    const [name, setName] = React.useState('')
    return (
        <Wrapper>
            <Reset/>
            <GlobalStyle/>
            <Header/>
            <FutureSection />
        </Wrapper>
    )
}

export default IndexPage
