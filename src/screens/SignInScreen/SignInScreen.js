import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Logo from '../../../assets/images/a-2.png';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
// import SocialSignInButtons from '../../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';  
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import AppLoader from "./AppLoader"


Amplify.configure(awsconfig);

// >>New - Configuring Auth Module
Auth.configure(awsconfig);

// Amplify.configure(awsconfig);

const SignInScreen = ( {navigation }) => {
    const { height } = useWindowDimensions();
    // const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const {control, handleSubmit,formState:{errors}} = useForm();
    
    console.log(errors);

    const onSignInPressed = async(data) =>{
      if(loading){
        return;
      }
      setLoading(true);

      try{
        const response = await Auth.signIn(data.username, data.password);
        console.log(response);
        navigation.navigate("Home");
      }
      catch(e) {
        Alert.alert('Oops', e.message);
      }
      setLoading(false);
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
        style={[styles.logo,{height: height * 0.3}]}
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

      <CustomButton text={loading ? "Loading..." : "Sign In"} 
        onPress={handleSubmit(onSignInPressed)}/>

      <CustomButton text="Forgot passord?" 
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

        {/* <SocialSignInButtons /> */}

        <CustomButton text="Don't have an acoount? Create one" 
        onPress={onSignUpPressed}
        type="TERTIARY"
        style ={{}}
        />
      </View>
    </View>
    {loading ?<AppLoader />: null}
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        flex: 1,
        height : 850
    },
    root:{
        alignItems: 'center',
        padding: 30,
        

    },
    logo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 280,
        marginTop: 50,
        marginLeft: 50,
    },
    dist:{
        marginTop: 50,
    },
});


export default SignInScreen;