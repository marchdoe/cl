import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { color } from './Theme'

const GrayscaleColor = styled.div`
  width: 125px;
  height: 40px;
  margin-bottom: 10px;
  display: block;
  border: 1px solid #ccc;

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
  color: PropTypes.string
}

GrayscaleColor.defaultProps = {
  color: color.blue
}

export default GrayscaleColor
