import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 54px;
  height: 27px;
  margin: 0;
  border: 1px solid #f2392a;
  padding: ${props => (props.noPadding ? `0` : `0 20px`)};
  color: #fff;
  font-size: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: #f2392a;
  transition: ease 0.5s;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #f2392a;
    background-color: #fff;
  }
`

export { Button }
