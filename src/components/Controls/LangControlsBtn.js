import styled from 'styled-components/macro'
import { ButtonStyling } from '../partials'

const LangControlsBtn = styled(ButtonStyling)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;

  span {
    color: #000;
    text-transform: none;
  }

  &:hover {
    background-color: #282e54;

    span {
      color: #fff;
    }
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
