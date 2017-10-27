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

const Aside = styled.aside`
  color: ${textColor};
  padding: 1rem 2rem;
  min-width: 250px;
  border-right: 1px solid #eee;
  background-color: ${layoutColor};
`

Aside.propTypes = {
  layout: PropTypes.oneOf(['primary', 'secondary']),
  layout: PropTypes.oneOf(['primary', 'secondary'])
}

Aside.defaultProps = {
  color: 'primary',
  layout: 'primary'
}

export default Aside
