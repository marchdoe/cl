import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import { ThemeProvider } from 'styled-components'

addDecorator((story) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div
      style={{
        padding: 20
      }}
    >
      {story()}
    </div>
  </ThemeProvider>
))

setDefaults({
  inline: true,
  header: false
})

setOptions({
  name: 'CL',
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  sidebarAnimations: true,
  hierarchySeparator: /\/|\./
})

function loadStories () {
  const req = require.context('../src/components', true, /(\.story\.js$)|(\.story\.jsx$)/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
