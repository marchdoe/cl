import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid #eee;
`

const Header = props => {
  return (
    <StyledHeader>
      <Link to={'/'}>Component Library Starter Kit</Link>
    </StyledHeader>
  )
}

export default Header
