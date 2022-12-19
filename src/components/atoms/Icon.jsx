import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconStyled = styled.span`
  color: ${({ color }) => color || 'white'};
  font-size: ${({ size }) => size || '24px'};
  font-variation-settings: 'FILL' ${({ fill }) => fill | 0},
    'wght' ${({ wght }) => wght || 400}, 'GRAD' ${({ grad }) => grad || 0},
    'opsz' ${({ opsz }) => opsz || 40};
`

function Icon({
  name,
  color,
  size,
  fill,
  wght,
  grad,
  opsz,
  className,
  ...props
}) {
  return (
    <IconStyled
      className={`material-symbols-outlined ${className}`}
      size={size}
      color={color}
      fill={fill}
      wght={wght}
      grad={grad}
      opsz={opsz}
      {...props}
    >
      {name}
    </IconStyled>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  fill: PropTypes.number,
  wght: PropTypes.number,
  grad: PropTypes.number,
  opsz: PropTypes.number,
  className: PropTypes.string,
}

export default styled(Icon)``
