import React from 'react'

const Molecules = props => {
  return (
    <div>
      <ul>
        <li><Link to={`${match.url}/first`}>First</Link></li>
        <li><Link to={`${match.url}/second`}>Second</Link></li>
      </ul>
      <Route path={`${match.path}/:name`} render= {({match}) =>(
        <div>
          <h3>{match.params.name}</h3>
        </div>
      )}/>
    </div>
  )
}

export default Molecules
