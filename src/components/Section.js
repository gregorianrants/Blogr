import React from "react";
import styled from 'styled-components'

const Container = styled.div`
 display: flex;
  justify-content: space-around;
`

const SectionStyled = styled.div`
  max-width: 1110px;
  padding: 0 24px;
  flex: 0 1 1110px
`

function Section({children,className}){
    return (
        <Container  className={className}>
            <SectionStyled>
                {children}
            </SectionStyled>
        </Container>

    )
}


// const SectionStyled = styled.div`
//   max-width: 1110px;
//   padding: 0 24px;
//   margin: auto;
// `
//
// function Section({children,className}){
//     return (
//         <SectionStyled className={className}>
//             {children}
//         </SectionStyled>
//     )
// }

export default Section