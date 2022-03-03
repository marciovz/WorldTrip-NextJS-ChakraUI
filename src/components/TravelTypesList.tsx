import { VStack, Wrap, Divider } from '@chakra-ui/react';
import TravelTypesItems from './TravelTypesItems';

export default function TravelTypesList() {
  return (
    <VStack
      width={['90%', '540px', '720px', '960px', '1140px']}
      margin={{base: '36px auto' , md:'80px auto' }}
      justifyContent='center'
      gap={{base: '30px', md:'80px'}}
    >
      <Wrap
        width={['90%', '540px', '720px', '960px', '1140px']}
        justify='center'
        spacing={['40px', '40px', '70px', '100px','130px']}
      >
        <TravelTypesItems iconName='cocktail.svg' name='vida noturna'/>
        <TravelTypesItems iconName='surf.svg' name='praia'/>
        <TravelTypesItems iconName='building.svg' name='moderno'/>
        <TravelTypesItems iconName='museum.svg' name='clássico'/>
        <TravelTypesItems iconName='earth.svg' name='e mais ...'/>
      </Wrap>

      <Divider
        marginTop='280px'
        width='90px'
        borderBottom='2px solid'
        borderColor={'green.900'}  
      />

    </VStack>
  )
}