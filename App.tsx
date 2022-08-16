/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import MainNavigation from './src/navigation/MainNavigation';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import colors from './src/constants/Colors';
const STATUSBAR_HEIGHT = getStatusBarHeight();
const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <View style={{...StyleSheet.absoluteFillObject}}>
      <SafeAreaView
        style={{
          height: STATUSBAR_HEIGHT,
          backgroundColor: colors.primary,
        }}>
        <StatusBar
          backgroundColor={colors.primary}
          barStyle={'light-content'}
        />
      </SafeAreaView>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
