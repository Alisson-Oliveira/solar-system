import React, { useState } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { convertNameToId } from '../utils/utils';

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

interface SearchProps {
  name: string,
  text: string,
};

export default function Result({ name, text }: SearchProps) {
  const [saved, setSaved] = useState(false);
  const data = [
    {image: sunImg, text: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar...'},
    {image: mercuryImg, text: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres...'},
    {image: venusImg, text: 'Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol...'},
    {image: earthImg, text: 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar...'},
    {image: marsImg, text: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano...'},
    {image: jupiterImg, text: 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol...'},
    {image: saturnImg, text: 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter...'},
    {image: uranusImg, text: 'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar...'},
    {image: neptuneImg, text: 'Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão...'},
    {image: plutoImg, text: 'Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo...'}
  ];

  function checkIdorName(value: any): number {
    const isNumber = (val: number) => {
      return typeof val === "number";
    }

    return isNumber(value) ? value : convertNameToId(value);
  }

  return (
    <View style={styles.result}>
      <Image source={data[checkIdorName(name)].image} style={styles.lengthImage} />
      <View style={styles.content}>
        <View style={styles.nameSaved}>
          <Text style={styles.nameText}>{name}</Text>
          {
            saved ? (
              <RectButton onPress={() => setSaved(!saved)}>
                <Image source={savedIcon} style={styles.lengthSave} />
              </RectButton>
            ) : (
              <RectButton onPress={() => setSaved(!saved)}>
                <Image source={saveIcon} style={styles.lengthSave} />
              </RectButton>
            ) 
          }         
        </View>
        <Text style={styles.subTitle}>{data[checkIdorName(name)].text}</Text>
        <View style={styles.continueReading}>
          <Text style={styles.continueReadingText}>Continuar lendo</Text>
          <Image source={forwardIcon} style={styles.lengthContinueReading} />
        </View>
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