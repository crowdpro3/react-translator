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
  opacity: ${props => (props.visible ? `0.55` : `0`)};
  visibility: ${props => (props.visible ? `visible` : `hidden`)};
  background-color: transparent;
  box-shadow: none;

  svg {
    width: 9px;
    height: 9px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

export { ClearInput }
