import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'

export const Card = styled(FlexBox)`
  background: 'white';
  border: none;
  box-shadow: 0px 3px 6px #00000020;
  border-radius: ${dimensions.borderRadius}px;
`