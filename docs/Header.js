import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.footer`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: lightgreen;
`

const Header = props => {
  return (
    <StyledHeader>
      component Library Starter Kit
    </StyledHeader>
  )
}

export default Header
