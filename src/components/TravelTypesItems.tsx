import { Flex, Box, Image, Stack,  Text, useBreakpointValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

interface TavelTypesItemsProps {
  iconName: string,
  name: string
}

export default function TravelTypesItems({ iconName, name }:TavelTypesItemsProps) {
  const [ isDesktop, setIsDesktop ] = useState(false);
  
  const mdBreakPoint = useBreakpointValue({
    base: false,
    md: true        // from 768px
  })

  useEffect(() => {
    setIsDesktop(mdBreakPoint)
  }, [mdBreakPoint])

  return (
    <Stack
      direction={{base: 'row', md:'column'}}
      alignItems='center'
      gap={{ base: '0', md: '25px' }}
    >
      { isDesktop ? (
        <Image 
        src={`images/${iconName}`} 
        alt='Type of Travel'
        boxSize={['0', '0', '65px', '75px', '85px']}
        />
      ) : (
        <Box
        width='8px'
        height='8px'
        borderRadius='50%'
        backgroundColor={'yellow.500'}      
        />
      ) }

      <Text
        marginLeft={{ base: '8px', md: '0'}}
        fontSize={{base: '18px', lg:'20px', xl:'24px'}}
        color={'green.900'}
        fontWeight='600'
        >{name}</Text>
    </Stack>
  )
}