import PropTypes from "prop-types";
import { colors } from "../../styles/colors";
import { dimensions } from "../../styles/dimensions";

export const Label = ({
  children,
  //color = colors.font.base,
  //fontSize = dimensions,
  htmlFor,
  hidden = "hidden",
}) => {
  return (
    <label htmlFor={htmlFor} hidden={hidden}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  htmlFor: PropTypes.string,
};
