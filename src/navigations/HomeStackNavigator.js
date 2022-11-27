import {createStackNavigator} from '@react-navigation/stack';

import MovieDetailScreen from '../screens/MovieDetailScreen';
import MainTabsNavigator from './MainNavigator';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={MovieDetailScreen}
        options={{
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
