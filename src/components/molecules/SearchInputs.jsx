import { FlexBox } from '../../styles'
import { Button, Label, Input, Icon } from '../atoms'
import search from '../../assets/icons/search.svg'

export const SearchInputs = () => {
  return (
    <FlexBox direction='row'>
      <Label htmlFor='tipo-vivienda'>tipo vivienda</Label>
      <Input
        placeholder='Busca un piso, chalet, garaje...'
        id='tipo-vivienda'
        type='text'
      />
      <Label htmlFor='lugar-vivienda'>lugar vivienda</Label>
      <Input
        placeholder='Busca en Barcelona, Madrid, Quahog...'
        id='lugar vivienda'
        type='text'
      />
      <Button padding='0px 8px' backgroundColor='#0066ff'>
        <Icon src={search} size='24' alt='search button' />
      </Button>
    </FlexBox>
  )
}
