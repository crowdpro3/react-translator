import styled from 'styled-components/macro'

const Wrapper = styled.div`
  padding-left: 28px;
  padding-right: 28px;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => (props.margin ? '20px' : '0')};
`

export { Wrapper, FlexWrapper }
