import {extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '576px',            // 30%
  md: '768px',            // 40%
  lg: '992px',            // 51%
  xl: '1200px',           // 62%
  '2xl': '1920px'         // 100%
})

export const theme = extendTheme({
  breakpoints,
  colors:{
    gray: {
      '100': '#F5F8FA',
      '200': '#DADADA'
    },
    green: {
      900: '#47585B'
    },
    yellow: {
      500: '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {}
})