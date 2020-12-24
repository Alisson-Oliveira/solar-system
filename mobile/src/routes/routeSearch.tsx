import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Search from '../pages/search/Search';
import Details from '../pages/search/Details';

export default function routeSearch() {
  return (
    <Navigator
      initialRouteName='Search'
      screenOptions={{ 
        headerShown: false,
      }}
    >
      <Screen name="Search" component={Search} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}