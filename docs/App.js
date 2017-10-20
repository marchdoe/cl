import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Colors from './Colors'

injectGlobal`
  html {
    margin: 0;
    padding: 0;
    background-color: #333;
    color: white;
  }
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
`


const App = props => {
  return (
    <Wrapper>
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
      - [ ] Button
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
      - [ ] Hook up some flavor of CI
    </Wrapper>
  )
}

export default App
