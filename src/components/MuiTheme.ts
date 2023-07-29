import { createTheme,PaletteColor,SimplePaletteColorOptions } from '@mui/material/styles';
import { green, purple ,lightGreen } from '@mui/material/colors';
import { Mitr } from 'next/font/google'



const mitr = Mitr({
  subsets:['thai'],
  weight:'400'
})



export const MuiTheme = createTheme({
  palette: {
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  typography: {
    fontFamily: mitr.style.fontFamily
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    custom: PaletteColor;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom?: SimplePaletteColorOptions;
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       mobile: 0,
//       tablet: 640,
//       laptop: 1024,
//       desktop: 1200,
//     },
//   },
// });

// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: false; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true; // adds the `mobile` breakpoint
//     tablet: true;
//     laptop: true;
//     desktop: true;
//   }
// }