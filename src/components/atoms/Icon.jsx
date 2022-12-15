import PropTypes from 'prop-types'

export const Icon = ({ src, size, alt }) => {
  return <img src={src} width={size} height={size} alt={alt} />
}

Icon.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
}
