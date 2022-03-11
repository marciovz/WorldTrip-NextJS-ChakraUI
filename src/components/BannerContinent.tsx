import { Flex, Box, Heading } from '@chakra-ui/react';

import GradientFilter from './GradientFilter';

interface BannerContinentProps {
  image: string,
  title: string
};

export default function BannerContinent({ image, title }: BannerContinentProps) {
  return (
    <Flex
      justifyContent='center'
      backgroundImage={`/continents/${image}`}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
      height={['150px', '200px', '300px', '400px', '500px']}
      position='relative'
    >
      <GradientFilter
        opacity={35} 
        orientation='to-b' 
        startColor='gray.800' 
        endColor='gray.800' 
      />

      <Box
        width={['100%', '540px', '720px', '960px', '1140px']}
        alignSelf={{ base: 'center', md:'flex-end'}}
        marginBottom={['0', '0', '40px', '50px', '60px' ]}
        zIndex='10'          
      >
        <Heading
          textAlign={{base: 'center', md: 'left'}}
          fontSize={['28px', '32px', '38px', '42px', '48px']}
          fontWeight={600}
          color={'gray.100'}
        >
          {title}
        </Heading>
      </Box>  

    </Flex>
  )
}