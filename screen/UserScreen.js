import React from "react";
import { Text,StyleSheet,View,Image,ImageBackground,Button } from 'react-native';

const image = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/wall.png" };


// Make a component
const UserScreen = ({ navigation }) => {
  return (
   <View style={{backgroundColor:"#CBA72F"}}>
      <ImageBackground source={image} style={styles.bgimage}>

        <View style={styles.userbox}>
          <Image style={{ width: 60, height: 60 }}
                source={require('../assets/userpic.png')}
          />
          <Text style={styles.usertext}>KABA</Text>
        </View>

        <View style={styles.infobox}>
          <View style={styles.infocard}>
            <Text style={styles.infotext}>帳戶</Text>
          </View>
          <View style={styles.infocard}>
            <Text style={styles.infotext}>顯示與音效</Text>
          </View>
          <View style={styles.infocard}>
            <Text style={styles.infotext}>服務條款</Text>
          </View>
          <View style={styles.infocard}>
            <Text style={styles.infotext}>隱私政策</Text>
          </View>
          <View style={styles.infocard}>
            <Text style={styles.infotext}>關於我們</Text>
          </View>
        </View>
      </ImageBackground>  
   </View>
  );
}

const styles = StyleSheet.create({
      userbox:{ 
        marginTop:87,
        marginBottom:37,
        alignItems:"center",
      },
      infobox:{
        alignItems:"center",
      },
      usertext:{
        fontSize: 20,
        marginTop:20,
        fontWeight:"bold", 
      },
      infotext:{
        fontSize: 15,
      },
      infocard:{
        width:240,
        height:50,
        marginBottom:20,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F2E6D8",
        shadowColor:"#000000",
        shadowOpacity:.4,
        shadowOffset:{
          height:4,
          width:2
        },
      },
      bgimage:{
        height:643,
        width:389,
        marginTop:40,
        marginLeft:15,
      },
});

export default UserScreen;
