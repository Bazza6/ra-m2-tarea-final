import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, dimensions, FlexBox } from "../../styles";

export const Card = styled(FlexBox)`
  background: #ffffff;
  border: none;
  border-radius: ${dimensions.borderRadius};
  box-shadow: 0px 3px 6px #00000020;
  border-radius: ${dimensions.borderRadius}px;
`;
