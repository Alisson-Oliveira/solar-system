import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import backIcon from '../icons/regular/Back.png';
import settingsIcon from '../icons/regular/Settings.png';

interface HeaderProps {
  username?: string,
  back: boolean,
};

export default function Header({ username, back }: HeaderProps) {
  const { goBack } = useNavigation();

  return (
    <View style={[
      styles.header, { 
        marginTop: back ? 9.5 : 0,
        marginBottom: back ? 24 : 0,
      }
    ]}>
      <View style={styles.container}>
        {
          !back ? (
            <View style={styles.welcome}>
              <Text style={styles.hello}>Olá, </Text>
              <Text style={styles.username}>{username}</Text>
            </View>
          ) : (
            <RectButton onPress={goBack}>
              <Image source={backIcon} width={24} height={24}/>
            </RectButton>
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