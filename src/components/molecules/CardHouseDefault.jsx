import styled from 'styled-components'
import house from '../../assets/photos/house.jpg'
import { colors, FlexBox } from '../../styles'
import { Button, Text, Card } from '../atoms'

const ImgStyled = styled.img`
  border-radius: 5px;
  height: 100%;
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
`

export const CardHouseDefault = () => {
  return (
    <Card>
      <ImgStyled src={house} />
      <FlexBox padding='0.5rem'>
        <Text as='span'>Piso en Barcelona...</Text>
      </FlexBox>
      <FlexBox
        direction='row'
        justify='space-between'
        align='baseline'
        padding='0.5rem'
      >
        <Text color={colors.font.headings} as='span' fontWeight='bold'>
          939.000€
        </Text>
        <Button>Localizar</Button>
      </FlexBox>
    </Card>
  )
}
