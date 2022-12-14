import React from "react";
import styled from "styled-components";
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
        <SearchInputs />
      </SubHeader>
      <MainStyle direction="row">
        <Houses />
        <Map />
      </MainStyle>
    </Body>
  );
};
