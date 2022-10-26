<<<<<<< HEAD
import React ,{useState} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';


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
               {/* <Text style={{
=======
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

function Chapter({ title, num, duration, percent, color, onPress }) {
    const [value, setValue] = useState(0);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "row",
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
            }}
        >
            <View style={{
                backgroundColor: color,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 6
            }}>
                <Text style={{
                    fontSize: 10,

                }}>{num}</Text>
            </View>
            <View>
                <Text style={{
                    color: "#345c74",

                    fontSize: 13,
                    paddingLeft: 20,
                    width: 180
                }}>
                    {title}
                </Text>
                <Text style={{
                    color: "#f58084",
                    fontSize: 12,

                    paddingLeft: 20
                }}>
                    {duration}
                </Text>
            </View>
            {/* <Text style={{
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de
                   color:"#345c74",
                   
                   fontSize:13,
                   width:50
               }}>
                   {percent}%
               </Text> */}
<<<<<<< HEAD
               
               <View style={{ marginLeft: 50 }}>
                    <CircularProgress
                        radius={20}
                        value={value}
                        textColor='#222'
                        fontSize={10}
                        valueSuffix={'%'}
                        inActiveStrokeColor={'red'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={6}
                        duration={1000}
                        onAnimationComplete={() => setValue(50)}
                    />
                </View>
=======
            <View style={{ marginLeft: 50 }}>
                <CircularProgress
                    radius={20}
                    value={percent}
                    textColor='#222'
                    fontSize={10}
                    valueSuffix={'%'}
                    inActiveStrokeColor={'#d70040'}
                    inActiveStrokeOpacity={0.2}
                    inActiveStrokeWidth={6}
                    duration={1000}
                    onAnimationComplete={() => setValue(50)}
                />
            </View>

        </TouchableOpacity>
    )
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de

}

export default Chapter;