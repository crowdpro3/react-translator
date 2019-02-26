import React from 'react'
import { TranslatorContext } from '../../utils'
import { LangSwitcherBtn } from './LangControlsBtn'
import { LangSwitcherIcon } from '../assets/'

const LangSwitcher = () => {
  return (
    <TranslatorContext.Consumer>
      {value => (
        <LangSwitcherBtn onClick={value.actions.swapLangs}>
          <LangSwitcherIcon />
        </LangSwitcherBtn>
      )}
    </TranslatorContext.Consumer>
  )
}

export { LangSwitcher }
