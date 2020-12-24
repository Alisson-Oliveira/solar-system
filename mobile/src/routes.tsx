import React from 'react';

import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import homeIcon from './icons/regular/Home.png';
import searchIcon from './icons/regular/Search.png';
import saveIcon from './icons/regular/Save.png';
import galleryIcon from './icons/regular/Gallery.png';

import Home from './pages/Home';
import RouteSearch from './routes/routeSearch';
import Save from './pages/Save';
import Gallery from './pages/Gallery';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#FFFFFF" 
        barStyle={{ 
          marginTop: -16,
          padding: 8,
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
          backgroundColor: '#151515',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: () => (
              <Image source={homeIcon} height={26} width={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="RouteSearch" 
          component={RouteSearch}
          options={{
            tabBarLabel: 'Pesquisar',
            tabBarIcon: () => (
              <Image source={searchIcon} height={26} width={26} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Save" 
          component={Save}
          options={{
            tabBarLabel: 'Salvos',
            tabBarIcon: () => (
              <Image source={saveIcon} height={26} width={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Gallery" 
          component={Gallery}
          options={{
            tabBarLabel: 'Galeria',
            tabBarIcon: () => (
              <Image source={galleryIcon} height={26} width={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}