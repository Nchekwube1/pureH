import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import globalStyles from '../../styles/globasStyles';
import TextInputComponent from '../../components/textinput/TextInput';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  return (
    <View style={[globalStyles.px2]}>
      <Header />
      <TextInputComponent
        value={fullName}
        placeholder="Enter password"
        onChangeText={val => setFullName(val)}
      />
      <TextInputComponent
        value={fullName}
        placeholder="Enter email"
        onChangeText={val => setFullName(val)}
      />
    </View>
  );
};

export default CreateAccount;
