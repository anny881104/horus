import React from "react";
import { ScrollView,Text,StyleSheet,View,Image,ImageBackground } from 'react-native';





// Make a component
const UserScreen = ({ navigation }) => {
  return (
    <View style={{backgroundColor:"#CBA72F"}}>

    <Image style={{ width: 389, height: 645,marginTop:25,marginLeft:15}}
                  source={require('../assets/wall.png')}/>

    <ScrollView >
      <View style={styles.userbox}>
        <Text style={styles.word}>KABA</Text>
      </View>
    </ScrollView>

    </View>
    
    
  );
}
const styles = StyleSheet.create({
    box:{
        flex:1, 
        marginTop:200,
        alignItems:"center",
        justifyContent:"center",
      },
      word:{
          fontSize: 15,
          fontWeight:"bold",
        },
        image:{

        },
});

export default UserScreen;
