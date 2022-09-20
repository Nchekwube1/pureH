import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import globalStyles from '../../styles/globasStyles';
import TextInputComponent from '../../components/textinput/TextInput';
import ButtonComponent from '../../components/button/ButtonComponent';
import TextComponent from '../../components/text/TextComponent';
import Animated, {
  SlideInLeft,
  SlideInUp,
  SlideOutLeft,
} from 'react-native-reanimated';
import Svg from '../../components/Svg';
import google from '../../assets/svgs/google';
import apple from '../../assets/svgs/apple';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  return (
    <Animated.View entering={SlideInUp} style={[globalStyles.px2]}>
      <Header />
      <Animated.View
        entering={SlideInLeft}
        exiting={SlideOutLeft}
        style={[globalStyles.mb2]}>
        <TextComponent
          style={[globalStyles.fontNunitoBold, globalStyles.textSize1xl]}>
          Create an account
        </TextComponent>
        <TextComponent
          style={[globalStyles.colGray, globalStyles.textSizeSmall]}>
          Create an account to get started with PureH
        </TextComponent>
      </Animated.View>

      <TextInputComponent
        value={fullName}
        label={'Full name'}
        placeholder="Enter full name"
        onChangeText={val => setFullName(val)}
      />
      <TextInputComponent
        value={fullName}
        label={'Email address'}
        placeholder="Enter email"
        onChangeText={val => setFullName(val)}
      />
      <TextInputComponent
        value={fullName}
        label={'Phone number'}
        placeholder="Enter phone no."
        onChangeText={val => setFullName(val)}
      />
      <View style={[globalStyles.mt5]}>
        <ButtonComponent onPress={() => {}} title="Next" />
        <View style={[globalStyles.mt2]}>
          <TextComponent style={[globalStyles.textCenter]}>
            Already have an account?{' '}
            <TouchableOpacity>
              <TextComponent style={[globalStyles.colGren]}>
                Sign In
              </TextComponent>
            </TouchableOpacity>
          </TextComponent>
        </View>
        <View style={[globalStyles.mt2]}>
          <TextComponent style={[globalStyles.textCenter]}>
            Or continue with
          </TextComponent>
        </View>
        <View
          style={[
            globalStyles.mt2,
            globalStyles.w10,
            globalStyles.flexCenter,
            {
              justifyContent: 'space-between',
            },
          ]}>
          <TouchableOpacity
            style={[
              globalStyles.w4,
              globalStyles.borderTextInput,
              globalStyles.flexRow,
              globalStyles.flexCenter,
              {
                height: 50,
                borderRadius: 10,
                borderWidth: 1,
              },
            ]}>
            <Svg width={'25%'} icon={google} />
            <TextComponent>Google</TextComponent>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              globalStyles.w4,
              globalStyles.borderTextInput,
              globalStyles.flexRow,
              globalStyles.flexCenter,
              {
                height: 50,
                borderRadius: 10,
                borderWidth: 1,
              },
            ]}>
            <Svg width={'25%'} icon={apple} />
            <TextComponent>Apple</TextComponent>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default CreateAccount;
