import styled from "styled-components";
import {rem} from "../css_globals";

const Typography = {

}

Typography.MenuItem = styled.p`
  font-family: Overpass;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #1F3E5A;
`

Typography.SubMenuItem = styled.p`
  
`

Typography.Heading2 = styled.h2`
  font-family: Overpass;
  font-weight: 600;
  font-size: 28px;
`

Typography.Heading3 = styled.h2`
  font-family: Overpass;
  font-weight: 600;
  font-size: 28px;
`

Typography.Body = styled.p`
  font-weight: 400;
  font-family: Overpass;
  font-size: ${rem(16)};
  color: #4C5862;
  line-height: 28px;
`

export default Typography



