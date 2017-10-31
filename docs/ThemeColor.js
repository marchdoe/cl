import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

import { color } from './Theme'

const themeColor = theme.variants('mode', 'type', {
  primary: { light: color.primaryColor, dark: color.primaryColor },
  secondary: { light: color.secondaryColor, dark: color.secondaryColor }
})

const ThemeColor = styled.div`
  width: 110px;
  height: 110px;
  margin-right: 20px;
  margin-bottom: 10px;
  display: block;
  border-radius: 3px;
  border: 1px solid ${themeColor};
  background-color: ${themeColor};
`

ThemeColor.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary'])
}

ThemeColor.defaultProps = {
  type: 'primary',
}

export default ThemeColor
