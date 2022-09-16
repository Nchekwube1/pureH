import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import Onboarding from '../screens/onboarding/Onboarding';
import {AuthStackParams} from '../types/types';
import RegisterStack from './registerstack/RegisterStack';
import Login from '../screens/login/Login';
const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStacks = () => {
  const [firstLaunch, setFirstLaunch] = useState<boolean | null>(true);

  if (firstLaunch === null) {
    return null;
  } else if (firstLaunch === true) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="registerStack" component={RegisterStack} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="registerStack" component={RegisterStack} />
      </Stack.Navigator>
    );
  }
};
export default AuthStacks;
