<<<<<<< HEAD
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React,{ useState } from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
// import * as ProgressCircle from 'react-native-progress-circle'
=======
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de


<<<<<<< HEAD
const CourseList = ({ img, title, bg, onPress ,k}) => {
    const [value, setValue] = useState(0);
    console.log(k)
=======
const CourseList = ({ img, title, bg, onPress }) => {
    const [value, setValue] = useState(0);
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de
    return (
        <Pressable
            onPress={onPress}>
            <View style={{
                flexDirection: "row",
                backgroundColor: bg,
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 10
            }}>
                <Image
                    source={img}
                    style={{ width: 40, height: 40 }}
                />

                <View>
                    <Text style={{
                        color: "#345c74",
                        fontSize: 15,
                        paddingHorizontal: 20,
                        width: 170
                    }}>
                        {title}
                    </Text>
                    <Text style={{
                        paddingHorizontal: 20,
                        color: "#f58084",
                        fontSize: 12,

                    }}>
                        10 hours, 19 lessons
                    </Text>
                </View>
<<<<<<< HEAD

=======
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de
                {/* <Text style={{
                    color: "#345c74",

                    fontSize: 13,
                    paddingLeft: 65,
                    paddingRight: 10

                }}>
                    25%
                </Text>

                <Image
                    source={require('../assets/images/pl.png')}
                /> */}
<<<<<<< HEAD

<View style={{ marginLeft: 50 }}>
=======
                <View style={{ marginLeft: 50 }}>
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de
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
<<<<<<< HEAD

=======
>>>>>>> f59c3d7b66e67ac8b045a0b48077f26def8ef1de
            </View>
        </Pressable>
    )
}

export default CourseList

const styles = StyleSheet.create({})