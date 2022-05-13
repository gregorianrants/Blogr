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

//const positionBackground = positionBackgroundF(75)

// function reducerF(sizes,horizontalPositions){
//     const findSize = configure(sizes)
//     const findCentre = configure(horizontalPositions)
//
//     return function(state,action){
//         if(action.type==='resize'){
//             const {containerWidth} = action.payload
//             const backgroundWidth = findY(containerWidth)
//             const backgroundCentre = findCentre(containerWidth)
//             const positionBackground = positionBackgroundF(backgroundCentre)
//             return {
//                 ...state,
//                 backgroundPosition: positionBackground(containerWidth,backgroundWidth),
//                 backgroundWidth: backgroundWidth
//             }
//         }
//     }
// }

const BackgroundStyled = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bgPatternIntro});
    background-repeat: no-repeat;
    background-size: ${props=>props.backgroundWidth+'px'};
    background-position:
            ${props=> props.backgroundPosition+'px'}
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