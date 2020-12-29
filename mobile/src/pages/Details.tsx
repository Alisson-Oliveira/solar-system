import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, 
  ScrollView, Dimensions, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 
import Header from '../components/Header';
import saveIcon from '../icons/regular/Save-2.png';
import savedIcon from '../icons/solid/Saved.png';
import shareIcon from '../icons/regular/Share.png';
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
import { dataset, PlanetParams } from '../database/data';
import { GET_STORAGE } from '../config/storage';

interface DetailsParams {
  id: number,
};

export default function Details() {
  const [introduction, setIntrodution] = useState(false);
  const [features, setFeatures] = useState(false);
  const [saved, setSaved] = useState(false);
  const planet: PlanetParams[] = dataset.planets;
  const [id, setId] = useState<number>(0);

  const route = useRoute();
  const params = route.params as DetailsParams;

  useFocusEffect(() => {
    if (params) {
      GET_STORAGE()
        .then(response => {
          if (response) {
            response.map(planet => {
              if (planet.id === params.id) {
                setSaved(true);
              }
            });
          };
        })

      setId(params.id);
    };
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

  return (
    <View style={styles.details}>       
      <ScrollView style={styles.full}>
        <View style={styles.backgroundImage}>
          <View style={styles.header}>
            <Header back={true} />
            <Image 
              source={getImage(planet[id].image)}
              resizeMode={ id === 6 ? 'contain' : 'cover' } 
              style={[styles.imageBackground, { width: id === 6 ? 364 : 256 }]}
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
              {
                saved ? (
                  <Image source={savedIcon} style={styles.lengthSave} />
                ) : (
                  <Image source={saveIcon} style={styles.lengthSave} />
                ) 
              }
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

  lengthSave: {
    width: 20, 
    height: 26,
    margin: 6,
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