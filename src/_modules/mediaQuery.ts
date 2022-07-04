import { css } from 'styled-components'

const mediaQuery = {
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  desktop: (props: any) => css`
    @media (min-width: 813px) {
      ${css(props)};
    }
  `
}

export default mediaQuery
