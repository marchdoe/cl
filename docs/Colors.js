// placeholder design for colors
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;

    p { width: 100%; }
  }
`

const Color = styled.div`
  width: 110px;
  height: 110px;
  margin-right: 20px;
  margin-bottom: 10px;
  display: block;
  background-color: gray;
  border-radius: 3px;
`

const Colors = props => {
  return (
    <Wrapper>
      <div>
        <p>Theme Colors</p>
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </div>

      <div>
        <p>Grayscale</p>
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </div>
    </Wrapper>
  )
}

export default Colors
