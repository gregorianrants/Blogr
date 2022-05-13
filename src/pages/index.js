import React, {useRef} from "react"
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import {Menu} from "../components/Menu";
import bgPatternIntro from '../images/bg-pattern-intro-cropped.svg'

import {PositionBackGround} from '../componentLibray/positionBackground'


import {LogoContainer} from '../components/LogoContainer'

import { StaticImage } from 'gatsby-plugin-image'


const Header = styled.div`
 
  height: 600px;
  background-color: lightcoral;
  
  
`



const BackgroundStyled = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bgPatternIntro});
    background-repeat: no-repeat;
    background-size: ${props=>props.backgroundWidth+'px'};
    background-position: ${props => (props.width/100)*70 - props.backgroundWidth/2+'px'};
`

function solveLinear(x1,y1,x2,y2){
    const dx = x2-x1
    const dy = y2-y1
    const m = dy/dx;
    const c = y1 - m*x1
    return {m,c}
}



/*function Background(){
    const [width,setWidth] = React.useState()
    //when header width is 350 background width is 867
    //                      1440                    2086
    //solving  y=mx +c gives m=1.11 and c =-478.5

    const {m,c} = solveLinear(350,867,1440,2086)
    const y = width*m+c
    const backgroundWidth = Math.max(900,y)

    const element = useRef(null)

    React.useEffect(()=>{
        setWidth(element.current.offsetWidth)
        },
        [])

    React.useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(element.current.offsetWidth)
        })
    },[])

    return (
        <BackgroundStyled ref={element} width={width} backgroundWidth={backgroundWidth}/>
    )
}*/



// markup
const IndexPage = () => {
    const [name, setName] = React.useState('trevor')
    return (
        <>
            <Reset />
            <Header>
                <PositionBackGround
                    pairs={[[0,867],[350,867],[1440,2086],[3000,867]]}
                    widthCentrePairs={[[0,90],[350,90],[867,50],[1440,50],[3000,50]]}
                >
                    <LogoContainer/>
                    <Menu />
                </PositionBackGround>
            </Header>
        </>

    )
}

export default IndexPage
