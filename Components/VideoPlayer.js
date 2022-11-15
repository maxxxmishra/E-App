import React ,{useRef} from 'react'
import { View, StyleSheet, Image, StatusBar, Dimensions, Text ,Button } from 'react-native'
import { Video } from 'expo-av'
import Chapter from './Chapter'
import YoutubePlayer , {YoutubeIframeRef} from 'react-native-youtube-iframe';
import C from "../Api/C"
import {useNavigation} from '@react-navigation/native';


const { width, height } = Dimensions.get("window");

const VideoPlayer = (props) => {
const Csnum =(props.route.params[0])
const chnum =(props.route.params[1])
const des =(props.route.params[2])
console.log(Csnum , chnum)

const navigation = useNavigation();

  const playerRef = useRef();
  // console.log(YoutubePlayer.render)
  function press(){
    // navigation.navigate(https://reactnative.dev/docs/handling-touches)
  }

  
  return (
    
    <View style={style.container}>

      <StatusBar backgroundColor="#f58084" />
      <YoutubePlayer
        ref={playerRef}
        height={250}

        play={true}

        videoId={C[Csnum].subtitle[chnum].videoId}
        // onChangeState = {load}
        // onPlaybackRateChange ={load}
        

        



      />
      
      <View style={{ paddingTop: 20 }}>
        <Chapter
          color="#fde6e6"
          percent={25}
          duration={C[Csnum].subtitle[chnum].time}
          title={C[Csnum].subtitle[chnum].title}
          num={chnum}

        />
      </View>
      <Text style={{

        textAlign: "justify",
        color: "#345c74",
        paddingLeft: 42,
        paddingRight: 35
      }}>
        {C[Csnum].des}
        {C[Csnum].des1}
      </Text>

      <View >
        <Button 
        title='Read more'
        style={{
          flexDirection: "row",
  
          backgroundColor: "#f58084",
          marginHorizontal: 40,
          paddingVertical: 15,
          alignItems: "center",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: 20,
          marginBottom: 70
        }}
        onPress ={press}
        />
      </View>
    </View>
  )
}



const style = StyleSheet.create({
  video: {
    width: width,
    height: height / 3
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",

  }
})


export default VideoPlayer
