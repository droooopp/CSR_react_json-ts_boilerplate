import { VFC } from 'react'
import styled from 'styled-components'
import { rootStyle, mediaQuery } from '../_modules'

interface ButtonInterface {
  text: string
  link: string
}

const Link = styled.a`
  background-color: ${rootStyle.colorWhite};
  border: 1px solid ${rootStyle.colorBlack900};
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  font-family: 'ヒラギノ角ゴ Pro W6', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-top: ${rootStyle.spVM};
  margin-right: ${rootStyle.spH1g};
  margin-left: ${rootStyle.spH1g};
  padding-top: ${rootStyle.spVM};
  padding-bottom: ${rootStyle.spVM};
  padding-right: ${rootStyle.spH1g};
  padding-left: ${rootStyle.spH1g};
  white-space: pre-wrap;

  ${mediaQuery.desktop`
    font-size: 17px;
    line-height: 24px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    max-width: 576px;
  `}
`

const CommonButton: VFC<ButtonInterface> = (props) => {
  const { link, text } = props

  return (
    <Link href={link} target="_blank" rel="noopener">
      {text}
    </Link>
  )
}

export default CommonButton
