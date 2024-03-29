import configure from './segment'
import React, {useCallback, useRef} from "react";
import styled from "styled-components";
import bgPatternIntro from "../images/bg-pattern-intro-cropped.svg";

const findY = configure([[2,3],[5,7],[9,12]])

function offsetBackgroundLeftEdge(backGroundWidth){
    return (-backGroundWidth/2)
}

console.log(15,offsetBackgroundLeftEdge())

function movePercentageAcrossContainer(containerWidth,percentage){
    return (containerWidth/100)*percentage
}

function positionBackgroundF(percentage){
    return function positionBackGround(containerWidth,backGroundWidth){
        let left = offsetBackgroundLeftEdge(backGroundWidth)
        let shift = movePercentageAcrossContainer(containerWidth,percentage)
        return left + shift
    }
}

function getPercentage(s,c1,b1){
    return ((c1*s-b1)/(s-1))*100
}

const BackgroundStyled = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bgPatternIntro});
    background-repeat: no-repeat;
    background-size: 350%;
    background-position:
           ${getPercentage(3.5,0.4,0.5)+'%'}
            center;
`

export function PositionBackGround({pairs,widthCentrePairs,children}){
    const [backGroundWidth,setBackGroundWidth] = React.useState()
    const [backgroundPosition,setBackgroundPosition] = React.useState()
    const findY = React.useCallback(configure(pairs),[pairs])
    const findCentre = React.useCallback(configure(widthCentrePairs),[widthCentrePairs])

    const element = useRef(null)

    function handle(){
        const containerWidth = element.current.offsetWidth
        const backgroundWidth = findY(containerWidth)
        const backgroundCentre = findCentre(containerWidth)
        const positionBackground = positionBackgroundF(backgroundCentre)
        setBackgroundPosition(
            positionBackground(containerWidth,backgroundWidth)
        )
        setBackGroundWidth(backgroundWidth)
    }


    React.useEffect(()=>{
        if(element.current){
            handle()
        }

        },
        [findY])

    React.useEffect(()=>{
        window.addEventListener('resize',()=>{
           handle()
        })
    },[findY])

    return (
        <BackgroundStyled
            ref={element}
            backgroundWidth={backGroundWidth}
            backgroundPosition={backgroundPosition}
        >
            {children}
        </BackgroundStyled>
    )
}