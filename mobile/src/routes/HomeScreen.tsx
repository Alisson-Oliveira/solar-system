import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import RouteHome from './RouteHome';
import RouteSearch from './RouteSearch';
import Save from '../pages/Save';
import Gallery from '../pages/Gallery';

import homeIcon from '../icons/regular/Home.png';
import searchIcon from '../icons/regular/Search.png';
import saveIcon from '../icons/regular/Save.png';
import galleryIcon from '../icons/regular/Gallery.png';

export default function HomeScreen() {
  return (
    <Tab.Navigator 
      initialRouteName="RouteHome"
      activeColor="#FFFFFF"
      barStyle={styles.tabs}
    >
      <Tab.Screen 
        name="RouteHome" 
        component={RouteHome}
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
  );
}

const styles = StyleSheet.create({
  tabs: {
    padding: 8,
    marginTop: -16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    backgroundColor: '#151515',
  }
});