import React from "react";
import styled from "styled-components";
import Typography from '../components/Typography'

const CardStyled = styled.div`

`

const Card = function({children,className}){
    return (
            <CardStyled className={className}>
                {children}
            </CardStyled>
    )
}

const Title = styled.div`
  padding-bottom: 16px;
  text-align: center;
`

Card.Title = function({children,className}){
    return (
        <Title className={className}>
            <Typography.Heading3>{children}</Typography.Heading3>
        </Title>
    )
}

const Content = styled.div`
  
`

Card.Content = function ({children,className}){
    return(
        <Content className={className}>
            <Typography.Body>{children}</Typography.Body>
        </Content>
    )
}

export default styled(Card)``


