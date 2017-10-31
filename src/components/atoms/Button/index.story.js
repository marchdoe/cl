import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import Button from '.'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('with a button',
  withInfo('')(() => (
    <div>
      <Button type='primary' disabled={boolean('Disabled', false)} onClick={action('onClick')}>
        {text('Label', 'Hello Button')}
      </Button>

      <Button type='secondary' disabled={boolean('Disabled', false)} onClick={action('onClick')}>
        {text('Label', 'Hello Button')}
      </Button>

      <Button type='danger' disabled={boolean('Disabled', false)} onClick={action('onClick')}>
        {text('Label', 'Hello Button')}
      </Button>
    </div>
  )
))
