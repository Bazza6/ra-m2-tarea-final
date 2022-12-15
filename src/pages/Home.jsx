import { Body, MainContainer, SubHeader } from '../components/layout'
import { SearchInputs } from '../components/molecules'
import { Map } from '../components/atoms'
import { Houses } from '../components/organisms/Houses'

export const Home = () => {
  return (
    <Body>
      <SubHeader>
        <SearchInputs />
      </SubHeader>
      <MainContainer direction='row'>
        <Houses />
        <Map />
      </MainContainer>
    </Body>
  )
}
