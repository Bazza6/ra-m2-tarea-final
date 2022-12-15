import styled from 'styled-components'
import { Text, Card } from '../atoms'
import house from '../../assets/photos/house.jpg'

const ImgStyled = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const OverText = styled(Text)`
  position: absolute;
  top: 0.4rem;
  left: 1rem;
`

export const CardHouseFull = () => {
  return (
    <Card>
      <TextContainer>
        <ImgStyled src={house} />
        <OverText color='white'>Piso en Barcelona...</OverText>
      </TextContainer>
    </Card>
  )
}
