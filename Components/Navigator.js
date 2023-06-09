import { View, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
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
import SignOutScreen from '../src/screens/SignOutScreen/SignOutScreen';
import {Auth, Hub} from 'aws-amplify';


const Stack = createNativeStackNavigator();


const Navigator = () => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} >
      {user ? (
      <>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Course" component={Course} options={{headerShown: false}} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{headerShown: false}}/>
      <Stack.Screen name="Xd" component={Xd} options={{headerShown: false}} />
      <Stack.Screen name="SignOut" component={SignOutScreen} />
      </>
      ) : (
      <>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{headerShown: false}} />
      <Stack.Screen name="ForgotPassword" 
      component={ForgotPasswordScreen} options={{headerShown: false}} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{headerShown: false}} />
      </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigator;
