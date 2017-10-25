import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GrayscaleColor = styled.div`
  width: 125px;
  height: 40px;
  margin-bottom: 10px;
  display: block;

  color: ${props => props.theme.blue};
  border: 1px solid ${props => props.theme.blue};
  background: ${props => props.theme.green};

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
  color: 'blue'
}

export default GrayscaleColor
