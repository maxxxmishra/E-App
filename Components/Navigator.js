import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './Home';
import Course from './Course';
import VideoPlayer from './VideoPlayer';
import Xd from './Xd';
import SignInScreen from '../src/screens/SignInScreen/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../src/screens/SignInScreen/SignInScreen';


const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (<NavigationContainer>
    <Stack.Navigator>
<<<<<<< HEAD
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Course" component={Course} options={{headerShown: false}} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{headerShown: false}}/>
      <Stack.Screen name="Xd" component={Xd} options={{headerShown: false}} />
=======
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Course" component={Course} options={{ headerShown: false }} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{ headerShown: false }} />
      <Stack.Screen name="Xd" component={Xd} options={{ headerShown: false }} />
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator;
