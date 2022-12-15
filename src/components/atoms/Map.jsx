import styled from 'styled-components'
import { dimensions } from '../../styles'
import Title from './Title'

const MapStyle = styled.div`
  border-radius: 8px;
  min-width: 300px;
  margin: ${dimensions.padding};
  background-color: #90acff;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Map = () => {
  return (
    <MapStyle>
      <Title level='4'>mapa</Title>
    </MapStyle>
  )
}
