import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Dummy_Logo.png';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import SocialSignInButtons from '../../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

     
    const onConfirmPressed = (data) =>{
        console.warn(data);
        navigation.navigate("Home");
    };
    const onResendPressed =()=>{
        console.warn("Resend code");
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
      <Text style={styles.title}>Confirm your email</Text>
      <View style={styles.dist}>

      <CustomInput 
      name="code"
      control={control}
      placeholder="Enter your confirmation code" 
      rules={{
        required: 'Confirmation code is required',
      }}
       />

      <CustomButton text="Confirm" 
        onPress={handleSubmit(onConfirmPressed)}/>

      <CustomButton 
        text="Resend code" 
        onPress={onResendPressed}
        type="SECONDARY"
        />

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

export default ConfirmEmailScreen;
