import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexBox } from '../../styles'

export const MainContainerStyled = styled(FlexBox)`
  flex-grow: 1;
`

// Este componente es innecesario.
const MainContainer = ({ children, ...props }) => {
  return <MainContainerStyled {...props}>{children}</MainContainerStyled>
}

MainContainer.propTypes = {
  children: PropTypes.node,
}

export default styled(MainContainer)``
