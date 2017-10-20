import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`

const Color = styled.li`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  margin-bottom: 10px;
  display: block;
  background-color: gray;
`

const Colors = props => {
  return (
    <Wrapper>
      <Color>pink</Color>
      <Color>pink</Color>
      <Color>pink</Color>
      <Color>pink</Color>
      <Color>pink</Color>
    </Wrapper>
  )
}

export default Colors
