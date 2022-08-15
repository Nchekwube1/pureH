/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
