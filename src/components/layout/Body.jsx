import PropTypes from 'prop-types'
import Header from './Header'
import SubHeader from './SubHeader'
import { FlexBox } from '../../styles'

function Body({ children }) {
  return (
    <FlexBox>
      <Header />
      <SubHeader />
      {children}
    </FlexBox>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
