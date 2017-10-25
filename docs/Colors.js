// placeholder design for colors
import React from 'react'
import styled from 'styled-components'

import ThemeColor from './ThemeColor'
import GrayscaleColor from './GrayscaleColor'

const Wrapper = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;

    p { width: 100%; }
  }
`

const Colors = props => {
  return (
    <Wrapper>
      <h2>Colors</h2>
      <div>
        <p>Theme Colors</p>
        <ThemeColor />
        <ThemeColor />
        <ThemeColor />
        <ThemeColor />
        <ThemeColor />
      </div>

      <div>
        <p>Grayscale</p>
        <GrayscaleColor className='first' />
        <GrayscaleColor />
        <GrayscaleColor />
        <GrayscaleColor />
        <GrayscaleColor className='last' />
      </div>
    </Wrapper>
  )
}

export default Colors
