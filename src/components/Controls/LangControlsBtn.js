import styled from 'styled-components'
import { Button } from '../partials'

const LangControlsBtn = styled(Button)`
  min-width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #000;
  text-transform: none;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: #282e54;
  }
`

const LangSwitcherBtn = styled(LangControlsBtn)`
  min-width: auto;
  padding: 0 8px;

  svg {
    width: 14px;
    height: 14px;
    transform: rotate(90deg);
  }

  &:hover {
    svg path {
      fill: #fff;
    }
  }
`

export { LangControlsBtn, LangSwitcherBtn }
