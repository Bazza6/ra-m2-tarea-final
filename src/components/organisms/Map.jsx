import React from "react";
import styled from "styled-components";
import { dimensions } from "../../styles";

const MapStyle = styled.div`
  border: grey solid 4px;
  border-radius: 8px;
  margin: ${dimensions.padding};
  background-color: lightgrey;
  flex: 1;
  //text-align: center;
  // align-self: stretch;
  //width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Map = () => {
  return (
    <MapStyle>
      <span>mapa</span>
    </MapStyle>
  );
};
