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
    tablet: 768,
  },
});

export default theme;
