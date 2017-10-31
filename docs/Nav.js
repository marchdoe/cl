import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { color } from './Theme'

import Home from './Home'
import Atoms from './Atoms'
import Molecules from './Molecules'
import Organisms from './Organisms'

const StyledNav = styled.nav`
  border-right: 1px solid #eee;
  width: 60px;
  text-align: center;
  padding: 1rem 0.5rem;
`

const StyledNavLink = styled(NavLink)`
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
  transition: all 0.3s ease 0s;

  &.is-selected {
    background-color: ${color.primary};
    border: 1px solid ${color.primary};
  }
`

const Nav = props => {
  return (
    <StyledNav>
      <StyledNavLink to='/atoms' activeClassName='is-selected'>A</StyledNavLink>
      <StyledNavLink to='/molecules' activeClassName='is-selected'>M</StyledNavLink>
      <StyledNavLink to='/organisms' activeClassName='is-selected'>O</StyledNavLink>
      <StyledNavLink to='/templates' activeClassName='is-selected'>T</StyledNavLink>
      <StyledNavLink to='/pages' activeClassName='is-selected'>P</StyledNavLink>
    </StyledNav>
  )
}

export default Nav
