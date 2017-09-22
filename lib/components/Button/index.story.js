import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs'

import Button from '.'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('with a button',
  withInfo('')(() => (
    <Button disabled={boolean('Disabled', false)} onClick={action('onClick')}>
      {text('Label', 'Hello Button')}
    </Button>
  )
))

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const buttonText = text('Purchase', 'Purchase')
  const count = number('Count', 3)

  const content = `${buttonText} ${count}`
  return (<Button>{content}</Button>)
})
