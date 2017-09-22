import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'

addDecorator((story) => (
  <div
    style={{
      padding: 20
    }}
  >
    {story()}
  </div>
))

setDefaults({
  inline: true,
  header: false
})

setOptions({
  name: 'CL',
  url: '#',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./
})

function loadStories () {
  const req = require.context('../lib/components', true, /(\.story\.js$)|(\.story\.jsx$)/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
