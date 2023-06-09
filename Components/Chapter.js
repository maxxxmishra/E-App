import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import CircularProgress, {ProgressRef} from 'react-native-circular-progress-indicator';
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import PlayButton from './PlayButton';

function Chapter({title,num, duration, percent, color, onPress}){
    const [value, setValue] = useState(0);

        return(
           <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                }}
           >
               <View style={{
                   backgroundColor:color,
                   paddingVertical:5,
                   paddingHorizontal:10,
                   borderRadius:6
               }}>
                   <Text style={{
                       fontSize:10,
                       
                   }}>{num}</Text>
               </View>
               <View>
                   <Text style={{
                       color:"#345c74",
                    
                       fontSize:13,
                       paddingLeft:20,
                       width:180
                   }}>
                       {title}
                   </Text>
                   <Text style={{
                       color:"#f58084",
                       fontSize:12,
                       
                       paddingLeft:20
                   }}>
                       {duration}
                   </Text>
               </View>
               <>
               <View style={{marginLeft: 50, flexDirection: 'row'}}>
               {/* <CircularProgress   
                value={100}
                radius={25}
                duration={2000}
                progressValueColor={'#787878'}
                showProgressValue = {'false'}
                titleFontSize={5}
                titleColor={'#333'}
                titleStyle={{ fontWeight: 'bold' }}
                circleBackgroundColor={'#787878'}
                activeStrokeColor={'#2465FD'}
                activeStrokeSecondaryColor={'#C3305D'}
                inActiveStrokeColor={'white'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={6}
                activeStrokeWidth={2}
                /> */}
                {/* <Progress.CircleSnail 
                color={['red', 'green', 'blue']} 
                borderRadius= {60}
                size={50}
                borderWidth={1}
                duration={400} 
                thickness={1.5}             
                /> */}
            {/* <AntDesign 
               name="caretright" size={24} color="black" 
               style={{marginLeft: -37, marginTop: 12}}
               /> */}
            </View>
            <PlayButton />
            </>
           </TouchableOpacity>
        )
    
}

export default Chapter;