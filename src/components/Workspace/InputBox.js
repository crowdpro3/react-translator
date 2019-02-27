import React, { Component } from 'react'
import styled from 'styled-components'
import { TranslatorContext } from '../../utils'
import { ClearInput } from './ClearInput'
import { ClearInputIcon } from '../assets'

class InputBox extends Component {
  state = {
    isFocused: false,
  }

  focusHandler = isFocused => {
    this.setState(() => {
      return {
        isFocused,
      }
    })
  }

  render() {
    return (
      <TranslatorContext.Consumer>
        {({ state, actions }) => (
          <InputBoxContainer focused={this.state.isFocused}>
            <Textarea
              onChange={actions.onTextAreaInput}
              onFocus={() => this.focusHandler(true)}
              onBlur={() => this.focusHandler(false)}
              value={state.textAreaValue}
            />
            <SymbolCounter>
              {state.symbolsCount}/{state.maxSymbolsCount}
            </SymbolCounter>
            <ClearInput
              onClick={actions.resetTextArea}
              visible={!state.isEmpty}
            >
              <ClearInputIcon />
            </ClearInput>
          </InputBoxContainer>
        )}
      </TranslatorContext.Consumer>
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
  outline: ${props => (props.focused ? `1px solid #4d90fe` : `none`)};
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
