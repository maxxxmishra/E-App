import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Button } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import React from 'react'
import CourseList from "./CourseList"


const Home = ({ navigation }) => {
  function onPress() {
    navigation.navigate("Course")
  }
  return (
    <ImageBackground
      source={require('../assets/images/Home.png')}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={{
          paddingHorizontal: 10,
          paddingVertical: 12,
          borderRadius: 10,
          marginTop: 30,
          backgroundColor: "#d1a0a7",
          width: 45,
          marginLeft: 350,
          alignItems: "center"
        }}>
          
          <Image
            onPress={onPress}
            source={require('../assets/images/hum.png')}
            style={{ height: 15, width: 20  }}
          />
          
        
        </View>
        <Text style={{
          paddingHorizontal: 20,
          fontSize: 35,
          paddingTop: 40,

          color: "#FFF"
        }}>
          Welcome back Mishrajiiii
        </Text>

        <View style={{
          flexDirection: "row",
          backgroundColor: "#FFF",
          alignItems: "center",
          borderRadius: 12,
          padding: 10,
          marginHorizontal: 20,
          marginTop: 20
        }}>

          <TextInput
            placeholder="Search for new knowledge!"
            placeholderTextColor="#345c74"
            style={{
              fontWeight: "Bold",
              fontSize: 12,
              width: 320,

            }}
          />
          <Image
            source={require('../assets/images/sear.png')}
            style={{ height: 14, width: 14 }}
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
          alignItems: "center"
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
                width: 150,
                borderRadius: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <Text style={{ width: 90 }}>
                Categories
              </Text>
              <Image
                source={require('../assets/images/a3.png')}
              // style={{ marginLeft: 20, width: 8, height: 8 }}
              />


            </TouchableOpacity>



          </View>
          <Image
            source={require('../assets/images/undraw.png')}
            style={{ marginLeft: -80, marginTop: 35 }}
          />

        </View>

        <Text style={{
          color: "#345c74",
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
  )
}

export default Home

const styles = StyleSheet.create({})