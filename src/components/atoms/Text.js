import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Text = styled.p`
  color: ${({ color }) => color || colors.font.base};
  font-size: ${({ fontSize }) => fontSize || dimensions.font.base};
`

export default Text
