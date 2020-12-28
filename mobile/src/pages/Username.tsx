import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Loading from '../components/Loading';
import solarSystemImg from '../images/SolarSystem.png';
import starsImg from '../images/Stars.png';
import { SettingsParams, SET_SETTINGS } from '../config/settings';

export default function Username() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
    
  async function handleToHome() {
    setIsLoading(true);

    if (username !== '') {
      const settings = {
        username,
        splash: false,
      } as SettingsParams;

      await SET_SETTINGS(settings);

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('HomeScreen');
      }, 1000);
    } else {
      alert('Por favor, digite seu nome :)');
    };
  };

  if (isLoading) {
    return ( <Loading /> );
  };

  return (
    <View style={styles.username}>
      <ImageBackground 
        resizeMode='cover' 
        source={starsImg}
        style={styles.full} 
      >
        <ImageBackground 
          resizeMode='cover' 
          source={solarSystemImg}
          style={styles.full} 
        >
          <View style={styles.containerData}> 
            <View style={styles.content}>
              <View>
                <Text style={styles.title}>Como devemos te chamar?</Text>
                <TextInput 
                  value={username}
                  onChangeText={setUsername}
                  placeholder='Ex: Alisson'
                  placeholderTextColor='rgba(0, 0, 0, 0.5)'
                  style={styles.inputText}  
                />
              </View>
              <RectButton onPress={handleToHome}>
                <LinearGradient 
                  start={[1, 0]}
                  colors={['#FA8F70', '#EF5F53']} 
                  style={styles.gradient}
                > 
                  <Text style={styles.textButton}>Entrar</Text>
                  <Feather name='log-in' size={32} color='#FFFFFF' />
                </LinearGradient>
              </RectButton>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    flex: 1, 
    backgroundColor: '#151515',
  },

  full: {
    flex: 1,
  },

  content: {
    height: 380,
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  containerData: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  title: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold', 
  },

  inputText: {
    height: 54, 
    width: 256,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: 14,
    paddingHorizontal: 12,
    marginBottom: 164,
  },

  gradient: {
    width: 120, 
    height: 54, 
    borderRadius: 8, 
    marginTop: 16, 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginRight: 12,
  },
});