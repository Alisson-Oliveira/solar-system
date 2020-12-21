import React, { useState } from 'react';

import { View, Text, StyleSheet, ImageBackground, ScrollView, Dimensions, TextInput, Image } from 'react-native';

import { checkName, convertIdToName, convertNameToId } from '../utils/utils';

import Header from '../components/Header';
import Result from '../components/Result';

import searchIcon from '../icons/regular/Search.png';

import starsImg from '../images/Stars.png';

export default function Search() {
  const [value, setValue] = useState('');

  function randomPlanets(name: string): string {
    const id = convertNameToId(name);

    return id < 9 ? convertIdToName(id + 1) : convertIdToName(0); 
  }

  return (
    <View style={styles.search}>
      <ImageBackground resizeMode='cover' source={starsImg} style={styles.full}>
        <ScrollView style={styles.full}>
          <View style={styles.container}>
            <Header back={true}/>
            <Text style={styles.title}>Resultados da busca</Text>
            <View style={styles.searchInput}>
              <Image source={searchIcon} width={16} height={16} style={styles.iconSearch}/>
              <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder='Procure planetas, asteroides, estrelas...'
                placeholderTextColor='#FFFFFF'
                style={styles.inputText}              
              />
            </View> 
            {
              checkName(value) !== '' && (
                <Result 
                  name={value}
                  text='O sol é a nossa estrela...'
                />
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

              <Result 
                name={randomPlanets(value)}
                text='Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homena...'
              />
            </View>
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

  full: {
    flex: 1,
  },

  container: {
    padding: 24, 
    marginTop: 9.5,
    paddingBottom: 120,
  },

  title: {
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginTop: 16, 
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
  },

  inputText: {
    color: '#FFFFFF',
    fontSize: 14,
  },

  youMightLike: {
    color: '#FFFFFF', 
    fontSize: 14, 
    marginVertical: 16,
  },
});