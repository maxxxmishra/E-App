import {Linking,StyleSheet,Text,TouchableOpacity,View,Image,ScrollView} from "react-native";
import React from "react";
import photo1 from '../assets/images/Rahul.jpeg';
import photo2 from '../assets/images/Sumit.jpg';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import reddit from '../assets/images/reddit.png';

const Aboutus = () => {
  return (
    <ScrollView>
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Rahul Singh Gurjar </Text>
      <Text style={styles.paraStyle}> I am a full stack developer 😀 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={photo1}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          I am a pre-final year student at MITS, Gwalior. I am aspiring full stack developer. I am motivated towards learning trending technologies and Science.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/rahulsinghgurjar98/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/rahul-singh-gurjar-1723a9201/"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={linkedin}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://twitter.com/RahulSi19439712")}>
          <Image
            style={styles.iconStyle}
            source={twitter}
          />
        </TouchableOpacity>
      </View>
    </View>

    {/* Sumit */}
    <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 70
      }}
    />
    
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Sumit Mishra </Text>
      <Text style={styles.paraStyle}> I am a full stack developer 😀 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={photo2}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          I am a pre-final year student at MITS, Gwalior. I am aspiring full stack developer. I love to solve tricky and complex programming related problem. 
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/msaurabh991/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/sumit-mishra-985673208/"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={linkedin}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.reddit.com/user/Chance_Sector_9288")}>
          <Image
            style={styles.iconStyle}
            source={reddit}
          />
        </TouchableOpacity>
      </View>
    </View>
     
    <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 70
      }}
    />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Aboutus;