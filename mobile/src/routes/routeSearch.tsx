import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Search from '../pages/Search';
import Details from '../pages/Details';

export default function RouteSearch() {
  return (
    <Stack.Navigator
      initialRouteName='Search'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}