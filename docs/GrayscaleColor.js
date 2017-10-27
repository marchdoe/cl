import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

import { color } from './Theme'

const themeColor = theme.variants('mode', 'type', {
  gray0: { light: color.gray0, dark: color.gray5 },
  gray1: { light: color.gray1, dark: color.gray4 },
  gray2: { light: color.gray2, dark: color.gray3 },
  gray3: { light: color.gray3, dark: color.gray2 },
  gray4: { light: color.gray4, dark: color.gray1 },
  gray5: { light: color.gray5, dark: color.gray0 }
})

const GrayscaleColor = styled.div`
  width: 110px;
  height: 40px;
  margin-bottom: 10px;
  display: block;
  border: 1px solid ${themeColor};
  background-color: ${themeColor};

  &.first {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &.last {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`

GrayscaleColor.propTypes = {
  type: PropTypes.oneOf(['gray0', 'gray1', 'gray2', 'gray3', 'gray4', 'gray5'])
}

GrayscaleColor.defaultProps = {
  type: 'default',
}

export default GrayscaleColor
