import {Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/pallete';

export const {height, width} = Dimensions.get('window');
const globalStyles = StyleSheet.create({
  px1: {
    paddingHorizontal: 10,
  },
  px2: {
    paddingHorizontal: 20,
  },
  px3: {
    paddingHorizontal: 30,
  },
  px4: {
    paddingHorizontal: 40,
  },
  px5: {
    paddingHorizontal: 50,
  },
  px6: {
    paddingHorizontal: 60,
  },
  px7: {
    paddingHorizontal: 70,
  },
  px8: {
    paddingHorizontal: 80,
  },
  px9: {
    paddingHorizontal: 90,
  },
  px10: {
    paddingHorizontal: 100,
  },
  py1: {
    paddingVertical: 10,
  },
  py2: {
    paddingVertical: 20,
  },
  fontNunitoRegular: {
    fontFamily: 'Nunito-Regular',
  },
  textSizeNormal: {
    fontSize: 14,
  },
  textBlack: {
    color: colors.black,
  },
});

export default globalStyles;
