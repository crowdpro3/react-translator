import React, { Component } from 'react'
import styled from 'styled-components'
import { ClearInput } from './ClearInput'
import { ClearInputIcon } from '../assets'

class InputBox extends Component {
  state = {
    textAreaValue: '',
    symbolsCount: 0,
    maxSymbolsCount: 100,
  }

  resetTextArea = () => {
    this.setState(() => {
      return {
        textAreaValue: '',
        symbolsCount: 0,
      }
    })
  }

  onTextAreaInput = event => {
    console.log('changed')
    const { maxSymbolsCount } = this.state
    const textAreaValue = event.target.value
    const symbolsCount = textAreaValue.length

    if (symbolsCount > maxSymbolsCount) {
      return false
    }

    this.setState(() => {
      return {
        textAreaValue,
        symbolsCount,
      }
    })
  }

  render() {
    const { symbolsCount, maxSymbolsCount, textAreaValue } = this.state

    return (
      <InputBoxContainer>
        <Textarea onChange={this.onTextAreaInput} value={textAreaValue} />
        <SymbolCounter>
          {symbolsCount}/{maxSymbolsCount}
        </SymbolCounter>
        <ClearInput onClick={this.resetTextArea}>
          <ClearInputIcon />
        </ClearInput>
      </InputBoxContainer>
    )
  }
}

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

export { InputBox }
