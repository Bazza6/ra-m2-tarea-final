import React from "react";
import styled from "styled-components";
import { dimensions, FlexBox } from "../../styles";
import Title from "../atoms/Title";
import Icon from "../atoms/Icon";
import IconRobot from "../../assets/icons/robot.svg";
import Button from "../atoms/Button";
import { Text } from "../atoms";

const HeaderStyled = styled(FlexBox)`
  //border: solid blue 1px;
  padding-left: ${dimensions.padding};
  padding-right: ${dimensions.padding};
`;

const UlStyle = styled.ul`
  display: flex;
  list-style: none;
  //margin-left: 1rem;
`;

const LiStyle = styled(Text)`
  margin-left: 1rem;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Title fontSize="24px" color="red">
        MIPISO.com
      </Title>

      <UlStyle>
        <LiStyle as="li">Buscar</LiStyle>
        <LiStyle as="li">Datos</LiStyle>
        <LiStyle as="li">Mi Perfil</LiStyle>
      </UlStyle>
    </HeaderStyled>
  );
}

export default Header;
