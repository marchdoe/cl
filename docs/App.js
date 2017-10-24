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

const Nav = styled.nav`
  background-color: #ccc;
  width: 60px;
  text-align: center;
  padding: .5rem;
`

const NavLink = styled.a`
  text-align: center;
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
  background-color: #aaa;
  border: 1px solid #aaa;
  border-radius: 3px;
  display: inline-block;
  line-height: 2.4;
  text-decoration: none;

  color: #fff;
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
        <Nav>
          <NavLink href='#'>C</NavLink>
          <NavLink href='#'>T</NavLink>
          <NavLink href='#'>S</NavLink>
        </Nav>

        <Aside>
          <h1>Colors</h1>
          <p>Atom</p>
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
