import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import backIcon from '../icons/regular/Back.png';
import settingsIcon from '../icons/regular/Settings.png';

interface HeaderProps {
  username: string,
  back: boolean,
};

export default function Header({ username, back }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {
          !back ? (
            <View style={styles.welcome}>
              <Text style={styles.hello}>Olá, </Text>
              <Text style={styles.username}>{username}</Text>
            </View>
          ) : (
            <Image source={backIcon} width={24} height={24}/>
          )
        }
        <Image source={settingsIcon} width={24} height={24}/>
      </View>
      {
        !back && <Text style={styles.subTitle}>O que você vai aprender hoje?</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%', 
    flexDirection: 'column',
    marginBottom: 8,
  },

  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  welcome: {
    flexDirection: 'row',
  },

  hello: {
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold' 
  },

  username: {
    color: '#FF6CD9', 
    fontSize: 32, 
    fontWeight: 'bold'
  },

  subTitle: {
    color: '#FFFFFF', 
    fontSize: 16,
  },
});