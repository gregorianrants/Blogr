import configure from './segment'
import React, {useRef} from "react";
import styled from "styled-components";
import bgPatternIntro from "../images/bg-pattern-intro-cropped.svg";

const findY = configure([[2,3],[5,7],[9,12]])


const BackgroundStyled = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bgPatternIntro});
    background-repeat: no-repeat;
    background-size: ${props=>props.backgroundWidth+'px'};
    background-position: center;
`

export function PositionBackGround({pairs}){
    const [width,setWidth] = React.useState()

    const findY = configure(pairs)
    const element = useRef(null)


    React.useEffect(()=>{
            setWidth(findY(element.current.offsetWidth))
        },
        [findY])

    React.useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(findY(element.current.offsetWidth))
        })
    },[findY])

    return (
        <BackgroundStyled ref={element} backgroundWidth={width}/>
    )
}