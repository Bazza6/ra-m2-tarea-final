import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  text-align: center;
  background: ${({ backgroundColor }) => backgroundColor || '#8077A3'};
  color: ${({ color }) => color || 'white'};
  padding: ${({ padding }) => padding || '0.1rem 1.2rem'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

const Button = ({
  type = 'button',
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default styled(Button)``
