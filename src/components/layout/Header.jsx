import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'
import Title from '../atoms/Title'
import { Text } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding: 0 ${dimensions.padding};
  height: 4rem;
`

const UlStyle = styled.ul`
  display: flex;
  list-style: none;
`

const LiStyle = styled(Text)`
  margin-left: 1rem;
  cursor: pointer;
`

function Header() {
  return (
    <HeaderStyled direction='row' justify='space-between' align='baseline'>
      <Title fontSize='24px' color='red' fontWeight='normal'>
        MIPISO.com
      </Title>
      {/* Crea una molecula de menu que permita renderizar URLS + LABELS desde las cosntantes en donde se definan los menús */}
      <UlStyle>
        <LiStyle as='li'>Buscar</LiStyle>
        <LiStyle as='li'>Datos</LiStyle>
        <LiStyle as='li'>Mi Perfil</LiStyle>
      </UlStyle>
    </HeaderStyled>
  )
}

export default Header
