import { Box } from '@chakra-ui/react';

interface GradientFilterProps {
  zindex?: number,
  opacity?: number,
  startColor?: string,
  endColor?: string,
  orientation?: 'to-t' | 'to-b' | 'to-l' | 'to-r'
}

export default function GradientFilter({
  zindex=0,
  opacity=50,
  startColor='gray.800',
  endColor='gray.800',
  orientation='to-b'
}: GradientFilterProps) {
  return (
    <Box
      position='absolute'
      zIndex={zindex}
      width='100%'
      height='100%'
      top='0'
      bgGradient={`linear(${orientation}, ${startColor}, ${endColor})`}
      opacity={`${opacity}%`}
    >
  </Box>

  )
}