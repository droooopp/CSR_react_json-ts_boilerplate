import { VFC } from 'react'

import { CommonButton, CommonHeading } from '../_atoms'
import { ProductInterface } from '../_interface'

interface BannerInterface {
  bannerData: ProductInterface
}

const CommonQuestionnaireItem: VFC<BannerInterface> = (props) => {
  const { bannerData } = props
  const target = bannerData
  const title = target.title.replace('<br>', '\n')
  const button = target.text.replace('<br>', '\n')
  const link = target.link

  return (
    <>
      <CommonHeading heading={title} />
      <CommonButton text={button} link={link} />
    </>
  )
}

export default CommonQuestionnaireItem
