import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import { FlexBox } from '../../styles'

const StyledBody = styled(FlexBox)`
  min-height: 100vh;
  width: 100%;
`

export const Body = ({ children }) => {
  return (
    <StyledBody>
      <Header />
      {children}
    </StyledBody>
  )
}

Body.propTypes = {
  children: PropTypes.node,
}
