import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, textDimensions } from '../../styles'

const StyledHeading = styled.h1`
  color: ${({ color }) => color || colors.font.headings};
  font-size: ${({ fontSize }) => fontSize || textDimensions.font.h1};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
`

// Lo intentaria refactorizar como un styled-component unicamente
const Title = ({ level = 1, ...props }) => {
  return (
    <StyledHeading
      as={`h${level}`}
      fontSize={textDimensions.font[`h${level}`]}
      {...props}
    />
  )
}

Title.propTypes = {
  level: PropTypes.string,
  fontSize: PropTypes.string,
}

export default styled(Title)``
