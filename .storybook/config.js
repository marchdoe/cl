import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

addDecorator((story) => (
  <div
    style={{
      padding: 20
    }}
  >
    {story()}
  </div>
));

setDefaults({
  inline: true,
  header: false
  // other defaults that can be set
  // maxPropsIntoLine: 1,
  // maxPropObjectKeys: 10,
  // maxPropArrayLength: 10,
  // maxPropStringLength: 100,
});

function loadStories () {
  const req = require.context('../lib/components', true, /(\.story\.js$)|(\.story\.jsx$)/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
