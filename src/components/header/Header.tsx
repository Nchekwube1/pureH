import {View} from 'react-native';
import React from 'react';
import Svg from '../Svg';
import logo from '../../assets/svgs/logo';
import globalStyles from '../../styles/globasStyles';

const Header = () => {
  return (
    <View style={[globalStyles.py2, globalStyles.w10]}>
      <Svg icon={logo} />
    </View>
  );
};

export default Header;
