import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

import { color } from './Theme'

const layoutColor = theme.variants('mode', 'layout', {
  primary: { light: color.white, dark: color.lightBlack },
  secondary: { light: color.blue, dark: 'darkblue' }
})

const textColor = theme.variants('mode', 'color', {
  primary: { light: color.lightBlack, dark: color.white },
  secondary: { light: color.blue, dark: 'darkblue' }
})

const Article = styled.article`
  color: ${textColor};
  padding: 0 2rem;
  background-color: ${layoutColor};
  width: 100%;
`

Article.propTypes = {
  layout: PropTypes.oneOf(['primary', 'secondary']),
  layout: PropTypes.oneOf(['primary', 'secondary'])
}

Article.defaultProps = {
  color: 'primary',
  layout: 'primary'
}

export default Article
