import React from "react";
import styled from "styled-components";
import { dimensions } from "../../styles";

const InputStyled = styled.input`
  //height: 2.5rem;
  width: ${({ width }) => width || "350px"};
  padding: ${({ padding }) => padding || "0.6rem"};
  border-radius: ${({ borderRadius }) =>
    borderRadius || dimensions.borderRadius};
  margin-right: ${({ marginRight }) => marginRight || "10px"};
  border: solid grey 1px;
  box-shadow: 0px 3px 6px #00000020;
`;

function Input({ id, placeholder, type, ...props }) {
  return (
    <InputStyled
      name={id}
      type={type}
      id={id}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default styled(Input)``;
