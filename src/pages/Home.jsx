import React from "react";
import styled from "styled-components";
import { Input } from "../components/atoms";
import { Body, SubHeader } from "../components/layout";
import { SearchInputs } from "../components/molecules";
import { Map } from "../components/organisms";
import { Houses } from "../components/organisms/Houses";
import { FlexBox } from "../styles";

const MainStyle = styled(FlexBox)`
  flex-grow: 1;
  //margin: 1rem;
  //padding: 1rem;
`;

export const Home = () => {
  return (
    <Body>
      <SubHeader>
        <SearchInputs
          id1={"tipo-vivienda"}
          id2={"lugar-vivienda"}
          placeholder1={"viviendas"}
          placeholder2={"Barcelona"}
          type1={"text"}
          type2={"text"}
          textButton={"search"}
        />
      </SubHeader>
      <MainStyle direction="row">
        <Houses />
        <Map />
      </MainStyle>
    </Body>
  );
};
