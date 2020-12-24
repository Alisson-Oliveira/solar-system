import React from 'react';
import { View, Text, StyleSheet, 
  ImageBackground, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import starsImg from '../../assets/images/Stars.png';

export default function Save() {
  return (
    <View style={styles.save}>
      <ImageBackground 
        resizeMode='cover' 
        source={starsImg} 
        style={styles.backgroundImage}
      >
        <Header back={true} />
        <ScrollView style={styles.full}>
          <View style={styles.container}>
            
            
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  save: {
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width, 
    backgroundColor: '#000000',
  },

  backgroundImage: {
    flex: 1,
    padding: 24,
  },

  full: {
    flex: 1,
  },

  container: {
    marginTop: 9.5,
    paddingBottom: 100,
  },
});