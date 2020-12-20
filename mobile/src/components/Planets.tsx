import React from 'react';

import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import forwardIcon from '../icons/regular/Forward.png';

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

interface PlanetsProps {
  index: number,
  name: string,
};

export default function Planets({ index, name }: PlanetsProps) {
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

  return (
    <>
      {
        index !== 9 ? (
          <View style={styles.card}>
            <Image source={images[index]} style={styles.image}>
            </Image>
            <View style={styles.container}>
              <Text style={styles.name}>{name}</Text>
              <Image source={forwardIcon} height={16} width={16} />
            </View>
          </View>
        ) : (
          <View style={[styles.card, { marginRight: 0 }]}>
            <Image source={images[index]} style={styles.image}>
            </Image>
            <View style={styles.container}>
              <Text style={styles.name}>{name}</Text>
              <Image source={forwardIcon} height={16} width={16} />
            </View>
          </View>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140, 
    height: 190, 
    borderRadius: 8, 
    backgroundColor: '#151515',
    marginRight: 24,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  container: {
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },

  image: {
    width: 112,
    height: 112,
    resizeMode: 'cover',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});