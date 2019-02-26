import React from 'react'
import { Button, FlexWrapper } from '../partials'
import LangControls from './LangControls'

const Controls = () => {
  return (
    <FlexWrapper as="section" margin={true}>
      <LangControls />
      <Button>перевести</Button>
    </FlexWrapper>
  )
}

export { Controls }
