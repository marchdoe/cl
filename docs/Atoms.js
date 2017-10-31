import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'

import Aside from './Aside'
import Colors from './Colors'
import Article from './Article'

import Button from '../src/components/atoms/Button'

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: all 0.3s ease 0s;

  &.is-selected {
    text-decoration: underline;
  }
`

const Atoms = ({match}) => {
  return (
    [
      <Aside key='aside'>
        <h1>Atoms</h1>
        <p><StyledNavLink to={`${match.url}/colors`} activeClassName='is-selected'>Colors</StyledNavLink></p>
        <p><StyledNavLink to={`${match.url}/typeography`} activeClassName='is-selected'>Typeography</StyledNavLink></p>
      </Aside>,

      <Route  key='route' path={`${match.path}/:name`} render= {({match}) =>(
        <Article>
          <Button> example Button </Button>
        </Article>
      )}/>
    ]
  )
}

export default Atoms
