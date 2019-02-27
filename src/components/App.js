import React, { Component } from 'react'

import { Normalize, TranslatorContext } from '../utils'
import { Heading, Wrapper } from './partials'
import { Workspace } from './Workspace'
import { Controls } from './Controls'

class App extends Component {
  state = {
    langFrom: 'английский',
    langTo: 'русский',
    textAreaValue: '',
    symbolsCount: 0,
    maxSymbolsCount: 200,
    isEmpty: true,
  }

  resetTextArea = () => {
    this.setState(() => {
      return {
        textAreaValue: '',
        symbolsCount: 0,
        isEmpty: true,
      }
    })
  }

  onTextAreaInput = event => {
    const { maxSymbolsCount } = this.state
    const textAreaValue = event.target.value
    const symbolsCount = textAreaValue.length
    let isEmpty = textAreaValue === ''

    if (symbolsCount > maxSymbolsCount) {
      return false
    }

    this.setState(() => {
      return {
        textAreaValue,
        symbolsCount,
        isEmpty,
      }
    })
  }

  swapLangs = () => {
    const { langFrom, langTo } = this.state

    this.setState({
      langFrom: langTo,
      langTo: langFrom,
    })
  }

  render() {
    return (
      <TranslatorContext.Provider
        value={{
          state: this.state,
          actions: {
            swapLangs: this.swapLangs,
            getUserInput: this.getUserInput,
            resetTextArea: this.resetTextArea,
            onTextAreaInput: this.onTextAreaInput,
          },
        }}
      >
        <Wrapper>
          <Normalize />
          <Heading>Переводчик</Heading>
          <Workspace />
          <Controls />
        </Wrapper>
      </TranslatorContext.Provider>
    )
  }
}

export default App
