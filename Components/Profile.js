import React from "react";
import {Text, View, StyleSheet, Button, Dimensions, ImageBackground} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth } from "aws-amplify"; 

const { width, height } = Dimensions.get("window");

const SignOutScreen = () => {

    const signOut = () => {
        Auth.signOut();
    }

    return (
        <SafeAreaView>
          <ImageBackground
            source={require('../assets/images/Back10.jpg')}
            style={{ width: "100%", height: "100%" }}
          >
            <Text style= {styles.ask}>Want to Log Out ?</Text>
            <View style={styles.button}>
                <Button 
                  title = "Sign Out"
                  onPress = {signOut}
                  styles = {{borderRadius: 10}}
                />
            </View>
            <Text style = {styles.request}>Come Back Again</Text>
            <Text style={styles.motivate}>
                KEEP LEARNING, KEEP GROWING
            </Text>
          </ImageBackground>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    ask:{
        marginLeft: 95,
        marginTop: 400,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'green',
    },
    button:{
        width: '30%',
        marginLeft: 130,
        marginTop: 70,
    },
    request:{
        marginLeft: 90,
        marginTop: 90,
        fontSize: 24,
        fontStyle: "italic",
    },
    motivate :{
        marginLeft: 10,
        marginTop: 10,
        fontSize: width * 0.06,
        color: 'red',
        fontWeight: 'bold',
    },
});

export default SignOutScreen;