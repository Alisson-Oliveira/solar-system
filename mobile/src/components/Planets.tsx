import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import forwardIcon from '../icons/regular/Forward.png';

import sunImg from '../../assets/images/Sun.png';
import mercuryImg from '../../assets/images/Mercury.png';
import venusImg from '../../assets/images/Venus.png';
import earthImg from '../../assets/images/Earth.png';
import marsImg from '../../assets/images/Mars.png';
import jupiterImg from '../../assets/images/Jupiter.png';
import saturnImg from '../../assets/images/Saturn.png';
import uranusImg from '../../assets/images/Uranus.png';
import neptuneImg from '../../assets/images/Neptune.png';
import plutoImg from '../../assets/images/Pluto.png';

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