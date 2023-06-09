import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Dummy_Logo.png';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import SocialSignInButtons from '../../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
    const route = useRoute(); 
    const {control, handleSubmit, watch} = useForm({
      defaultValues:{username:route?.params?.username},
    });

    const username = watch('username');

    const navigation = useNavigation();

     
    const onConfirmPressed = async (data) =>{
        try{
          await Auth.confirmSignUp(data.username, data.code);
          navigation.navigate("SignIn");
        }
        catch (e){
          Alert.alert('Oops', e.message);
        }
        
    };
    const onResendPressed = async()=>{
      try{
        await Auth.resendSignUp(username);
        Alert.alert('Success', 'New code is sent to your email');
      }
      catch (e){
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
      <Text style={styles.title}>Confirm your email</Text>
      <View style={styles.dist}>

      <CustomInput 
      name="username"
      control={control}
      placeholder="Username" 
      rules={{
        required: 'Username is required',
      }}
       />
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