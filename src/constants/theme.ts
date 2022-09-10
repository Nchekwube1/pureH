import {createTheme} from '@shopify/restyle';
import pallete from './pallete';

const theme = createTheme({
  colors: {
    mainBackground: pallete.white,
    mainForeground: pallete.black,
  },
  spacing: {
    xxxxxs: 4,
    xxxxs: 6,
    xxxs: 8,
    xxs: 10,
    xs: 12,
    s: 14,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    header: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: pallete.black,
    },
    subheader: {
      fontFamily: 'Montserrat-SemiBold',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: pallete.black,
    },
    body: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: pallete.black,
    },
  },
});

export default theme;
