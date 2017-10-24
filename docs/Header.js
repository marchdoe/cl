import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid #eee;
`

const Header = props => {
  return (
    <StyledHeader>
      Component Library Starter Kit
    </StyledHeader>
  )
}

export default Header
