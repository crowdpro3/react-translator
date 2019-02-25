import React from 'react'
import styled from 'styled-components/macro'
import { LangSelector } from './LangSelector'
import { LangSwitcher } from './LangSwitcher'

const LangControlsContainer = styled.div`
  display: flex;
`

const LangControls = () => {
  return (
    <LangControlsContainer>
      <LangSelector>английский</LangSelector>
      <LangSwitcher />
      <LangSelector>русский</LangSelector>
    </LangControlsContainer>
  )
}

export default LangControls
