import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Dummy_Logo.png';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import SocialSignInButtons from '../../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
    // const [username,setUsername] = useState('');
    // const [password,setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit,formState:{errors}} = useForm();
    
    console.log(errors);

    const onSignInPressed = (data) =>{
      console.log(data);
        // validate user
        navigation.navigate('Home');
    };
    const onForgotPasswordPressed =()=>{
        navigation.navigate("ForgotPassword");
    };

    const onSignUpPressed =() =>{
        navigation.navigate("SignUp");
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
    <View style={StyleSheet.root}>
      <Image 
        source={Logo}
        style={[styles.logo,{height: height *0.3}]}
        resizeMode="contain"
      />
      <View style={styles.dist}>

      <CustomInput 
      name="username"
      placeholder="Username" 
      control={control}
      rules={{required:'Username is required'}}
      />
      <CustomInput 
      name="password"
      placeholder="Password" 
      control={control}
      secureTextEntry ={true}
      rules={{
        required:'Password is required',
        minLength:{
          value: 8,
          message: 'Password should be minimum 8 characters long',
        },
        }}
      />

      <CustomButton text="Sign In" 
        onPress={handleSubmit(onSignInPressed)}/>

      <CustomButton text="Forgot passord?" 
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

        <SocialSignInButtons />

        <CustomButton text="Don't have an acoount? Create one" 
        onPress={onSignUpPressed}
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
    logo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginTop: 30,
        marginLeft: 50,
    },
    dist:{
        marginTop: 50,
    },
});

export default SignInScreen;
