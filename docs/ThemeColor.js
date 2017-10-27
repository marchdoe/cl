import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ThemeColor = styled.div`
  width: 110px;
  height: 110px;
  margin-right: 20px;
  margin-bottom: 10px;
  display: block;
  border-radius: 3px;
  border: 1px solid #ccc;
`

ThemeColor.propTypes = {
  color: PropTypes.string
}

ThemeColor.defaultProps = {
  color: 'blue'
}

export default ThemeColor
