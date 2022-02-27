import { Box, HStack, Text, Image, useBreakpointValue } from '@chakra-ui/react';

export default function BannerHome() {

  const mdBreakPont = useBreakpointValue({
    base: false,
    md: true        // from 768px
  })
 
  return (
    <Box
      backgroundImage='images/BannerHome.svg'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      height={[163, 163, 211, 281, 335]}
    >
      <HStack
        margin='0 auto'
        maxWidth={['90%', '540px', '720px', '960', '1140']}
        spacing='auto'
        height='100%'
      >
        <Box
          maxWidth={['300px', '350px', '400px', '450px', '500px']}
        >
          <Text 
            fontSize={['20px', '24px',  '28px', '32px',  '36px']}
            fontStyle='normal'
            fontWeight='500'
            lineHeight={['30px', '36px', '42px', '48px', '54px']}
            color={'gray.100'} 
          >
            5 Continentes,<br/>
            infinitas possibilidades.
          </Text>

          <Text 
            fontSize={['14px', '15px',  '16px', '18px',  '20px']}
            fontStyle='normal'
            fontWeight='500'
            lineHeight={['21px', '22px', '24px', '27px', '30px']}
            color={'gray.200'}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        
        { mdBreakPont && (
          <Box
            position='relative'
            width={{base:'257px', lg:'344px', xl:'431px'}}
            height='100%'
          >
            <Image 
              src='images/Airplane.svg'
              position='absolute' 
              right='0'
              bottom='-33px'
            />
          </Box>        
        )}
      </HStack>
    </Box>
  )
}



