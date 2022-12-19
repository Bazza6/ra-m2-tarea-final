import styled from 'styled-components'
import { Body, SubHeader } from '../components/layout'
import { SearchInputs } from '../components/molecules'
import { Map } from '../components/atoms'
import { Houses } from '../components/organisms/Houses'
import { FlexBox } from '../styles'

const Container = styled(FlexBox)`
  flex-grow: 1;
`

export const Home = () => {
  return (
    <Body>
      <SubHeader>
        <SearchInputs />
      </SubHeader>
      <Container direction='row'>
        <Houses />
        <Map />
      </Container>
    </Body>
  )
}
