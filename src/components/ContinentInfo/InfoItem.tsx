import { Box, Text } from '@chakra-ui/react';

interface InfoItemProps {
  nameInfo: string,
  amount: number
}

export default function InfoItem({nameInfo, amount}: InfoItemProps) {
  return (
    <Box>
    <Text 
      textAlign='center'
      fontWeight='600'
      fontSize={['24px', '34px', '32px', '42px', '48px']}
      color='yellow.500'
    >{amount}</Text>
    <Text 
      textAlign='center'
      fontWeight='600'
      fontSize={['16px', '20px', '18px', '22px', '24px']}
      color='green.900'
    >{nameInfo}</Text>            
  </Box>    
  );
}