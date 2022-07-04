import { VFC } from 'react'
import styled from 'styled-components'
import { rootStyle, mediaQuery } from '../_modules'

interface HeadingInterface {
  heading: string
}

const Title = styled.p`
  font-family: 'ヒラギノ角ゴ Pro W6', sans-serif;
  font-size: 17px;
  font-weight: 700;
  margin-top: ${rootStyle.spVXxl};
  margin-right: ${rootStyle.spH1g};
  margin-left: ${rootStyle.spH1g};
  text-align: center;
  white-space: pre-wrap;

  ${mediaQuery.desktop`
    font-size: 23px;
    margin-top: 52px;
  `}
`

const CommonHeading: VFC<HeadingInterface> = (props) => {
  const { heading } = props

  return <Title>{heading}</Title>
}

export default CommonHeading
