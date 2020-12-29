import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, 
  Alert, TouchableHighlight, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import backIcon from '../icons/regular/Back.png';
import settingsIcon from '../icons/regular/Settings.png';
import starsImg from '../images/Stars.png';
import App from '../../app.json';

interface HeaderProps {
  username?: string,
  back: boolean,
};

export default function Header({ username, back }: HeaderProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const { goBack } = useNavigation();

  return (
    <>
      <View style={[
        styles.header, { 
          marginTop: back ? 9.5 : 0,
          marginBottom: back ? 24 : 0,
        }
      ]}>
        <View style={styles.container}>
          {
            !back ? (
              <View style={styles.welcome}>
                <Text style={styles.hello}>Olá, </Text>
                <Text style={styles.username}>{username}</Text>
              </View>
            ) : (
              <RectButton onPress={goBack}>
                <Image source={backIcon} width={24} height={24}/>
              </RectButton>
            )
          }
          <RectButton onPress={() => setModalVisible(true)}>
            <Image source={settingsIcon} width={24} height={24}/>
          </RectButton>
        </View>
        {
          !back && <Text style={styles.subTitle}>O que você vai aprender hoje?</Text>
        }
      </View>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <ImageBackground 
          resizeMode='cover' 
          source={starsImg} 
          style={styles.full}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.contentVersion}>
                <View style={styles.version}>
                  <Feather name='package' size={20} color='#FFFFFF' />
                  <Text style={styles.modalText}> Versão </Text>
                </View>
                <Text style={styles.modalText}>{App.expo.version}</Text>
              </View>              
              <TouchableHighlight onPress={() => {
                  setModalVisible(!modalVisible);
                }
              }>
                <LinearGradient
                  start={[1, 0]}
                  colors={['#FA8F70', '#EF5F53']} 
                  style={styles.openButton}
                >
                  <Text style={styles.textStyle}>Voltar</Text>
                </LinearGradient>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%', 
    flexDirection: 'column',
    marginBottom: 8,
  },

  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  welcome: {
    flexDirection: 'row',
  },

  hello: {
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold' 
  },

  username: {
    color: '#FF6CD9', 
    fontSize: 32, 
    fontWeight: 'bold'
  },

  subTitle: {
    color: '#FFFFFF', 
    fontSize: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  full: {
    flex: 1,
    backgroundColor: '#151515',
  },

  modalView: {
    width: 300,
    height: 150,
    margin: 20,
    borderRadius: 8,
    padding: 24,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#151515',
  },

  contentVersion: {
    width: 254, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  version: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  openButton: {
    width: 100,
    height: 54,
    borderRadius: 8,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  modalText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});