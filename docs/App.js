import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

import { color } from './Theme'

import Home from './Home'
import Atoms from './Atoms'
import Molecules from './Molecules'
import Organisms from './Organisms'
import NotFound from './NotFound'

import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import Footer from './Footer'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.5;
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const App = props => {
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <BrowserRouter>
        <Wrapper>
          <Header />

          <Main>
            <Nav />

            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route path="/atoms" component={Atoms}/>
              <Route path="/molecules" component={Molecules}/>
              <Route path="/organisms" component={Organisms}/>
              <Route component={NotFound} />
            </Switch>

          </Main>

          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
