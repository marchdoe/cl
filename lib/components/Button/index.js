import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { color } from '../../theme'

const StyledButton = styled.button`
  border: 1px solid ${color.gray4};
  border-radius: 3px;
  background-color: ${color.white};
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;

  &:hover {
    background-color: ${color.gray0};
    border-color: ${color.gray6};
  }
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
