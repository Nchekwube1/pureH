import {View, Text, StyleProp, TextStyle} from 'react-native';
import React, {FC} from 'react';
import globalStyles from '../../styles/globasStyles';

interface TextProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  children: any;
}
const TextComponent: FC<TextProps> = ({numberOfLines, style, children}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        globalStyles.fontNunitoRegular,
        globalStyles.textSizeNormal,
        globalStyles.textBlack,
        style,
      ]}>
      {children}
    </Text>
  );
};

export default TextComponent;
