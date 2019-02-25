import React from 'react'
import styled from 'styled-components/macro'
import { ClearInput, ClearInputIcon } from './ClearInput'

const InputBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  padding-top: 4px;
  padding-right: 4px;
  transition: box-shadow 0.25s;
`

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 105px;
  border: none;
  padding: 2px 20px 32px 8px;
  color: #282e54;
  font-size: 24px;
  font-family: 'PT Sans', sans-serif;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: rgba(255, 255, 255, 0);
  outline: none;
  resize: none;
  /* overflow-y: auto;
    overflow-x: auto; */
`

const SymbolCounter = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5px 7px;
  color: #282e54;
  font-size: 12px;
  font-family: 'PT Sans', sans-serif;
`

const InputBox = () => {
  return (
    <InputBoxContainer>
      <Textarea />
      <SymbolCounter>0/5000</SymbolCounter>
      <ClearInput>
        <ClearInputIcon />
      </ClearInput>
    </InputBoxContainer>
  )
}

export default InputBox
