import styled from "styled-components";
import bgPatternIntro from "../../images/bg-pattern-intro-cropped.svg";
import React from "react";

const breakPoints = {
    xs: '300px',
    sm: '375px',
    md: '900px',
    lg: '1400px'
}

const Gradient = styled.div`
  height: 600px;
  background-image: linear-gradient(to bottom right,rgb(255,141,113,1),rgb(255,64,86,1));
  @media(max-width: ${breakPoints.md}){
    background-image: linear-gradient(to bottom right,#FF8C71, #FF856E 19%, #FF4056);
  }
`
/*
*gives background-position value to line up
* a point a certain % along background image - backgroundPoint :: number e.g. 75
* with point a certain % along the elmement that the background image is set on
* returns a string e.g. 125%
* */
function backgroundPositionHorizontal(containerPoint, backgroundPoint, backgroundSize) {
    containerPoint = containerPoint / 100
    backgroundPoint = backgroundPoint / 100
    backgroundSize = backgroundSize / 100
    const numerator = backgroundSize * backgroundPoint - containerPoint
    const denom = backgroundSize - 1
    const calcResult = numerator / denom
    return String(calcResult * 100) + '%'
}

/*postions the middle of background image at the %point across the container
containerHeight is pixel height of the elment the background image is set on - number
container point is the % position across the container we want to position centre
returns a css calc function as a string that will do the positioning.*/
function backgroundPositionVertical(containerHeight, containerPoint) {
    const percentageOffsetFromMiddle = containerPoint - 50
    const offset = String((containerHeight / 100) * percentageOffsetFromMiddle) + 'px'
    return `calc(50% + ${offset})`
}

const backgroundSizeXs = 300
const backgroundSizeSmall = 233 //(876/375)*100
const backgroundSizeLarge = 144.86 //(2086/1440)*100
const backgroundSizeMedium = 200
/*;*/
const BackgroundStyled = styled.div`
  height: 100%;
  background-image: url(${bgPatternIntro});
  background-repeat: no-repeat;
  
  background-size: ${backgroundSizeLarge}%;
  background-position: ${backgroundPositionHorizontal(80, 50, backgroundSizeLarge)} 
  ${backgroundPositionVertical(851, 40)};
  

  @media (max-width: ${breakPoints.md}) {
    background-size: ${backgroundSizeMedium}%;
    background-position: ${backgroundPositionHorizontal(80, 50, backgroundSizeMedium)} 
    ${backgroundPositionVertical(851, 40)};
  }
  
  @media (max-width: ${breakPoints.sm}) {
    background-size: ${backgroundSizeSmall}%;
    background-position: ${backgroundPositionHorizontal(95, 50, backgroundSizeSmall)} 
    ${backgroundPositionVertical(851, 65)};
  }

  @media (max-width: ${breakPoints.xs}) {
    background-size: ${backgroundSizeXs}%;
    background-position: ${backgroundPositionHorizontal(95, 50, backgroundSizeXs)} 
    ${backgroundPositionVertical(851, 65)};
  }
`

const Container = styled.div`
padding-top: 56px;
`

function Background({children}){
    return (
        <Gradient>
            <BackgroundStyled>
                {children}
            </BackgroundStyled>
        </Gradient>
    )
}

export default Background