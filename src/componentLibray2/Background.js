import styled from "styled-components";
import bgPatternIntro from "../images/bg-pattern-intro-cropped.svg";
import bgPatternIntro from "../images/bg-pattern-intro-cropped.svg";

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

function offsetBackgroundLeftEdge(backGroundWidth){
    return (-backGroundWidth/2)
}

function movePercentageAcrossContainer(containerWidth,percentage){
    return (containerWidth/100)*percentage
}

return function positionBackGround(containerWidth,backGroundWidth){
    let left = offsetBackgroundLeftEdge(backGroundWidth)
    let shift = movePercentageAcrossContainer(containerWidth,percentage)
    return left + shift
}

function useBackGroundPosition(position){

}


export default BackgroundStyled

