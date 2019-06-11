import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { red } from 'ansi-colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My first (nine hundredth) app!</Text>
      <Text style={styles.text}>Suck my D!!</Text>
      <Image source={{uri: "https://farmhausapp.s3.amazonaws.com/img/farmhaus-app-logo-192x192.png"}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }, 
  image: {
    width: '30%',
    height: 'auto',
  }
});
