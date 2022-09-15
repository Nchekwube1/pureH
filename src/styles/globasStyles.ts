import {Dimensions, StyleSheet} from 'react-native';
import pallete from '../constants/pallete';

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
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mr1: {
    marginRight: 10,
  },
  fontNunitoRegular: {
    fontFamily: 'Nunito-Regular',
  },
  fontNunitoBold: {
    fontFamily: 'Nunito-Bold',
  },
  textSizeNormal: {
    fontSize: 14,
  },
  textSizelg: {
    fontSize: 16,
  },
  textSizexl: {
    fontSize: 18,
  },
  textBlack: {
    color: pallete.black,
  },
  textWhite: {
    color: pallete.white,
  },
  flexRow: {
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
  },
  onBoardingIndicator: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: pallete.lightGray,
  },
});

export default globalStyles;
