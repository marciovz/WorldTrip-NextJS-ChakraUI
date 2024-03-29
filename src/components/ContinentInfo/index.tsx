import { Flex, Text, SimpleGrid as InfosCol, SimpleGrid } from '@chakra-ui/react';

import InfoItem from './InfoItem';

interface ContinentInfoProps {
  continent: {
    id: string,
    description: string,
    informations: {
      countries: number,
      languages: number,
      cities: number
    }
  }
}

export default function ContinentInfo({continent}: ContinentInfoProps) {
  return (
    <Flex
      marginTop={['24px', '38px', '52px', '66px', '80px']}
      width={['90%', '540px', '720px', '960px', '1140px']}
      alignSelf='center'
      >
      <SimpleGrid columns={{base: 1, md: 2}} >
        <Text
          fontSize={['14px', '16px','20px','22px','24px']}
          fontWeight='400'
          color='green.900'
          lineHeight={['21px', '24px', '28px', '32px', '36px']}
          align='justify'
        >{continent.description}</Text>
        <InfosCol
          marginTop={{base: '16px', md: '0'}}
          justifyContent='center'
          alignItems='center'
          columns={3}
        >
          <InfoItem nameInfo='países' amount={continent.informations.countries}/>
          <InfoItem nameInfo='linguas' amount={continent.informations.languages}/>
          <InfoItem nameInfo='cidades +100' amount={continent.informations.cities}/>
        </InfosCol>

      </SimpleGrid>
    </Flex>
  )
}