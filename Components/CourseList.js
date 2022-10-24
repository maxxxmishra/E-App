import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
// import * as ProgressCircle from 'react-native-progress-circle'

// import 'react-circular-progressbar/dist/styles.css';

const CourseList = ({ img, title, bg, onPress }) => {
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
                <Text style={{
                    color: "#345c74",

                    fontSize: 13,
                    paddingLeft: 65,
                    paddingRight: 10

                }}>
                    25%
                </Text>

                <Image
                    source={require('../assets/images/pl.png')}
                />

            </View>
        </Pressable>
    )
}

export default CourseList

const styles = StyleSheet.create({})