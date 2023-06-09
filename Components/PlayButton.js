import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const PlayButton = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView source={require('../assets/images/play.json')}
        autoPlay loop/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 230,
        zIndex: 1,
        color: 'red',
        width: 150,
        height: 110,
        marginTop: -20
    }
})

export default PlayButton