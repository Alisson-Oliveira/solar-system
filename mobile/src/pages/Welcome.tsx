import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation} from '@react-navigation/native';
import solarSystemImg from '../images/SolarSystem.png';
import starsImg from '../images/Stars.png';
import forwardIcon from '../icons/regular/Forward.png';

export default function Welcome() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.welcome}>
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
              <View style={styles.containerTitle}>
                <Text style={styles.subTitle}>Aperte o cinto</Text>
                <Text style={styles.title}>Comece sua jornada</Text>
                <Text style={styles.title}>pelo sistema solar.</Text>
              </View>
              <View style={styles.contentButton}>
                <Text style={styles.subTitle2}>Pronto para a decolagem?</Text>
                <RectButton onPress={() => navigate('Username')}>
                  <LinearGradient 
                    start={[1, 0]}
                    colors={['#FA8F70', '#EF5F53']} 
                    style={styles.gradient}
                  > 
                    <Text style={styles.textButton}>Começar Agora</Text>
                    <Image source={forwardIcon} width={32} height={32} />
                  </LinearGradient>
                </RectButton>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
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

  containerTitle: {
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  subTitle: {
    color: '#FFFFFF', 
    fontSize: 16, 
    opacity: 0.85,
  },

  title: {
    color: '#FFFFFF', 
    fontSize: 32, 
    fontWeight: 'bold',
  },

  contentButton: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 64,
  },

  subTitle2: {
    color: '#FFFFFF', 
    fontSize: 14,
  },

  gradient: {
    width: 200, 
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