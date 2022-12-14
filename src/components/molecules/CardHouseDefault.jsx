import React from "react";
import { Card } from "./Card";
import house from "../../assets/photos/house.jpg";
import { FlexBox } from "../../styles";
import styled from "styled-components";
import { Button } from "../atoms";

const ImgStyled = styled.img`
  border-radius: 5px;
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
`;

export const CardHouseDefault = () => {
  return (
    <Card>
      <ImgStyled src={house}></ImgStyled>
      <FlexBox padding="0.5rem">Piso en Barcelona</FlexBox>
      <FlexBox
        direction="row"
        justify="space-between"
        align="baseline"
        padding="0.5rem"
      >
        <span>98.000€</span>
        <Button>Localizar</Button>
      </FlexBox>
    </Card>
  );
};
