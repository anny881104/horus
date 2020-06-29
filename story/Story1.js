import React from "react";
import { AppRegistry,Image,SafeAreaView,ScrollView,View,StyleSheet,Text } from 'react-native';
import LoadingView from 'react-native-loading-view'

import Activity from "../screen/Activity";
// Make a component
const CHAPTER01 = ({ navigation }) => {
  
    return (
            
        <SafeAreaView>
          

            <ScrollView style={{paddingTop: 0 ,backgroundColor: "#1E1E1E"}}>
                
            <Activity />
                <View style={styles.topbox}>
                     <Image style={styles.topimg}source={require('../assets/chapter1.png')}/>
                     <Text style={styles.topText}>CHAPTER 01</Text>
                     <Text style={styles.topText2}>無境的沙漠</Text>
                </View>
                <Image style={{ width:null,height:700 }}
                source={require('../assets/story.png')}
            />
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
   
    topbox:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topimg:{
        width:89,
        height:88,
        marginTop:20,
        
    },
    topText:{
        fontSize:18,
        fontWeight:'bold',
        color:"#CBA72F",
        marginTop:15,
    },
    topText2:{
        fontSize:15,
        color:"#FFFFFF",
        marginTop:15,
    },
});
export default CHAPTER01;