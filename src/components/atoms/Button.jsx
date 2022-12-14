import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../styles";

export default function Button({
  children,
  color = colors.main,
  onClick = () => {},
}) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
