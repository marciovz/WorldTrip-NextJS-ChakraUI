import { Box, Heading, SimpleGrid, Wrap } from '@chakra-ui/react';

import CityItem from './CityItem'

interface City {
  id: string,
  name: string,
  image: string,
  country: string,
  countryFlag: string,
}
interface ContinentCitiesProps {
  cities: City[]
}


export default function ContinentCities({ cities }: ContinentCitiesProps) {
  return (
    <Box
      margin={['32px 0', '44px 0', '56px 0', '68px 0', '80px 0']}
      width={['90%', '540px', '720px', '960px', '1140px']}
      alignSelf='center'
    >
      <Heading
        fontStyle={['24px', '28px', '32px', '34px', '36px']}
        fontWeight='500'
        color='green.900'
      >Cidades +100</Heading>

      <SimpleGrid 
        marginTop={['20px', '25px', '30px', '40px', '50px']}
        justifyItems='center'
        columns={[1,2,2,3,4]} 
        spacingX={['0', '26px', '0', '95px','38px']} 
        spacingY={['20px', '26px', '34px', '42px', '48px']}
      >
        {cities.map(city => <CityItem key={city.id} city={city} /> )}
      </SimpleGrid>

    </Box>
  );
}