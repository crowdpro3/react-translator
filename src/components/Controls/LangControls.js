import React from 'react'
import styled from 'styled-components'
import { TranslatorContext } from '../../utils'
import { LangSelector } from './LangSelector'
import { LangSwitcher } from './LangSwitcher'

const LangControls = () => {
  return (
    <TranslatorContext.Consumer>
      {value => (
        <LangControlsContainer>
          <LangSelector>{value.state.langFrom}</LangSelector>
          <LangSwitcher />
          <LangSelector>{value.state.langTo}</LangSelector>
        </LangControlsContainer>
      )}
    </TranslatorContext.Consumer>
  )
}

const LangControlsContainer = styled.div`
  display: flex;
`

export default LangControls
