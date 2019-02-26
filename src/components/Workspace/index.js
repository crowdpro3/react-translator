import React, { Component } from 'react'
import { FlexWrapper } from '../partials'
import { WorkspaceBox } from './WorkspaceBox'
import { InputBox } from './InputBox'
import { ResultBox } from './ResultBox'

class Workspace extends Component {
  render() {
    return (
      <FlexWrapper as="section">
        <WorkspaceBox>
          <InputBox />
        </WorkspaceBox>
        <WorkspaceBox>
          <ResultBox />
        </WorkspaceBox>
      </FlexWrapper>
    )
  }
}

export { Workspace }
