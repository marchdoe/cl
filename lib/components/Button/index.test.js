import React from 'react'
import test from 'ava'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import Button from '.'

Enzyme.configure({ adapter: new Adapter() })

test('renders children when passed in', t => {
  const wrapper = shallow(
    <Button>
      Hello World
    </Button>
  )
  t.true(wrapper.contains('Hello World'))
})
