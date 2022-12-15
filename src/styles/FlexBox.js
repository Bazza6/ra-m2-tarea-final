import styled from 'styled-components'

export const FlexBox = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: ${({ padding }) => padding || '0px'};
  border: ${({ border }) => border || 'none'};
`