import { createElement } from 'react'
import styled from 'styled-components'
import { colors, textDimensions } from '../../styles'

const e = createElement
export const Title = styled(({ tag = 'h1', children, ...props }) =>
  e(tag, props, children),
)`
  color: ${({ color }) => color || colors.font.headings};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: ${({ fontSize, tag }) => fontSize || textDimensions.font[`${tag}`]};
`
