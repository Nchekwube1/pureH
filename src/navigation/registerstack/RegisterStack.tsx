import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterStackParams} from '../../types/types';
import CreateAccount from '../../screens/register/CreateAccount';
import ConfirmOTP from '../../screens/register/ConfirmOTP';
import SelectAccountType from '../../screens/register/SelectAccountType';
import SelectBloodGroup from '../../screens/register/SelectBloodGroup';
import SelectGender from '../../screens/register/SelectGender';
import SetupPassword from '../../screens/register/SetupPassword';
const Stack = createNativeStackNavigator<RegisterStackParams>();

const RegisterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
      }}>
      <Stack.Screen name="createAccount" component={CreateAccount} />
      <Stack.Screen name="confirmOTP" component={ConfirmOTP} />
      <Stack.Screen name="selectAccountType" component={SelectAccountType} />
      <Stack.Screen name="selectBloodgroup" component={SelectBloodGroup} />
      <Stack.Screen name="selectGender" component={SelectGender} />
      <Stack.Screen name="setupPassword" component={SetupPassword} />
    </Stack.Navigator>
  );
};

export default RegisterStack;
