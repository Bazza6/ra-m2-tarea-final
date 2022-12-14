import React from "react";
import styled from "styled-components";
import { dimensions } from "../../styles";

const MapStyle = styled.div`
  border: red solid 2px;
  border-radius: 8px;
  min-width: 300px;
  margin: ${dimensions.padding};
  background-color: #90acff;
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
