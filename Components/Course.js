import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, } from 'react-native'

import React, { useEffect, useState } from 'react';
import { Modalize } from 'react-native-modalize'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CourseList from './CourseList'
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes'
import C from '../Api/C'



const Course = ({ navigation }) => {
  
  function loop(){
    
    return(C.map((item)=>{
      
      return(<CourseList
        onPress={()=>{navigation.navigate('Xd',item.ID)}}
        img={item.img}
        title={item.title}
        bg={item.bg}
        key = {item.ID}
        k={item.ID}
        
      />)
    }))
  
  }
  


  return (
    <ImageBackground source={require('../assets/images/cat.png')}
      style={{ width: "100%", height: "100%" }}>

      <View style={{
        // backgroundColor: "pink",
        marginTop: 35,
        padding: 10,
        paddingHorizontal: 19,
        paddingTop: 15,
        flexDirection: "row",
        alignItems: "center",


      }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
          <Image
            source={require('../assets/images/a1.png')}
            style={{ width: 23, height: 20 }}
            
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 323 }}>
          <Image
            source={require('../assets/images/hum.png')}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>

      </View>
      <Text style={{
        color: "#FFF",
        fontSize: 35,
        width: 200,
        marginTop: 34,
        textAlign: "center",
        alignSelf: "center"

      }}>
        UI/UX Cources
      </Text>
     
      
        <ScrollView style={{
          marginTop:30,
          backgroundColor:"white",
          width:"100%",
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          

        }}
        >
        
      

          {loop()}
    
          
          </ScrollView>
        
      
      





    </ImageBackground>
  )
}

export default Course

const styles = StyleSheet.create({})