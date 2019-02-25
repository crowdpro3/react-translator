import React from 'react'
import styled from 'styled-components/macro'

const ButtonStyling = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 54px;
  height: 27px;
  margin: 0;
  border: 1px solid #f2392a;
  padding: ${props => (props.noPadding ? `0` : `0 20px`)};
  background-color: #f2392a;
  transition: ease 0.5s;
  cursor: pointer;
  outline: none;

  span {
    color: #fff;
    font-size: 12px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &:hover {
    background-color: #fff;

    span {
      color: #f2392a;
    }
  }
`

const Button = ({ children }) => {
  return (
    <ButtonStyling>
      <span>{children}</span>
    </ButtonStyling>
  )
}

export { ButtonStyling, Button }
