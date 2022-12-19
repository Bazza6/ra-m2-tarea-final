import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

const menuItems = [
  {
    url: '/buscar',
    label: 'Buscar',
  },
  {
    url: '/datos',
    label: 'Datos',
  },
  {
    url: '/mi-perfil',
    label: 'Mi Perfil',
  },
]

const UlStyled = styled.ul`
  display: flex;
  list-style: none;
`
const LinkStyled = styled(Link)`
  color: ${colors.font.base};
  margin-left: 1rem;
  text-decoration: none;
`

export const Menu = () => {
  return (
    <UlStyled>
      {menuItems.map((item) => (
        <li key={item.url}>
          <LinkStyled to={item.url}>{item.label}</LinkStyled>
        </li>
      ))}
    </UlStyled>
  )
}
