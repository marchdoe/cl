import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import Aside from './Aside'
import Colors from './Colors'

const Atoms = ({match}) => {
  return (
    [
      <Aside key='aside'>
        <h1>Atoms</h1>
        <p><NavLink to={`${match.url}/colors`}>Colors</NavLink></p>
        <p><NavLink to={`${match.url}/typeography`}>Typeography</NavLink></p>
      </Aside>,

      <Route  key='route' path={`${match.path}/:name`} render= {({match}) =>(
        <div>
          <Colors />
        </div>
      )}/>
    ]
  )
}

export default Atoms
