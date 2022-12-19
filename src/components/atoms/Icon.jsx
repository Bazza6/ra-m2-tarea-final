import PropTypes from 'prop-types'

// Cambiar por un componente que renderice un icono basado en el input, sin necesidad de crear todos los iconos que usaremos en assets/icons/...
// Utilizar https://fonts.google.com/icons
export const Icon = ({ src, size, alt }) => {
  return <img src={src} width={size} height={size} alt={alt} />
}

Icon.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
}
