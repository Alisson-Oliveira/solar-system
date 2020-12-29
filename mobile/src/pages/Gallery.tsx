import React from 'react';
import { View, Image, StyleSheet, Text, 
  ImageBackground, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import starsImg from '../images/Stars.png';

import sunImg from '../images/Sun.png'; 
import mercuryImg from '../images/Mercury.png'; 
import venusImg from '../images/Venus.png'; 
import earthImg from '../images/Earth.png'; 
import marsImg from '../images/Mars.png'; 
import jupiterImg from '../images/Jupiter.png'; 
import saturnImg from '../images/Saturn.png'; 
import uranusImg from '../images/Uranus.png'; 
import neptuneImg from '../images/Neptune.png'; 
import plutoImg from '../images/Pluto.png'; 

export default function Gallery() {
  const images = [
    sunImg,
    mercuryImg,
    venusImg,
    earthImg,
    marsImg,
    jupiterImg,
    saturnImg,
    uranusImg,
    neptuneImg,
    plutoImg
  ];

  const names = [
    'Sol',
    'Mercúrio',
    'Vênus',
    'Terra',
    'Marte',
    'Júpiter',
    'Saturno',
    'Urânio',
    'Netuno',
    'Plutão'
  ];

  function systemMarginTop(index: number): number {
    return index !== 0 ? 24 : 0;
  };

  function systemMarginLeft(index: number): number {
    return index !== 6 ? 50 : 0;
  };

  function systemSize(index: number, type: string): number {
    switch (type) {
      case 'width':
        return index === 6 ? 210 : 120;
      case 'height':
        return index === 6 ? 134 : 120;
      default:
        return -1;
    }
  };

  return (
    <View style={styles.gallery}>
      <ImageBackground 
        resizeMode='cover' 
        source={starsImg} 
        style={styles.backgroundImage}
      >
        <Header back={true} />
        <Text style={styles.title}>Ilustrações dos planetas</Text>
        <ScrollView style={styles.full}>
          <View style={styles.container}>
            {
              images.map((planet, index) => (
                <View key={index} style={styles.content}>
                  <Image 
                    source={planet} 
                    style={[styles.image, { 
                      marginTop: systemMarginTop(index),
                      marginLeft: systemMarginLeft(index), 
                      width: systemSize(index, 'width'), 
                      height: systemSize(index, 'height'),
                    }]} 
                    resizeMode={index === 6 ? 'contain' : 'cover'}
                  />
                  <Text style={[
                    styles.name, { 
                      marginLeft: index !== 6 ? 60 : 20 
                    }
                  ]}>
                    {names[index]}
                  </Text>
                </View>
              ))
            }            
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
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

  title: {
    marginTop: 9.5,
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 12,
  },

  container: {
    flex: 1,
    marginTop: 9.5,
    paddingBottom: 100,
    alignItems: 'center',
  },

  content: {
    alignSelf: 'flex-start', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row',
  },

  image: {
    width: 112,
    height: 112,
  },

  name: {
    fontSize: 26, 
    fontWeight: 'bold', 
    color:'#FFFFFF',
  },
});