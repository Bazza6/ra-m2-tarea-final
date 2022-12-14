import React from "react";
import styled from "styled-components";
import { dimensions, FlexBox, Grid } from "../../styles";
import { CardHouseDefault, CardHouseFull } from "../molecules";

const HousesStyled = styled(Grid)`
  //border: solid 2px green;
  min-width: 700px;
  flex: 1;
  padding: 1rem;
  //flex-wrap: wrap;
  //gap: 10px;
  //margin: ${dimensions.padding};
`;

export const Houses = () => {
  return (
    <HousesStyled /* paddingLeft={dimension.padding} */>
      <CardHouseFull />
      <CardHouseDefault />
      <CardHouseDefault />
      <CardHouseDefault />
      <CardHouseDefault />
      <CardHouseDefault />
      <CardHouseDefault />
      <CardHouseDefault />
      <CardHouseDefault />
    </HousesStyled>
  );
};
