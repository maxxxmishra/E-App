import { StyleSheet, Text, View ,Image,Button,TouchableOpacit ,BackHandler} from 'react-native'
import React, { useState } from "react";
import CourseList from "./CourseList";
import { TouchableOpacity } from 'react-native-gesture-handler';
const uri = '../assets/images/adhyayanam-logo.png'

const Component = ({navigation}) => {
    const[ID , Chid] = useState(null) ;

    
    return(

    <View style={{flex: 1 ,backgroundColor : '#9B9191'}}>
        <View style={{flex: 0.25 , paddingTop:50 , paddingHorizontal:20}}>
        <Image source = {require('../assets/images/a-2.png')}
            style = {{height:100 , width:100 ,borderRadius:50}}/>
        <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>
        Aԃԋყαყαɳαɱ
        </Text>
        <Text style={{fontSize :16, marginTop:5 , fontWeight :"bold"}}>विद्याधनं  सर्व धनं प्रधानम् </Text>
        </View>
        <View style={{flex: 0.6 ,borderTopWidth: 0.5 ,borderBottomWidth: 0.5 ,marginTop :15 ,paddingTop :20}}>
        <TouchableOpacity title = 'Home'onPress={() => navigation.navigate("Home")}
                            style={{
                                backgroundColor: "#f58084",
                                flexDirection: "row",
                                marginTop: 20,
                                alignItems: "center",
                                width: 270,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                              }}
        >
            
            <Image source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/000/627/703/small/illust58-6618-01.jpg'}} style = {{height:30 , width:30 ,borderRadius:50}}/>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10 , marginLeft:20 ,marginLeft:5 , marginTop :-2}}>Home</Text>
            
        </TouchableOpacity>

        <TouchableOpacity style={{
                                backgroundColor: "#f58084",
                                flexDirection: "row",
                                marginTop: 20,
                                alignItems: "center",
                                width: 270,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                              }}
                              title = 'Course'onPress={() => navigation.navigate("Course")}>
            <Image source={{uri:'https://c8.alamy.com/comp/HYCH31/online-course-icon-online-course-website-button-on-white-background-HYCH31.jpg'}} style = {{height:30 , width:30 ,borderRadius:50}}/>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10 , marginLeft:20 ,marginLeft:5 , marginTop :-2}}>Course</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{
                                backgroundColor: "#f58084",
                                flexDirection: "row",
                                marginTop: 20,
                                alignItems: "center",
                                width: 270,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                              }}
                              title = 'Profile'onPress={() => navigation.navigate("Profile")}>
            <Image source={{uri:'https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI='}} style = {{height:30 , width:30 ,borderRadius:50}}/>                    
            <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10 , marginLeft:20 ,marginLeft:5 , marginTop :-2}}>Profile</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{
                                backgroundColor: "#f58084",
                                flexDirection: "row",
                                marginTop: 20,
                                alignItems: "center",
                                width: 270,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                              }}
                              title = 'About us'onPress={() => navigation.navigate("Aboutus")}>
            <Image source={{uri:'https://i.pinimg.com/originals/e1/9a/be/e19abe91f514107352c88cee6f7e72bc.jpg'}} style = {{height:30 , width:30 ,borderRadius:50}}/>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10 , marginLeft:20 ,marginLeft:5 , marginTop :-2}}>About us</Text>
            
        </TouchableOpacity>
        
        </View>
        <View style={{flex: 0.3}}>
        <TouchableOpacity style={{
                                
                                flexDirection: "row",
                                marginTop: 20,
                                alignItems: "center",
                                width: 270,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                                // paddingVertical: 5,
                              }}
                               onPress={()=> BackHandler.exitApp()}>
        
        <Image source={{uri :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bxFT5CewSNdb-78bsenpL7TfgI6RSyUtC_lRcK44hVp6pgNs4Yx6tYKq_R_ox6dAEHE&usqp=CAU"}}
        style = {{height:30 , width:30 ,borderRadius:50}}/>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10 , marginLeft:20 ,marginLeft:5 , marginTop :-2}}>Share with friends</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{
                                
                                flexDirection: "row",
                                marginTop: 20,
                                alignItems: "center",
                                width: 270,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                                // paddingVertical: 10,
                                marginTop:9
                              }}
                               onPress={()=> BackHandler.exitApp()}>
        
        <Image source={{uri :"https://media.istockphoto.com/id/1142448470/vector/vector-illustration.jpg?s=612x612&w=0&k=20&c=PdHunT_ftYTw7dUVKKSbRMC8R27nVZ2NFFPUX0V5Reo="}}
        style = {{height:30 , width:30 ,borderRadius:50}}/>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10 , marginLeft:20 ,marginLeft:5 , marginTop :-2}}>Exit from App</Text>

        </TouchableOpacity>
        </View>
    </View>    
    )
}

    
     
    
    

export default Component

const styles = StyleSheet.create({})