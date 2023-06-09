import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React, {useState} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { AntDesign } from '@expo/vector-icons';
import PlayButtonPulse from './PlayButtonPulse';


const CourseList = ({ img, title, bg, k, total, onPress }) => {
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
                        {total}
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
            {/* <AntDesign 
               name="caretright" size={24} color="black" 
               style={{marginLeft: -37, marginTop: 12}}
               /> */}
            </View>
            <PlayButtonPulse />
            </>
            </View>
        </Pressable>
    )
}

export default CourseList

const styles = StyleSheet.create({})