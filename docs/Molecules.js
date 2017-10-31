import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import Aside from './Aside'

const Molecules = ({match}) => {
  return (
    [
      <Aside>
        <h1>Molecules</h1>
        <p><NavLink to={`${match.url}/colors`}>something</NavLink></p>
        <p><NavLink to={`${match.url}/typeography`}>another one</NavLink></p>
      </Aside>,

      <Route path={`${match.path}/:name`} render= {({match}) =>(
        <div>
          <h3>{match.params.name}</h3>
        </div>
      )}/>
    ]
  )
}

export default Molecules
