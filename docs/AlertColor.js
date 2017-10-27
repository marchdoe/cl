import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

import { color } from './Theme'

const themeColor = theme.variants('mode', 'type', {
  primary: { light: color.blue, dark: 'darkblue' },
  secondary: { light: color.green, dark: 'darkgreen' }
})

const AlertColor = styled.div`
  width: 110px;
  height: 110px;
  margin-right: 20px;
  margin-bottom: 10px;
  display: block;
  border-radius: 50%;
  border: 1px solid ${themeColor};
  background-color: ${themeColor};
`

AlertColor.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary'])
}

AlertColor.defaultProps = {
  type: 'primary',
}

export default AlertColor
