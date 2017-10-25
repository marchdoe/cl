import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Header from './Header'
import Nav from './Nav'
import Colors from './Colors'
import Footer from './Footer'

injectGlobal`
  *  {
    box-sizing:border-box
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

        {/* <h3>Molecules</h3>
        <hr />

        <h3>Organisms</h3>
        <hr />

        <h3>Templates</h3>
        <hr />

        <h3>Pages</h3>
        <hr />

        <h2>Components to build</h2> */}
        {/* - [ ] Button
        - [ ] ButtonOutline
        - [ ] ButtonCircle
        - [ ] ButtonTransparent
        - [ ] Link
        - [ ] NavLink
        - [ ] BlockLink
        - [ ] Heading
        - [ ] Subhead
        - [ ] Text
        - [ ] Small
        - [ ] Lead
        - [ ] Blockquote
        - [ ] Measure
        - [ ] Truncate
        - [ ] Label
        - [ ] Input
        - [ ] Select
        - [ ] Select2
        - [ ] Textarea
        - [ ] Checkbox
        - [ ] Radio
        - [ ] Slider
        - [ ] Image
        - [ ] Avatar
        - [ ] BackgroundImage
        - [ ] Container
        - [ ] Divider
        - [ ] Border
        - [ ] Media
        - [ ] Card
        - [ ] Banner
        - [ ] Panel
        - [ ] PanelHeader
        - [ ] PanelFooter
        - [ ] Progress
        - [ ] Message
        - [ ] Group
        - [ ] Toolbar
        - [ ] Badge
        - [ ] Circle
        - [ ] Tabs
        - [ ] TabItem
        - [ ] DotButton
        - [ ] Close
        - [ ] Relative
        - [ ] Absolute
        - [ ] Fixed
        - [ ] Sticky
        - [ ] Drawer
        - [ ] Overlay
        - [ ] Carousel
        - [ ] ScrollCarousel
        - [ ] CarouselSlide
        - [ ] Tooltip
        - [ ] Switch
        - [ ] Arrow
        - [ ] Star
        - [ ] Embed
        - [ ] Donut
        - [ ] Row
        - [ ] Column

        ### Tooling
        - [ ] Hook up some flavor of CI */}

      </Main>

      {/* <aside class="aside aside-2">Aside 2</aside> */}
      <Footer />
    </Wrapper>
  )
}

export default App
