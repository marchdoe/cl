/* eslint-disable import/no-named-as-default */
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, NavLink, Route } from 'react-router-dom'

import HomePage from './HomePage'
import FuelSavingsPage from '../containers/FuelSavingsPage'
import AboutPage from './AboutPage'
import NotFoundPage from './NotFoundPage'

class App extends React.Component {
  render () {
    const activeStyle = { color: 'blue' }
    return (
      <main>
        <nav>
          <NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to='/fuel-savings' activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to='/about' activeStyle={activeStyle}>About</NavLink>
        </nav>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/fuel-savings' component={FuelSavingsPage} />
          <Route path='/about' component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
