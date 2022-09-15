import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import pallete from '../../constants/pallete';
import TextComponent from '../text/TextComponent';
import globalStyles from '../../styles/globasStyles';

interface buttonInterface {
  title: string;
  onPress: () => void;
}

const ButtonComponent: FC<buttonInterface> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={buttonStyles.button}>
      <TextComponent
        style={[
          globalStyles.fontNunitoBold,
          globalStyles.textSizelg,
          globalStyles.textWhite,
        ]}>
        {title}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const buttonStyles = StyleSheet.create({
  button: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    backgroundColor: pallete.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
