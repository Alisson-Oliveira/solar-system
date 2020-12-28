import React from 'react';

import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color='#FFFFFF'/>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#151515'
  },
});