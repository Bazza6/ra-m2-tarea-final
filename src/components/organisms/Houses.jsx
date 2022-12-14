import React from "react";
import styled from "styled-components";
import { Grid } from "../../styles";
import { CardHouseDefault, CardHouseFull } from "../molecules";

const HousesStyled = styled(Grid)`
  min-width: 750px;
  max-width: 850px;
  flex: 1;
  padding: 1rem;
`;

export const Houses = () => {
  return (
    <HousesStyled>
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
