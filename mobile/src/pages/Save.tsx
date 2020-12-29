import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, 
  ImageBackground, ScrollView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Header from '../components/Header';
import Result from '../components/Result';
import { GET_STORAGE, SaveParams } from '../config/storage';
import { dataset, PlanetParams } from '../database/data';
import starsImg from '../images/Stars.png';

export default function Save() {
  const planets: PlanetParams[] = dataset.planets;
  const [ids, setIds] = useState<SaveParams[]>([]);

  useFocusEffect(() => {
    GET_STORAGE()
      .then(response => {
        if (response) {
          setIds(response);
        };
      })
  });

  return (
    <View style={styles.save}>
      <ImageBackground 
        resizeMode='cover' 
        source={starsImg} 
        style={styles.backgroundImage}
      >
        <Header back={true} />
        <Text style={styles.title}>Planetas salvos</Text>
        <ScrollView style={styles.full}>
          <View style={styles.container}>
            {
              ids.length !== 0 ? (
                ids.map((planet, index) => (
                  <View key={planet.id} style={{ marginTop: index !== 0 ? 24 : 0 }}>
                    <Result
                      index={planets[planet.id].id}
                      name={planets[planet.id].name}
                      image={planets[planet.id].image}
                      shortText={planets[planet.id].shortText}
                    />
                  </View>
                ))
              ) : (
                <View style={styles.nonePlanet}>
                  <Feather name='frown' size={32} color='#FFFFFF'/>
                  <Text style={styles.noneText}>Nenhum planeta salvo</Text>
                </View>
              )
            }
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

  title: {
    marginTop: 9.5,
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 12,
  },

  nonePlanet: {
    height: 200, 
    width: '100%', 
    backgroundColor: '#151515', 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  noneText: {
    fontSize: 14, 
    color: '#FFFFFF', 
    marginTop: 16,
  },
});