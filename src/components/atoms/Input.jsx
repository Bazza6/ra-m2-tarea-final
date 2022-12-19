import PropTypes from 'prop-types'
import styled from 'styled-components'
import { dimensions } from '../../styles'

const InputStyled = styled.input`
  width: ${({ width }) => width || '350px'};
  padding: ${({ padding }) => padding || '0.6rem'};
  border-radius: ${({ borderRadius }) =>
    borderRadius || dimensions.borderRadius};
  margin-right: ${({ marginRight }) => marginRight || '10px'};
  border: solid grey 1px;
  box-shadow: 0px 3px 6px #00000020;
`

// El type debería ir definido en los props. Existe una gran diferencia entre number, color y text, por ejemplo.
function Input({ id, placeholder, type, ...props }) {
  return (
    <InputStyled
      name={id}
      type={type}
      id={id}
      placeholder={placeholder}
      {...props}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default styled(Input)``
