import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleProp, TextInput, TextStyle} from 'react-native';

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

export interface textInputProps {
  value: any;
  onChangeText: (text: string) => void;
  label?: string;
  style?: StyleProp<TextStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder: string;
  noBackground?: boolean;
  editable?: boolean;
  onPress?: () => void;
  ref?: React.LegacyRef<TextInput>;
  autoFocus?: boolean;
  error?: boolean;
  errorText?: string;
  cbFunction?: () => void;
  loadingIcon?: boolean;
  clearButton?: boolean;
  onKeyPress?: () => void;
  multi?: boolean;
  optional?: boolean;
  numeric?: boolean;
  maxLength?: number;
}
