import { useRouter } from 'next/router';
import { Flex, Image, Icon } from '@chakra-ui/react';
import Link from 'next/link';

import { FiChevronLeft } from "react-icons/fi";

export default function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === '/';

  return (
    <Flex 
      as='header'
      width={['90%', '540px', '720px', '960px', '1140px']}
      h={['50px', '60px', '75px', '90px', '100px']}
      alignSelf='center'
      alignItems='center'
    >
      { !isHomePage && (
        <Link href='/' >
          <Icon 
            as={FiChevronLeft}
            width={['16px', '18px', '22px', '28px', '32px']}
            height={['16px', '18px', '22px', '28px', '32px']}
            color={'green.900'}
          />
        </Link> 
      )}
    
      <Image
        src='/images/Logo.svg' 
        alt='logo' 
        m='0 auto' 
        h={['20px', '26px', '32px', '40px', '46px']}
      />
    </Flex>
  )
}