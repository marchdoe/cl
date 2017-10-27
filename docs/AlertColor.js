import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

import { color } from './Theme'

const themeColor = theme.variants('mode', 'type', {
  success: { light: color.success, dark: color.success },
  info: { light: color.info, dark: color.info },
  warning: { light: color.warning, dark: color.warning },
  danger: { light: color.danger, dark: color.danger }
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
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger'])
}

AlertColor.defaultProps = {
  type: 'success',
}

export default AlertColor
