import React from "react";
import styled from "styled-components";
import editorMobile from '../../images/illustration-editor-mobile.svg'
import editorDesktop from '../../images/illustration-editor-desktop.svg'
import {rem} from "../../css_globals";
import Typography from "../../components/Typography";
import Card from "../../components/Card";
import {HORIZONTAL_PADDING,BREAK_POINT} from "../../css_globals";
import Section from "../../components/Section";


Typography.Heading2 = styled(Typography.Heading2)`
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    font-size: ${rem(40)};
  }
`


const Container = styled.div`
  padding: ${rem(100)} ${rem(HORIZONTAL_PADDING)} 0 ${rem(HORIZONTAL_PADDING)}};
@media screen and (min-width: ${BREAK_POINT+'px'}){
  margin-top: 71px;
  padding-top: 79px;
}
`

const BackgroundImage = styled.div`
  background-image: url(${editorMobile});
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  aspect-ratio: 406 / 331;
  background-size: contain;
  margin-top: ${rem(38)};
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    background-image: url(${editorDesktop});
    position: absolute;
    top: 50%;
    height: auto;
    width:140%;
    margin: 0;
    background-position-y: 50%;
    transform: translate(0,-50%);
  }
`

const SectionHeading = styled.div`
  text-align: center;
`

const SectionContent = styled.div`
  ${Card}:not(:last-child) {
    padding-bottom: 32px;
  }
  padding-top: ${rem(38)};
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    padding-top: 0px;
  }
`

Card.Content = styled(Card.Content)`
  text-align: center;
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    text-align: left;
  }
`

Card.Title = styled(Card.Title)`
  text-align: center;
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    text-align: left;
  }
`

const Columns = styled.div`
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    display: flex;
    flex-direction: row-reverse;
    margin-top: 93px;
  }
`

const LeftColumn = styled.div`
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    flex: 0 1 50%
  }
`

const RightColumn = styled.div`
  @media screen and (min-width: ${BREAK_POINT+'px'}){
    flex: 0 1 50%;
    position: relative;
  }
`

function FutureSection() {
    return (
        <Section>
            <Container>
                <SectionHeading>
                    <Typography.Heading2>Designed for the future</Typography.Heading2>
                </SectionHeading>
                <Columns>
                    <RightColumn>
                        <BackgroundImage/>
                    </RightColumn>
                    <LeftColumn>
                        <SectionContent>
                            <Card>
                                <Card.Title>
                                    Introducing an extensible editor
                                </Card.Title>
                                <Card.Content>
                                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Title>
                                    Robust content management
                                </Card.Title>
                                <Card.Content>
                                    Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                                </Card.Content>
                            </Card>
                        </SectionContent>
                    </LeftColumn>
                </Columns>
            </Container>
        </Section>

    )
}

export default FutureSection