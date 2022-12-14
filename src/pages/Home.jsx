import React from "react";
import styled from "styled-components";
import { Input } from "../components/atoms";
import { Body, SubHeader } from "../components/layout";
import { Map, CardList } from "../components/organisms";
import { FlexBox } from "../styles";

const MainStyle = styled(FlexBox)`
  flex-grow: 1;
`;

export const Home = () => {
  return (
    <Body>
      <SubHeader>
        <Input />
        <Input />
      </SubHeader>
      <MainStyle direction="row">
        <CardList />
        <Map />
      </MainStyle>
    </Body>
  );
};
