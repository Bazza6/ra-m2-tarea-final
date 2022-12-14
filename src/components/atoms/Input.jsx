import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  //height: 2.5rem;
  width: 300px;
  padding: 0.6rem;
  border-radius: 8px;
  margin-right: 10px;
  border: solid grey 1px;
  box-shadow: 0px 3px 6px #00000020;
`;

export const Input = ({ id, placeholder, type, size = 30 }) => {
  return (
    <InputStyled
      name={id}
      type={type}
      id={id}
      placeholder={placeholder}
      //size={size}
    />
  );
};
