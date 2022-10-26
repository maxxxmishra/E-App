import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './Home';
import Course from './Course';
import VideoPlayer from './VideoPlayer';
import Xd from './Xd';
import SignInScreen from '../src/screens/SignInScreen/SignInScreen';
import SignUpScreen from '../src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../src/screens/NewPasswordScreen/NewPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Course" component={Course} options={{headerShown: false}} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{headerShown: false}}/>
      <Stack.Screen name="Xd" component={Xd} options={{headerShown: false}} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{headerShown: false}} />
      <Stack.Screen name="ForgotPassword" 
      component={ForgotPasswordScreen} options={{headerShown: false}} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{headerShown: false}} />
    </Stack.Navigator>

  </NavigationContainer>
  )
}

export default Navigator;
