import React from 'react';

import { Image, Text, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import planetsIcon from '../icons/solid/Planets.png';  
import asteroidsIcon from '../icons/solid/Asteroids.png';
import starIcon from '../icons/solid/Star.png';
import galaxiesIcon from '../icons/solid/Galaxies.png';

interface CategoryProps {
  index: number,
  title: string,
  colors: {
    first: string,
    second: string,
  }
}

export default function Category({ index, title, colors }: CategoryProps) {
  const images = [
    planetsIcon,  
    asteroidsIcon,
    starIcon,
    galaxiesIcon,
  ];

  return (
    <LinearGradient
      colors={[
        colors.first, 
        colors.second
      ]}
      style={styles.gradient}
    > 
      <Image source={images[index]} height={32} width={32} />
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: 80,
    width: 80,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 6,
  },

  title: {
    color: '#FFFFFF', 
    fontSize: 14,
  },
});