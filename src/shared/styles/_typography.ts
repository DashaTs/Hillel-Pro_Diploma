import GilroyBoldWoff2 from '../fonts/Gilroy-Bold.woff2';
import GilroyMediumWoff2 from '../fonts/Gilroy-Medium.woff2';
import GilroyRegularWoff2 from '../fonts/Gilroy-Regular.woff2';

import { createTheme } from '@mui/material/styles';

// interface IPropsFont {
//   fName: string;
//   fStyle: string;
//   fWeight: number;
//   fUrl: string;
// }

// class Font {
//   public fName: string;
//   public fStyle: string;
//   public fWeight: number;
//   public fUrl: string;

//   constructor({fName, fStyle, fWeight, fUrl}: IPropsFont) {
//     this.fName = fName;
//     this.fStyle = fStyle;
//     this.fWeight = fWeight;
//     this.fUrl = fUrl;

//     return {
//       fontFamily: this.fName,
//       fontStyle: this.fStyle,
//       fontDisplay: 'swap',
//       fontWeight: this.fWeight,
//       src: `
//         local(${this.fName}),
//         url(${this.fUrl}) format('woff2')
//       `,
//       unicodeRange:
//         'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
//     }
//   }
// }

// const GilroyRegular = new Font({ fName:'Gilroy', fStyle:'normal', fWeight:400, fUrl:GilroyRegularWoff2 });
// const GilroyMedium = new Font({ fName:'Gilroy', fStyle:'normal', fWeight:500, fUrl:GilroyMediumWoff2 });
// const GilroyBold = new Font({ fName:'Gilroy', fStyle:'normal', fWeight:700, fUrl:GilroyBoldWoff2 });


export const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy',
    fontSize: 8,
    body1: {
      fontWeight: 400,
    },
    h1: {
      fontSize: 28,
      fontWeight: 700
    },
    h2: {
      fontSize: 14,
      fontWeight: 500
    },
    h3: {
      fontSize: 14,
      fontWeight: 700
    },
    h4: {
      fontSize: 10,
      fontWeight: 700
    },
    h5: {
      fontSize: 10,
      fontWeight: 500
    },
    subtitle2: {
      fontSize: 6,
      fontWeight: 700
    },
    caption: {
      fontSize: 6,
      fontWeight: 400
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face [{
          fontFamily: 'Gilroy';
          fontStyle: normal;
          fontDisplay: swap;
          fontWeight: 400;
          src: local('Gilroy'), local('Gilroy-Regular'), url(${GilroyRegularWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }, {
          fontFamily: 'Gilroy';
          fontStyle: normal;
          fontDisplay: swap;
          fontWeight: 500;
          src: local('Gilroy'), local('Gilroy-Medium'), url(${GilroyMediumWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }, {
          fontFamily: 'Gilroy';
          fontStyle: normal;
          fontDisplay: swap;
          fontWeight: 700;
          src: local('Gilroy'), local('Gilroy-Bold'), url(${GilroyBoldWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }]
      `,
    },
  },

  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: 
  //       '@global': {
  //         '@font-face': [GilroyRegularWoff2, GilroyMediumWoff2, GilroyBoldWoff2],
  //     },
  //   },
  // },
});

export default theme;