import {TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';

import {inputStyles} from './inputStyles';
import TextComponent from '../text/TextComponent';
import {textInputProps} from '../../types/types';
import globalStyles from '../../styles/globasStyles';
import pallete from '../../constants/pallete';
const TextInputComponent: FC<textInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  numeric,
  maxLength,
  error,
  errorText,
  editable,
}) => {
  const [focus, setFocus] = useState(false);

  const changeFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };
  const blur = () => {
    setFocus(false);
    if (onBlur) {
      onBlur();
    }
  };
  return (
    <View
      style={[
        globalStyles.flex,
        globalStyles.mt1,
        globalStyles.mb1,
        globalStyles.w10,
        globalStyles.flexColumn,
      ]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={numeric ? 'number-pad' : 'default'}
        style={[
          globalStyles.textBlack,
          globalStyles.absolute,
          globalStyles.w10,
          globalStyles.h10,
          globalStyles.textInputHeight,
          globalStyles.px1,
          globalStyles.borderTextInput,
          focus && inputStyles.inputFocused,
          globalStyles.relative,
          globalStyles.fontNunitoRegular,
          error && globalStyles.borderRed,
          {
            width: '100%',
            borderRadius: 8,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={pallete.gray}
        onFocus={changeFocus}
        onBlur={blur}
        maxLength={maxLength ? maxLength : 200}
        editable={editable}
      />
      {errorText && (
        <TextComponent
          style={[
            globalStyles.textSizeXs,
            globalStyles.errorText,
            globalStyles.ml1,
            globalStyles.mt1,
          ]}>
          {`* ${errorText}`}
        </TextComponent>
      )}
    </View>
  );
};

export default TextInputComponent;
