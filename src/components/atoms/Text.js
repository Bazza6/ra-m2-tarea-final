import styled from 'styled-components'
import { colors, textDimensions } from '../../styles'

const Text = styled.p`
  color: ${({ color }) => color || colors.font.base};
  font-size: ${({ fontSize }) => fontSize || textDimensions.font.base};
`

export default Text
