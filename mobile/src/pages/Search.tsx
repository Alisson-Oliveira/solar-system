import React, { useState } from 'react';
import { View, Text, StyleSheet, 
  ImageBackground, ScrollView, Dimensions, 
  TextInput, Image } from 'react-native';
import { useFocusEffect, useIsFocused, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 
import { checkName, convertNameToId } from '../utils/utils';

import Header from '../components/Header';
import Result from '../components/Result';
import searchIcon from '../icons/regular/Search.png';
import starsImg from '../images/Stars.png';

import { dataset, PlanetParams } from '../database/data';

interface SearchParams {
  name: string,
  random: number,
};

export default function Search() {
  const [value, setValue] = useState('');
  const planet: PlanetParams[] = dataset.planets;
  const focused = useIsFocused();
  const route = useRoute();
  const params = route.params as SearchParams;

  useFocusEffect(() => {
    if (params) {
      setValue(params.name);
    };
  });

  return (
    <View style={styles.search}>
      <ImageBackground 
        resizeMode='cover' 
        source={starsImg} 
        style={styles.backgroundImage}
      > 
        <Header back={true}/>
        <ScrollView style={styles.full}>
          <View style={styles.container}>
            <Text style={styles.title}>Resultado da busca</Text> 
            <View style={styles.searchInput}>
              <Image source={searchIcon} width={16} height={16} style={styles.iconSearch}/>
              <TextInput 
                editable={false}
                value={value}
                onChangeText={setValue}
                placeholder='Procure planetas, asteroides, estrelas...'
                placeholderTextColor='#FFFFFF'
                style={styles.inputText}              
              />
            </View> 
            { 
              checkName(value) !== '' ? (
                <Result 
                  index={planet[convertNameToId(value)].id}
                  name={planet[convertNameToId(value)].name}
                  image={planet[convertNameToId(value)].image}
                  shortText={planet[convertNameToId(value)].shortText} 
                />
              ) : (
                <View style={styles.nonePlanet}>
                  <Feather name='frown' size={32} color='#FFFFFF'/>
                  <Text style={styles.noneText}>Nenhum planeta encontrado</Text>
                </View>
              )
            }            
            <View>
              {
                checkName(value) !== '' ? (
                  <Text style={styles.youMightLike}>Você também pode gostar</Text>
                ) : (
                  <Text style={styles.youMightLike}>Você pode gostar</Text>
                )
              }
            </View> 
            {
              focused && (
                convertNameToId(value) !== 9 ? (
                  <Result 
                    index={planet[convertNameToId(value) + 1].id}  
                    name={planet[convertNameToId(value) + 1].name}
                    image={planet[convertNameToId(value) + 1].image}
                    shortText={planet[convertNameToId(value) + 1].shortText}  
                  />
                ) : (
                  <Result  
                    index={planet[0].id}  
                    name={planet[0].name}
                    image={planet[0].image}
                    shortText={planet[0].shortText}  
                  />
                )
              )              
            }
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
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
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 6,
  },

  searchInput: {
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
    opacity: 0.5,
  },

  inputText: {
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 14,
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

  youMightLike: {
    color: '#FFFFFF', 
    fontSize: 14, 
    marginVertical: 16,
  },
});