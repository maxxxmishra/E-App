import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';


const CourseList = ({ img, title, bg, onPress }) => {
    const [value, setValue] = useState(0);
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
            </View>
        </Pressable>
    )
}

export default CourseList

const styles = StyleSheet.create({})