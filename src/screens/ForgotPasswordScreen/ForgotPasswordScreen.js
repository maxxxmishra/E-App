import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Dummy_Logo.png';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import SocialSignInButtons from '../../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSendPressed = async(data) =>{
        try{
            const response = await Auth.forgotPassword(data.username);
            navigation.navigate("NewPassword");
          }
          catch(e) {
            Alert.alert('Oops', e.message);
          }
    };

    const onSignInPressed =() =>{
        navigation.navigate("SignIn");
    };

  return (
    <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.Scroll}
     >
    <SafeAreaView style={styles.container}>
    <View style={StyleSheet.root}>
      <Text style={styles.title}>Reset your password</Text>
      <View style={styles.dist}>

      <CustomInput 
      name="username" 
      control={control}
      placeholder="Username" 
      rules={{
        required: 'Username is required'
      }}
       />

      <CustomButton text="Send" onPress={handleSubmit(onSendPressed)}/>

        <CustomButton 
        text="Back to Sign in" 
        onPress={onSignInPressed}
        type="TERTIARY"
        />
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        flex: 1,
    },
    root:{
        alignItems: 'center',
        padding: 20,

    },
    dist:{
        marginTop: 30,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },
    Scroll:{
        backgroundColor:'#fff',
        flex: 1,
    },
    text: {
        color: 'gray',
        margin: 10,
    },
    link:{
        color: '#fdb075',
    },
});

export default ForgotPasswordScreen;
