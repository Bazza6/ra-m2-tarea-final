import React from "react";
import styled from "styled-components";
import { dimensions, FlexBox } from "../../styles";
import { Card } from "../molecules";

const CardListStyle = styled(FlexBox)`
  //border: solid 1px yellow;
  flex: 1;
  flex-wrap: wrap;
  gap: 10px;
  margin: ${dimensions.padding};
`;

export const CardList = () => {
  return (
    <CardListStyle direction="row" /* paddingLeft={dimension.padding} */>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardListStyle>
  );
};
