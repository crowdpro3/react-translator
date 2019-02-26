import React, { Component } from 'react'

import { Normalize, TranslatorContext } from '../utils'
import { Heading, Wrapper } from './partials'
import { Workspace } from './Workspace'
import { Controls } from './Controls'

class App extends Component {
  state = {
    langFrom: 'английский',
    langTo: 'русский',
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
