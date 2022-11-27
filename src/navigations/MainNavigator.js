import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialTopTabNavigator();

const MainTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, fontWeight: '700'},
      }}>
      <Tab.Screen
        name="Listing"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabsNavigator;
