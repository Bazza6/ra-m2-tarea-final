import PropTypes from 'prop-types'

export const Label = ({ children, htmlFor, hidden = 'hidden' }) => {
  return (
    <label htmlFor={htmlFor} hidden={hidden}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  hidden: PropTypes.string,
}
