import PropTypes from 'prop-types'
import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'

const SubHeaderStyled = styled(FlexBox)`
  padding: ${({ padding }) => padding || dimensions.padding};
  height: 5rem;
  background-color: lightblue;
`

const SubHeader = ({ children }) => {
  return (
    <SubHeaderStyled
      direction='row'
      justify='flex-start'
      align='center'
      //   No veo esta prop en el styled-component
      paddingLeft={dimensions.padding}
    >
      {children}
    </SubHeaderStyled>
  )
}

SubHeader.propTypes = {
  children: PropTypes.node,
}

export default styled(SubHeader)``
