import { StyleSheet, Text, View, ImageBackground, Image,Dimensions, TouchableOpacity, Button, SafeAreaView, ActivityIndicator } from 'react-native';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import React, { StrictMode, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import CourseList from "./CourseList";
import { AntDesign, Octicons} from '@expo/vector-icons';
import { Auth } from 'aws-amplify';

const { width, height } = Dimensions.get("window");




const Home = ({ navigation }) => {
  function onPress() {
    navigation.navigate("Course")
  }
  /* Loader*/
// const [loading, setLoading] = useState(false);
  const signOut = (data) => {
    // if(loading){
      Auth.signOut();
      // <ActivityIndicator />
    //   return;
    // }
    // setLoading(true);
    
  }
  return (
    <SafeAreaView>
    <ImageBackground
      source={require('../assets/images/Back3.jpg')}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{
        flexDirection: 'row',
      }}>
      <View style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
          borderRadius: 10,
          marginTop: height/30,
          backgroundColor: "#d1a0a7",
          width: 45,
          height: 40,
          marginLeft: width/15,
          alignItems: "center",
        }}>
          <Image
            //onPress={onPress}
            source={require('../assets/images/hum.png')}
            style={{ height: 15, width: 20 }}
          />
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("")}}>
        <View 
          style={{
          paddingHorizontal: 10,
          paddingVertical: 12,
          borderRadius: 25,
          marginTop: height/30,
          backgroundColor: "#89CFF0",
          width: 50,
          height: 50,
          marginLeft: width/1.55,
          alignItems: "center",
        }}>
        <AntDesign name="user" size={24} color="black" />
        </View>
        </TouchableOpacity>
       </View>

      <View styles={{width: '30%', height: 20, margin: 10 }}>
      <TouchableOpacity 
        title = 'SignOut'
        onPress={signOut}
        
        style={{
          width: '30%',
          textAlign: 'center',
          color: 'red',
          marginTop: height/15,
          marginVertical: 20,
          fontSize: 20,
          marginBottom : -15,
          marginLeft :width/1.5,
          // backgroundColor : 'royalblue',
          padding: 20,
          marginRight: 15
          
        }}
      >
        <Text styles = {{fontSize: 30, color: 'royalblue'}}>Sign Out</Text>
      </TouchableOpacity>
      
      </View>
      <ScrollView>
        
        <Text style={{
          paddingHorizontal: 20,
          fontSize: 35,
          paddingTop: 40,

          color: "#FFF"
        }}>
          Hello!
        </Text>

        <View style={{
          flexDirection: "row",
          backgroundColor: "#FFF",
          alignItems: "center",
          borderRadius: 12,
          padding: 10,
          marginHorizontal: 20,
          marginTop: 20,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}>

          <TextInput
            placeholder="Search for new knowledge!"
            placeholderTextColor="#9e9e9e"
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              width: 320,
              color: 'black',
            }}
          />
          <Octicons name="search" size={24} color="black" 
          style={{marginLeft: -20}}
          />
        </View>

        <View style={{
          backgroundColor: "#FFF",
          borderRadius: 12,
          marginHorizontal: 20,
          marginTop: 20,
          paddingVertical: 30,
          paddingLeft: 30,
          flexDirection: "row",
          alignItems: "center",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,

          elevation: 20,
        }}>
          <View style={{ width: 260 }}>
            <Text style={{
              color: "#345c74",
              fontSize: 20,
            }}>
              Start learning {"\n"}New Stuff
            </Text>
            <TouchableOpacity
              onPress={onPress}
              style={{
                backgroundColor: "#f58084",
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
                width: 160,
                borderRadius: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <Text style={{ width: 100, fontWeight:'400', fontSize:17 }}>
                Categories
              </Text>
              <AntDesign name="arrowright" size={24} color="white" 
              style={{marginLeft: 10}}
              />


            </TouchableOpacity>



          </View>
          <Image
            source={require('../assets/images/undraw.png')}
            style={{ marginLeft: -80, marginTop: 35 }}
          />

        </View>

        <Text style={{
          color: "white",
          fontSize: 20,
          paddingHorizontal: 19,
          paddingTop: 19
        }}>
          Courses In Progress
        </Text>
      
      <TouchableOpacity>
        <CourseList
          onPress={()=>{navigation.navigate("Course")}}
          img={require('../assets/images/xd.png')}
          title="Adobe XD Prototyping"
          bg="#fdddf3"
        />
        
        <CourseList
        onPress={()=>{navigation.navigate("Course")}}
          img={require('../assets/images/sketch.png')}
          title="Sketch shortcuts and tricks"
          bg="#fef8e3"
        />
        <CourseList
        onPress={()=>{navigation.navigate("Course")}}
          img={require('../assets/images/ae.png')}
          title="UI Motion Design in After Effects"
          bg="#fcf2ff"
        />
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Home;
