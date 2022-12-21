import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'
import { Title } from '../atoms'
import { Menu } from '../molecules/Menu'

const HeaderStyled = styled(FlexBox)`
  padding: 0 ${dimensions.padding};
  height: 4rem;
`
const LinkStyled = styled(Link)`
  text-decoration: none;
`

function Header() {
  return (
    <HeaderStyled direction='row' justify='space-between' align='baseline'>
      <LinkStyled to='/'>
        <Title tag='h1' color='red'>
          MIPISO.com
        </Title>
      </LinkStyled>
      <Menu />
    </HeaderStyled>
  )
}

export default Header
