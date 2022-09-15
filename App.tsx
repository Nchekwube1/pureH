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
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import MainNavigation from './src/navigation/MainNavigation';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import colors from './src/constants/pallete';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/constants/theme';
const STATUSBAR_HEIGHT = getStatusBarHeight();
const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <ThemeProvider theme={theme}>
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
      <SafeAreaView style={{...StyleSheet.absoluteFillObject}}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
