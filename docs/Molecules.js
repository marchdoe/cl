import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'

import Aside from './Aside'
import Article from './Article'
import Colors from './Colors'

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: all 0.3s ease 0s;

  &.is-selected {
    text-decoration: underline;
  }
`

const Molecules = ({match}) => {
  return (
    [
      <Aside key='aside'>
        <h1>Molecules</h1>
        <p><StyledNavLink to={`${match.url}/colors`}>something</StyledNavLink></p>
        <p><StyledNavLink to={`${match.url}/typeography`}>another one</StyledNavLink></p>
      </Aside>,

      <Route key='route' path={`${match.path}/:name`} render= {({match}) =>(
        <Article>
          <Colors />
        </Article>
      )}/>
    ]
  )
}

export default Molecules
