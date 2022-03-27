import { Flex, Image, Heading, Text } from '@chakra-ui/react';

interface CityItemProps {
  city: {
    id: string,
    image: string,
    name: string,
    country: string,
    countryFlag: string,
  }
}

export default function cityItem({city}: CityItemProps) {
  return (
    <Flex width={['256px']} direction='column'>
      <Flex 
        overflow='hidden' 
        cursor='pointer'
        borderTopRadius='5px'
      >
        <Image 
          src={`/cities/${city.image}`}
          width='100%'
          height='173px'
          objectFit='cover'
          objectPosition='center'
          transition='0.5s'
          _hover={{transform: 'scale(1.1)' }} 
        />
      </Flex>
      
      <Flex 
        padding='18px 24px 25px'
        justifyContent='space-between' 
        border='1px solid'
        borderColor='yellow.500'
        borderBottomRadius='5px'
        borderTop='none'
      >
        <Flex direction='column'>
          <Heading
            fontFamily='Barlow'
            fontSize='20px'
            fontWeight='600'
            color='green.900'
          >{city.name}</Heading>

          <Text
            marginTop='12px'
            fontFamily='Barlow'
            fontSize='16px'
            fontWeight='500'
            color='gray.300'
          >{city.country}</Text>
        </Flex>

        <Image 
          src={`/countriesflag/${city.countryFlag}`}
          width='30px'
          height='30px'
          alignSelf='center' 
        />
      </Flex>
    </Flex>
  );
}