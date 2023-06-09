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

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const {control,handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();
     
    const onRegisterPressed = async (data) =>{
      const {username, password, email, name} = data;
      try{
        const response = await Auth.signUp({
          username,
          password,
          attributes:{email,name,preferred_username: username} 
        });
        navigation.navigate('ConfirmEmail',{username});
      }
      catch(e){
        Alert.alert('Oops',e.message);
      }
        
    };

    const onSignInPressed =() =>{
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed =() =>{
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed =() =>{
        console.warn('onPrivacyPressed');
    };

  return (
    <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.Scroll} >
    <SafeAreaView style={styles.container}>
    <View style={StyleSheet.root}>
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.dist}>

    <CustomInput 
      name="name"
      control={control}
      placeholder="Name" 
      rules={{
        required: 'Name is required',
        minLength: {
          value: 3,
          message: 'Name should be at least 3 characters long',
        },
        maxLength: {
          value: 24,
          message: 'Name should be max 24 characters long',
        },
      }}
       />
    <CustomInput 
      name="username"
      control={control}
      placeholder="Username" 
      rules={{
        required: 'Username is required',
        minLength: {
          value: 3,
          message: 'Username should be at least 3 characters long',
        },
        maxLength: {
          value: 24,
          message: 'Username should be max 24 characters long',
        },
      }}
       />
    <CustomInput 
      name="email"
      control={control}
      placeholder="Email"     
      rules={{
        required: 'Email is required',
        pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
       />
      <CustomInput 
      name = "password"
      control={control}
      placeholder="Password" 
      secureTextEntry ={true} 
      rules={{
        required: 'Password is required',
        minLength: {
          value: 8,
          message: 'Password should be at least 8 characters long',
        },
      }}
      />
      <CustomInput 
      name="password-repeat"
      control={control}
      placeholder="Repeat Password" 
      secureTextEntry ={true}
      rules={{
        validate: value =>
            value === pwd || 'Password do not match',
      }}
    />

      <CustomButton text="Register" 
      onPress={handleSubmit(onRegisterPressed)}/>

      <Text style={styles.text}>
        By registering, you confirm that you accept our 
        <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and
          <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
      </Text>

        {/* <SocialSignInButtons /> */}

        <CustomButton text="Have an acoount? Sign in" 
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

export default SignUpScreen;