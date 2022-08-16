import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding/Onboarding';
import {OnboardingStackParamList} from '../types/types';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator<OnboardingStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
