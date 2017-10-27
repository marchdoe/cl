import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'

import theme from './Theme'
import Header from './Header'
import Nav from './Nav'
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

const Main = styled.main`
  background-color: white;
  flex: 1;
  display: flex;
`

const Aside = styled.aside`
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  min-width: 250px;
  border-right: 1px solid #eee;
`

const Article = styled.article`
  padding: 1rem 2rem;
`

const App = props => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Wrapper>
        <Header />

        <Main>
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
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
