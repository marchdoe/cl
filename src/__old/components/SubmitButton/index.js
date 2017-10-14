import React, { Component } from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

import Button from '../Button'

const Demo0 = styled.div`
  border-radius: 4px;
  background-color: white;
  border: 2px solid lightgray;
  position: relative;
  margin-left: 20px;
  width: 50px;
  height: 20px;
`

const Demo0Block = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: lightgreen;
`

class SubmitButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleMouseDown = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleTouchStart = (e) => {
    e.preventDefault()
    this.handleMouseDown()
  }

  render () {
    return (
      <div>
        <Button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle

          <Motion style={{x: spring(this.state.open ? 30 : 0)}}>
            {({x}) =>
              // children is a callback which should accept the current value of
              // `style`
              <Demo0>
                <Demo0Block style={{
                  transform: `translate3d(${x}px, 0, 0)`
                }} />
              </Demo0>
            }
          </Motion>
        </Button>
      </div>
    )
  }
}

export default SubmitButton
