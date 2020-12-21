import React, { useEffect, useState } from 'react';

import { 
  View, Text, StyleSheet, 
  Dimensions, Image, ImageBackground, 
  TextInput, ScrollView } from 'react-native';

import Header from '../components/Header';
import Category from '../components/Category';
import Planets from '../components/Planets';

import searchIcon from '../icons/regular/Search.png';

import starsImg from '../images/Stars.png';

import { HomeData, CategoriesParams, PlanetsParams } from '../database/data';

export default function Home() {
  const [planets, setPlanets] = useState<PlanetsParams[]>([]);
  const [categories, setCategories] = useState<CategoriesParams[]>([]);

  useEffect(() => {
    if (HomeData) {
      setPlanets(HomeData.planets);
      setCategories(HomeData.categories);
    }
  }, []);

  return (
    <View style={styles.home}>
      <ImageBackground resizeMode='cover' source={starsImg} style={styles.full}>     
        <ScrollView style={styles.full}>
          <View style={styles.content}>
            <Header username='Alisson Oliveira' back={false} />
            <View style={styles.search}>
              <Image source={searchIcon} width={16} height={16} style={styles.iconSearch}/>
              <TextInput 
                placeholder='Procure planetas, asteroides, estrelas...'
                placeholderTextColor='#FFFFFF'
                style={styles.inputText}              
              />
            </View>
            <View>
              <Text style={styles.title}>Categorias</Text>
              <View style={styles.category}>
                {
                  categories.map((category, index) => (
                    <Category 
                      key={index}
                      colors={{
                        first: category.colors.first, 
                        second: category.colors.second,
                      }}
                      index={index}
                      title={category.title}
                    />
                  ))
                }
              </View>
            </View>
            <View style={styles.planets}>
              <Text style={styles.title}>Planetas</Text>
              <ScrollView horizontal>
                { 
                  planets.map((planet, index) => (
                    <Planets
                      key={index}
                      index={index}
                      name={planet.name}
                    />
                  ))
                }
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width, 
    backgroundColor: '#000000',
  },

  full: {
    flex: 1,
  },

  content: {
    padding: 24, 
    paddingBottom: 120,
  },

  search: {
    height: 50, 
    width: '100%',
    backgroundColor: '#151515', 
    borderRadius: 8, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    flexDirection: 'row', 
    marginVertical: 32,
  },

  iconSearch: {
    marginHorizontal: 16,
  },

  inputText: {
    color: '#FFFFFF',
    fontSize: 14,
  },

  title: {
    color: '#FFFFFF', 
    fontSize: 16, 
    marginBottom: 20,
  },

  category: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },

  planets: {
    marginTop: 20,
  }
});