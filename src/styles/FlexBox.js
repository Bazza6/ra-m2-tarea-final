import styled from 'styled-components'

const FlexBox = styled.div`
  border: ${({ border }) => border || 'none'};
  display: flex;
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'column'};
  //padding-left: ${({ paddingLeft }) => paddingLeft || '0px'}
`

export default FlexBox
