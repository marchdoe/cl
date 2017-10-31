import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

// import {
//   border,
//   color } from '../../../theme'

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: 'gray', dark: 'darkgray' },
  primary: { light: 'blue', dark: 'darkblue' },
  success: { light: 'green', dark: 'darkgreen' },
  warning: { light: 'orange', dark: 'darkorange' }
})

const StyledButton = styled.button`
  display: inline-flex;
  font-family: 'helvetica';
  align-items: center;
  white-space: nowrap;
  font-size: 16px;
  border: 0.0625em solid #ccc;
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0 1em;
  border-radius: 3px;
  box-sizing: border-box;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: #ccc;

  &:hover,
  &:focus,
  &:active {
    background-color: #000;
    border-color: #ccc;
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ children, onClick, onMouseDown, onTouchStart, variant }) => (
  <StyledButton
    onClick={onClick}
    onMouseDown={onMouseDown}
    onTouchStart={onTouchStart}
    variant={variant}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
}

Button.defaultProps = {
  variant: 'default'
}

export default Button
