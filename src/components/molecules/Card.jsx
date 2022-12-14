import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, dimensions, FlexBox } from "../../styles";

export const Card = styled(FlexBox)`
  background: white;
  border: solid red 2px;
  box-shadow: 0px 3px 6px #00000029;
  //border: 1px solid ${colors.extraLightGrey};
  border-radius: ${dimensions.borderRadius}px;
  padding: 1rem;
`;

// function Card({ children, className = "" }) {
//   return <CardStyled className={className}>{children}</CardStyled>;
// }
// Card.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// export default styled(Card)``;

// import React from "react";
// import styled from "styled-components";

// const CardStyle = styled.div`
//   border: green 2px solid;
//   border-radius: 8px;
//   background-color: lightgreen;
//   width: 28%;
// `;

// export const Cards = () => {
//   return <CardStyle></CardStyle>;
// };
