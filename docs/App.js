import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Header from './Header'
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
  color: #fff;
  background-color: #333;
  flex: 1;
  display: flex;
`

const Aside = styled.aside`
  background-color: white;
  color: black;
  padding: 2rem 1rem;
  min-width: 250px;
`

const Article = styled.article`
  padding: 1rem 2rem;
`

const App = props => {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Aside>
          Aside 1
        </Aside>

        <Article>
        <h1>Todo</h1>

        <h2>Organization</h2>

        <h3>Atoms</h3>
        <h4>Colors</h4>
        <Colors />
        <hr />

        <h3>Molecules</h3>
        <hr />

        <h3>Organisms</h3>
        <hr />

        <h3>Templates</h3>
        <hr />

        <h3>Pages</h3>
        <hr />

        <h2>Components to build</h2>
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
        </Article>
      </Main>

      {/* <aside class="aside aside-2">Aside 2</aside> */}
      <Footer />
    </Wrapper>
  )
}

export default App
