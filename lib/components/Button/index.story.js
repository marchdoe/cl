import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button from '.'

storiesOf('Button', module)
  .add('default',
    withInfo('')(() => (
      <Button onClick={action('onClick')}>
        Test
      </Button>
      )
    )
  )
