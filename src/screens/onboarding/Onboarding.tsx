import {View, Text} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globasStyles';
import TextComponent from '../../components/text/TextComponent';

const Onboarding = () => {
  return (
    <View style={[globalStyles.px2]}>
      <TextComponent>Onboarding</TextComponent>
    </View>
  );
};

export default Onboarding;
