import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
    const onSignInFacebook =() =>{
        console.warn('facebook');
    };

    const onSignInGoogle =() =>{
        console.warn('google');
    };
    
  return (
    <View>
        <CustomButton 
            text="Sign In with Facebook" 
            onPress={onSignInFacebook}
            bgColor = '#e7eaf4'
            fgColor = '#4765a9'
            />
        <CustomButton 
            text="Sign In with Google" 
            onPress={onSignInGoogle}
            bgColor = '#fae9ea'
            fgColor = '#dd4d44'
            />
    </View>
  )
}

export default SocialSignInButtons;