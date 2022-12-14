import React from "react";
import styled from "styled-components";
import { dimensions, FlexBox } from "../../styles";
import Title from "../atoms/Title";

//import IconRobot from "../../assets/icons/robot.svg";
const HeaderStyled = styled(FlexBox)`
  border: solid blue 1px;
  padding-left: ${dimensions.padding};
  padding-right: ${dimensions.padding};
`;

const UlStyle = styled.ul`
  display: flex;
  list-style: none;
`;

const LiStyle = styled.li`
  border: solid red 1px;
  margin-left: 1rem;
`;

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Title fontSize="24px" color="red">
        MIPISO.com
      </Title>

      {/* <img src={"../../assets/icons/cat.svg"}></img> */}
      <UlStyle>
        <LiStyle>Buscar</LiStyle>
        <LiStyle>Datos</LiStyle>
        <LiStyle>Mi Perfil</LiStyle>
      </UlStyle>
    </HeaderStyled>
  );
}

export default Header;
