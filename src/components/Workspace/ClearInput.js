import styled from 'styled-components'

const ClearInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 8px;
  width: 18px;
  height: 18px;
  margin: 0;
  border: none;
  padding: 0;
  opacity: 0.55;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;

  svg {
    width: 9px;
    height: 9px;
  }
`

export { ClearInput }
