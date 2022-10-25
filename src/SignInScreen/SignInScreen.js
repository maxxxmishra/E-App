import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Logo from '../../../assets/images/Dummy_Logo.png';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In");
    };
    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    };

    const onSignInFacebook = () => {
        console.warn('facebook');
    };

    const onSignInGoogle = () => {
        console.warn('google');
    };

    const onSignUpPressed = () => {
        console.warn('Sign Up')
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <View style={StyleSheet.root}>
                    <Image
                        source={Logo}
                        style={[styles.logo, { height: height * 0.3 }]}
                        resizeMode="contain"
                    />
                    <View style={styles.dist}>
                        <CustomInput
                            placeholder="Username"
                            value={username}
                            setValue={setUsername}
                        />
                        <CustomInput
                            placeholder="Password"
                            value={password}
                            setValue={setPassword}
                            secureTextEntry={true}
                        />

                        <CustomButton text="Sign In" onPress={onSignInPressed} />

                        <CustomButton text="Forgot passord?"
                            onPress={onForgotPasswordPressed}
                            type="TERTIARY"
                        />

                        <CustomButton
                            text="Sign In with Facebook"
                            onPress={onSignInFacebook}
                            bgColor='#e7eaf4'
                            fgColor='#4765a9'
                        />
                        <CustomButton
                            text="Sign In with Google"
                            onPress={onSignInGoogle}
                            bgColor='#fae9ea'
                            fgColor='#dd4d44'
                        />
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
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginTop: 30,
        marginLeft: 50,
    },
    dist: {
        marginTop: 50,
    },
});

export default SignInScreen;