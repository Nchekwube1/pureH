import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type OnboardingStackParamList = {
  Onboarding: undefined;
};
export type AuthStackParams = {
  registerStack: undefined;
  login: undefined;
  onboarding?: undefined;
};
export type AuthStackNavigationProps = NativeStackNavigationProp<
  AuthStackParams,
  'onboarding'
>;
export type RegisterStackParams = {
  createAccount: undefined;
  setupPassword: undefined;
  confirmOTP: undefined;
  selectAccountType: undefined;
  selectGender: undefined;
  selectBloodgroup: undefined;
};
export type RegisterStackNavigationProps = NativeStackNavigationProp<
  RegisterStackParams,
  'createAccount'
>;
