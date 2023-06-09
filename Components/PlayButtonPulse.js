import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const PlayButtonPulse = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView source={require('../assets/images/long-press-play-button.json')}
        autoPlay loop/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 220,
        zIndex: 1,
        color: 'red',
        width: 150,
        height: 60,
        marginTop: 13
    }
})

export default PlayButtonPulse