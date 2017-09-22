import React from 'react'
import PropTypes from 'prop-types'

import styled from 'react-emotion'
import {
  border,
  color } from '../../theme'

const StyledButton = styled.button`
  display: inline-flex;
  font-family: 'helvetica';
  align-items: center;
  white-space: nowrap;
  font-size: 16px;
  border: 0.0625em solid ${color.gray4};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0 1em;
  border-radius: ${border.radius};
  box-sizing: border-box;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${color.white};
  color: ${color.gray4};

  &:hover,
  &:focus,
  &:active {
    background-color: ${color.gray0};
    border-color: ${color.gray6};
  }

  &:focus {
    outline: none;
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
