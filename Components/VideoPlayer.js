import React ,{useRef} from 'react'
import { View, StyleSheet, Image, StatusBar, Dimensions, Text ,Button } from 'react-native'
import { Video } from 'expo-av'
import Chapter from './Chapter'
import YoutubePlayer , {YoutubeIframeRef} from 'react-native-youtube-iframe';
import C from "../Api/C"


const { width, height } = Dimensions.get("window");

const VideoPlayer = (props) => {
const Csnum =(props.route.params[0])
const chnum =(props.route.params[1])

  const playerRef = useRef();
  // console.log(YoutubePlayer.render)
  console.log(C[Csnum].subtitle[chnum].title)
  
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
      <Button
        title="log details"
        onPress={() => {
          playerRef.current?.getCurrentTime().then(
            currentTime => console.log({currentTime})
          );

          playerRef.current?.getDuration().then(
            getDuration => console.log({getDuration})
          );
        }}
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
        User experiance (UX) design is the process design teams use to create
        products that provide meaningful and relevant experiances to users. This
        involves the design of the entire process of acquiring and integrating
        the product, including aspects of branding, design, usability and function.
        "User Experience Design" is often used interchangeably with
        terms such as "User Interfase Design" and "usability". However, while
        usability and user interfase (UI) design are important aspects of UX
        design, they are subsets of it - UX design covers a vast array of other
        areas, too. A UX designer is concerned with the entire process of
        acquiring and integrating a product,...
      </Text>

      <View style={{
        flexDirection: "row",

        backgroundColor: "#f58084",
        marginHorizontal: 40,
        paddingVertical: 15,
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 70
      }}>
        <Text style={{
          color: "#FFF",

          fontSize: 15,
          marginRight: 50,


        }}>
          Read more
        </Text>
        <Image source={require('../assets/images/a3.png')} />
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