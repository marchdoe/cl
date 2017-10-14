import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'

addDecorator((story) => (
  <div style={{
    padding: 20
  }}>
    {story()}
  </div>
))

setDefaults({
  inline: true,
  header: false
})

setOptions({
  name: 'Doug March',
  url: 'https://doug-march.com',
  addonsPanelInRight: true,
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonsPanel: true,
  showSearchBox: false,
  sidebarAnimation: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./
})

function loadStories () {
  const req = require.context('../src/components', true, /(\.story\.js$)|(\.story\.jsx$)/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
