import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Dummy_Logo.png';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import SocialSignInButtons from '../../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';


const NewPasswordScreen= () => {
    // const {control, handleSubmit} = useForm();
    const route = useRoute(); 
    const {control, handleSubmit, watch} = useForm({
      defaultValues:{username:route?.params?.username},
    });
    const username = watch('username');
    
    const navigation = useNavigation();

     
    const onSubmitPressed = async(data) =>{
      try{
        const response = await Auth.forgotPasswordSubmit(data.username,data.code,data.password);
        navigation.navigate("SignIn");
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
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
      /> 
      <CustomInput 
      name="code"
      control={control}
      placeholder="Code" 
      rules={{required: 'Code is required'}}
       />
     <CustomInput 
      name = "password"
      control={control}
      placeholder="Enter your new password" 
      secureTextEntry={true}
      rules={{
        required:'Password is required',
        minLength:{
          value: 8,
          message: 'Password should be minimum 8 characters long',
        },
        }}
       />
      <CustomButton text="Submit" 
        onPress={handleSubmit(onSubmitPressed)}/>

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

export default NewPasswordScreen;