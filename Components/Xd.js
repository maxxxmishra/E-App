import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Chapter from './Chapter'

const Xd = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/crs.png')}
      style={{ width: "100%", height: "100%" }}>


      <View style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Course")}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#9a3c7e"
          }}
        >
          <Image
            source={require('../assets/images/a1.png')}
            style={{ height: 15, width: 20 }}
          />
        </TouchableOpacity>
        <View style={{
          paddingHorizontal: 10,
          paddingVertical: 13,
          borderRadius: 10,
          marginTop: 30,
          backgroundColor: "#9a3c7e",
          marginLeft: 240
        }}>
          <Image
            source={require('../assets/images/hum.png')}
            style={{ height: 15, width: 20 }}
          />
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Image
          source={require('../assets/images/xd.png')}
          style={{
            height: 35,
            width: 35,
            alignSelf: "center",
            marginTop: 20
          }}
        />
        <Text style={{
          color: "#FFF",

          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center"
        }}>Adobe XD</Text>
        <Text style={{
          color: "#FFF",

          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center"
        }}>
          Essentials
        </Text>
      </View>

      <ScrollView style={{
        marginTop: 30,
        backgroundColor: "white",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,


      }}
      >

        <View style={{
          flexDirection: "row",
          marginHorizontal: 30,
          marginTop: 40
        }}>
          <Image
            source={require('../assets/images/2.jpg')}
            style={{
              height: 50,
              width: 50,
              borderWidth: 2,
              borderColor: "#f58084",
              borderRadius: 50,
            }}
          />
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{
              color: "#345c74",

              fontSize: 18
            }}>Mikolaj Galezioski</Text>
            <Text style={{
              color: "#f58084",
              
              fontSize: 12
            }}>
              Author, UI/UX Designer
            </Text>
          </View>
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff2f2",
            width: 40,
            height: 40,
            borderRadius: 40
          }}>
            <Image
              source={require('../assets/images/a2.png')}
            />
          </View>
        </View>

        <View>
          <Chapter
            num={1}
            color="#fde6e6"
            percent={25}
            duration="2 hours, 20 minutes"
            title="Introduction"
            onPress={() => navigation.navigate('VideoPlayer')}
          />
          <Chapter
            num={1}
            color="#fde6e6"
            percent={25}
            duration="2 hours, 20 minutes"
            title="Introduction"
            onPress={() => navigation.navigate('VideoPlayer')}
          />
          <Chapter
            num={1}
            color="#fde6e6"
            percent={25}
            duration="2 hours, 20 minutes"
            title="Introduction"
            onPress={() => navigation.navigate('VideoPlayer')}
          />
          <Chapter
            num={1}
            color="#fde6e6"
            percent={25}
            duration="2 hours, 20 minutes"
            title="Introduction"
            onPress={() => navigation.navigate('VideoPlayer')}
          />
          <Chapter
            num={1}
            color="#fde6e6"
            percent={25}
            duration="2 hours, 20 minutes"
            title="Introduction"
            onPress={() => navigation.navigate('VideoPlayer')}
          />
          <Chapter
            num={1}
            color="#fde6e6"
            percent={25}
            duration="2 hours, 20 minutes"
            title="Introduction"
            onPress={() => navigation.navigate('VideoPlayer')}
          />
          <Chapter
            num={1}
            color="#fde6e6"
            percent={25}
            duration="2 hours, 20 minutes"
            title="Introduction"
            onPress={() => navigation.navigate('VideoPlayer')}
          />
        </View>
      </ScrollView>



    </ImageBackground>

  )
}

export default Xd