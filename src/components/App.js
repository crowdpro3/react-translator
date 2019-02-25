import React, { Component } from 'react'
import { Normalize } from '../utils'
import { Heading, Wrapper } from './partials'
import Workspace from './Workspace'
import Controls from './Controls'

class App extends Component {
  state = {
    test: 'test',
  }

  render() {
    return (
      <Wrapper>
        <Normalize />
        <Heading>Переводчик</Heading>
        <Workspace />
        <Controls />
      </Wrapper>
    )
  }
}

export default App
