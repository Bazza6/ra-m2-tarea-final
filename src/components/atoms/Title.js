import styled from 'styled-components'
import { colors, textDimensions } from '../../styles'

export const Title = styled.h1`
  color: ${({ color }) => color || colors.font.headings};
  font-size: ${({ fontSize }) => fontSize || textDimensions.font.h1};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`
