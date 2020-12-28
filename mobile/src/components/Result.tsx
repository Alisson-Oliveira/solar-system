import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import forwardIcon from '../icons/regular/Forward-2.png';
import saveIcon from '../icons/regular/Save.png';
import savedIcon from '../icons/solid/Saved.png';

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

import { ADD_SAVE, GET_STORAGE, REMOVE_SAVE, SaveParams } from '../config/storage';

interface SearchProps {
  index: number,
  name: string,
  image: string,
  shortText: string, 
};

export default function Result({ index, name, image, shortText }: SearchProps) {
  const [id, setId] = useState<number>(-1);
  const [state, setState] = useState(true);
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    if (state) {
      GET_STORAGE()
        .then(response => {
          if (response) {
            response.map(planet => {
              console.log(planet.id + " = " + index);
              if (planet.id === index) {
                setId(planet.id);
              }; 
            });
          };
        })
      setState(false);
    }
  });

  function getImage(image: string) {
    switch (image) {
      case 'Sun':
        return sunImg;
      case 'Mercury':
        return mercuryImg;
      case 'Venus':
        return venusImg;
      case 'Earth':
        return earthImg;
      case 'Mars':
        return marsImg;
      case 'Jupiter':
        return jupiterImg;
      case 'Saturn':
        return saturnImg;
      case 'Uranus':
        return uranusImg;
      case 'Neptune':
        return neptuneImg;
      case 'Pluto':
        return plutoImg;
      default:
        break;
    }
  };

  function handleToDetails(id: number) {
    return navigate('Details', { id });
  };

  async function handleSavePlanet(id: number) {
    try {
      const data = {
        id,
      } as SaveParams;
  
      await ADD_SAVE(data);

      setId(id);
      setState(true);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleRemovePlanet(id: number) {
    try {
      const data = {
        id,
      } as SaveParams;
  
      await REMOVE_SAVE(data);

      setId(-1);
      setState(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.result}>
      <Image source={getImage(image)} style={styles.lengthImage} />
      <View style={styles.content}>
        <View style={styles.nameSaved}>
          <Text style={styles.nameText}>{name}</Text> 
          {
            id === index ? (
              <RectButton onPress={() => handleRemovePlanet(index)}>
                <Image source={savedIcon} style={styles.lengthSave} />
              </RectButton>
            ) : (
              <RectButton onPress={() => handleSavePlanet(index)}>
                <Image source={saveIcon} style={styles.lengthSave} />
              </RectButton>
            ) 
          }
        </View>
        <Text style={styles.subTitle}>{shortText}</Text>
        <RectButton onPress={() => handleToDetails(index)} style={styles.continueReading}>
          <Text style={styles.continueReadingText}>Continuar lendo</Text>
          <Image source={forwardIcon} style={styles.lengthContinueReading} />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    width: '100%', 
    height: 200, 
    backgroundColor: '#151515', 
    borderRadius: 8, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 14,
  },

  lengthImage: {
    width: 128, 
    height: 128,
  },

  content: {
    flex: 1, 
    marginLeft: 24, 
    height: 128, 
    justifyContent: 'flex-start',
  },

  nameSaved: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  nameText: {
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold',
  },

  lengthSave: {
    width: 20, 
    height: 26,
    margin: 6,
  },

  subTitle: {
    color: '#FFFFFF', 
    fontSize: 13, 
    marginVertical: 9, 
    opacity: 0.6,
  },

  continueReading: {
    flexDirection: 'row', 
    alignItems: 'center',
  },

  continueReadingText: {
    color: '#FFFFFF',
    marginRight: 12, 
    fontSize: 14, 
    height: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  lengthContinueReading: {
    width: 16, 
    height: 16,
  },
});