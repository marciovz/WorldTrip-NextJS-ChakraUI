import { Flex, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex 
      as='header'
      w='100%' 
      h={[50,100]} 
      align='center'
    >
      <Image
        src='/images/Logo.svg' 
        alt='logo' 
        m='0 auto' 
        h={['20px', '46px']}
      />
    </Flex>
  )
}