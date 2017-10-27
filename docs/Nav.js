import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background-color: #ccc;
  width: 60px;
  text-align: center;
  padding: 0.5rem;
`

const StyledNavLink = styled.a`
  text-align: center;
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
  background-color: #aaa;
  border: 1px solid #aaa;
  border-radius: 3px;
  display: inline-block;
  line-height: 2.4;
  text-decoration: none;
  color: #fff;
`

const Nav = props => {
  return (
    <StyledNav>
      <StyledNavLink href='#'>A</StyledNavLink>
      <StyledNavLink href='#'>M</StyledNavLink>
      <StyledNavLink href='#'>O</StyledNavLink>
      <StyledNavLink href='#'>T</StyledNavLink>
      <StyledNavLink href='#'>P</StyledNavLink>
    </StyledNav>
  )
}

export default Nav
