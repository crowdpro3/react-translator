import React from 'react'
import { LangControlsBtn } from './LangControlsBtn'

const LangSelector = ({ children }) => {
  return (
    <LangControlsBtn>
      <span>{children}</span>
    </LangControlsBtn>
  )
}

export { LangSelector }
