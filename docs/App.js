import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

import { color } from './Theme'

import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import Aside from './Aside'
import Article from './Article'
import Colors from './Colors'
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
    <ThemeProvider theme={{ mode: 'light' }}>
      <Wrapper>
        <Header />

        <Main>
          <Nav />

          {/* {this.props.children} */}
          {/* this should be populated by the nav item you choose */}
          <Aside>
            <h1>Atoms</h1>
            <p>Colors</p>
            <p>Typography</p>
            <p>Layout</p>
          </Aside>

          {/* this should be populated by the secondary-nav item you choose */}
          <Article>
            <Colors />
          </Article>

        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
