// placeholder design for colors
import React from 'react'
import styled from 'styled-components'

import { color } from './Theme'

import ThemeColor from './ThemeColor'
import GrayscaleColor from './GrayscaleColor'
import AlertColor from './AlertColor'

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
        <ThemeColor type='primary' />
        <ThemeColor type='secondary' />
      </div>

      <div>
        <p>Grayscale</p>
        <GrayscaleColor type='gray0' className='first' />
        <GrayscaleColor type='gray1' />
        <GrayscaleColor type='gray2' />
        <GrayscaleColor type='gray3' />
        <GrayscaleColor type='gray4' />
        <GrayscaleColor type='gray5' className='last' />
      </div>

      <div>
        <p>Alert Colors</p>
        <AlertColor type='primary' />
        <AlertColor type='secondary' />
        <AlertColor type='secondary' />
        <AlertColor type='secondary' />
      </div>
    </Wrapper>
  )
}

export default Colors
