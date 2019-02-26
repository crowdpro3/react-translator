import React from 'react'
import styled from 'styled-components'

const ResultBox = props => {
  return (
    <ResultBoxContainer>
      <ResultBoxText>{props.content || 'Waiting for content'}</ResultBoxText>
    </ResultBoxContainer>
  )
}

const ResultBoxContainer = styled.div`
  height: 100%;
  margin: 0;
  border: 1px solid whitesmoke;
  padding: 8px;
  padding-right: 4px;
  background: whitesmoke;
`

const ResultBoxText = styled.div`
  height: 100%;
  padding-right: 20px;
  color: #282e54;
  font-size: 24px;
  font-family: 'PT Sans', sans-serif;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: auto;
`

export { ResultBox }
