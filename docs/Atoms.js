import React from 'react'

// import Nav from './Nav'
// import Aside from './Aside'
// import Article from './Article'
// import Colors from './Colors'

const Atoms = props => {
  return (
    <div>
      <ul>
        <li><Link to={`${match.url}/colors`}>Colors</Link></li>
        <li><Link to={`${match.url}/typeography`}>Typeography</Link></li>
      </ul>
      <Route path={`${match.path}/:name`} render= {({match}) =>(
        <div>
          <h3>{match.params.name}</h3>
        </div>
      )}/>
    </div>
  )
}

export default Atoms


{/* <div>
  <Nav />

  <Aside>
    <h1>Atoms</h1>
    <p>Colors</p>
    <p>Typography</p>
    <p>Layout</p>
  </Aside>

  <Article>
    <Colors />
  </Article>
</div> */}
