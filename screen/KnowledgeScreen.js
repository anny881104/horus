import React from "react";
import { ScrollView,Text,StyleSheet,View } from 'react-native';

// Make a component
const KnowledgeScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 44,backgroundColor:"#F2E6D8"}}>
             <View style={styles.box}>
           <Text style={styles.word}>NOTHING ABOUT US</Text>
          </View>
        </ScrollView>
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
});

export default KnowledgeScreen;
