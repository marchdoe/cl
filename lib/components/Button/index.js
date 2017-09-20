import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid #eee;
  border-radius: 3;
  background-color: #fff;
  cursor: pointer;
  font-size: 15;
  padding: 3px 10px;
  margin: 10;
`

const Button = ({ children, onClick }) => (
  <StyledButton
    onClick={onClick}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
