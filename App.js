import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenWrapper from './src/components/ScreenWrapper';
import HomeStackNavigator from './src/navigations/HomeStackNavigator';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <ScreenWrapper>
        <HomeStackNavigator />
      </ScreenWrapper>
    </NavigationContainer>
  );
};

export default App;
