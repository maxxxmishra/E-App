import { StyleSheet, Text, View, ImageBackground, Image,Dimensions, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import React, { StrictMode } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import CourseList from "./CourseList";
import { AntDesign, Octicons} from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { width, height } = Dimensions.get("window");


const Home = ({ navigation }) => {
  function onPress() {
    navigation.navigate("Course")
  }
  const signOut = () => {
    Auth.signOut();
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
      
        
       </View>

      <View>
      
      
      </View>
      <ScrollView>
        
        <Text style={{
          paddingHorizontal: 20,
          fontSize: 35,
          paddingTop: 40,

          color: "#FFF"
        }}>
          Welcome !
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
          fontSize: 22,
          paddingHorizontal: 19,
          paddingTop: 19,
          fontStyle: "italic",
        }}>
          Our Popular Courses
        </Text>
      
      <TouchableOpacity>
        <CourseList
          onPress={()=>{navigation.navigate('Xd',4)}}
          img={require('../assets/images/xd.png')}
          title="PYTHON"
          bg="#fdddf3"
          total="3 Hour , 30 minutes"
        />
        
        <CourseList
        onPress={()=>{navigation.navigate('Xd',8)}}
          img={require('../assets/images/sketch.png')}
          title="OOPS"
          bg="#fef8e3"
          total="8 Hour , 19 minutes"
        />
        <CourseList
        onPress={()=>{navigation.navigate('Xd',1)}}
          img={require('../assets/images/ae.png')}
          title="THEORY OF COMPUTATION"
          bg="#fcf2ff"
          total="8 Hour , 53 minutes"
        />
        <CourseList
        onPress={()=>{navigation.navigate('Xd',7)}}
          img={require('../assets/images/f.png')}
          title="Engineering Mathematics-3"
          bg="#fcf2ff"
          total="8 Hour , 27 minutes"
        />
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Home;