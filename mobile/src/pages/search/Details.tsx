import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, 
  ScrollView, Dimensions, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 

import Header from '../../components/Header';

import starsImg from '../../../assets/images/Stars.png';
import saveIcon from '../../icons/regular/Save-2.png';
import shareIcon from '../../icons/regular/Share.png';

import sunImg from '../../../assets/images/Sun.png'; 
import mercuryImg from '../../../assets/images/Mercury.png'; 
import venusImg from '../../../assets/images/Venus.png'; 
import earthImg from '../../../assets/images/Earth.png'; 
import marsImg from '../../../assets/images/Mars.png'; 
import jupiterImg from '../../../assets/images/Jupiter.png'; 
import saturnImg from '../../../assets/images/Saturn.png'; 
import uranusImg from '../../../assets/images/Uranus.png'; 
import neptuneImg from '../../../assets/images/Neptune.png'; 
import plutoImg from '../../../assets/images/Pluto.png'; 

import { dataset, PlanetParams } from '../../database/data';

interface DetailsParams {
  id: number,
};

export default function Details() {
  const [introduction, setIntrodution] = useState(false);
  const [features, setFeatures] = useState(false);
  const [planet, setPlanet] = useState<PlanetParams[]>(dataset.planets);
  const [id, setId] = useState<number>(0);

  const route = useRoute();
  const params = route.params as DetailsParams;

  useEffect(() => {
    if (params) {
      setId(params.id);
    };
  }, []);

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

  return (
    <View style={styles.details}>       
      <ScrollView style={styles.full}>
        <View style={styles.backgroundImage}>
          <View style={styles.header}>
            <Header back={true} />
            <Image 
              source={getImage(planet[id].image)} 
              style={styles.imageBackground}
            />
          </View>
          <Image 
            style={styles.imageRelative}
            resizeMode='cover' 
            source={starsImg} 
          />
        </View> 
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{planet[id].name}</Text>
            <View style={styles.optionsRow}>
              <Image source={saveIcon} style={styles.iconSave} />
              <Image source={shareIcon} style={styles.iconShare} />
            </View>
          </View>
          <Text style={styles.text}>{planet[id].shortText}</Text>
          <RectButton onPress={() => setIntrodution(!introduction)}>
            <View style={styles.expansible}>
              <Feather 
                name={ !introduction ? 'chevron-down' : 'chevron-up' } 
                size={32} style={styles.expansibleDown}
              />
              <Text style={styles.expansibleTitle}>Introdução</Text>
            </View>
          </RectButton>
          {
            introduction && (
              <Text style={styles.introdutionText}>
                {planet[id].introduction}
              </Text>
            )
          }
          <RectButton onPress={() => setFeatures(!features)}>
            <View style={styles.expansible}>
              <Feather 
                name={ !features ? 'chevron-down' : 'chevron-up' } 
                size={32} style={styles.expansibleDown}
              />
              <Text style={styles.expansibleTitle}>Características Físicas</Text>
            </View>
          </RectButton>
          {
            features && (
              <View style={styles.featuresMarginVertical}>
                <Text style={styles.featuresText}>
                  Raio: {planet[id].features.radius}
                </Text>
                <Text style={styles.featuresText}>
                  Massa: {planet[id].features.mass}
                </Text>
              </View>
            )
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width, 
  },

  backgroundImage: {
    height: 280,
    width: '100%',
    borderBottomStartRadius: 32,
    borderBottomEndRadius: 32,
    backgroundColor: '#000000',
  },
  
  full: {
    flex: 1,
  },

  container: {
    padding: 24, 
    marginTop: 48,
    paddingBottom: 100,
  },

  header: {
    position: 'absolute', 
    zIndex: 1, 
    width: '100%', 
    padding: 24,
  },

  imageBackground: {
    width: 256, 
    height: 256, 
    marginTop: 16, 
    alignSelf: 'center',
  },

  imageRelative: {
    position: 'relative',
  },

  containerTitle: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  title: {
    fontSize: 32, 
    fontWeight: 'bold',
  },

  optionsRow: {
    flexDirection: 'row',
  },

  iconSave: {
    width: 32, 
    height: 32, 
    marginRight: 6,
  },

  iconShare: {
    width: 32, 
    height: 32,
  },

  text: {
    fontSize: 16, 
    textAlign: 'justify', 
    marginTop: 32,
  },

  expansible: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 16,
    borderBottomWidth: 1, 
    borderBottomColor: '#D2D2D2',
  },

  expansibleDown: {
    marginTop: 6, 
    marginRight: 12,
  },

  expansibleTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
  },

  expansibleContainer: {
    height: 200,
    width: '100%',
  },

  introdutionText: {
    fontSize: 16, 
    textAlign: 'justify', 
    marginTop: 12,
  },

  featuresMarginVertical: {
    marginVertical: 14,
  },

  featuresText: {
    fontSize: 16, 
    textAlign: 'justify', 
    marginTop: 12,
  },
});