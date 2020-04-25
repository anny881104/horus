import React from "react";
import { ScrollView,Text,StyleSheet,View,Image} from 'react-native';




// Make a component
const JouralScreen = ({ navigation }) => {
  return (
     <ScrollView style={{backgroundColor:"#000000"}}>
        <Image style={{ width:null,height:294 }}
              source={require('../assets/journyhead.png')}
        />
       <View style={styles.box}>
        <View style={styles.storybox}>
          <Image style={{ width:113,height:113 }}
                source={require('../assets/c1.png')}
          />
          <Text style={styles.ystorytext}>CHAPTER 01</Text>
        </View>
        <View style={styles.line}></View>

        <View style={styles.storybox}>
        <Text style={styles.storytext2}>CHAPTER 02</Text>
          <Image style={{ width:113,height:113 }}
                source={require('../assets/c2.png')}
          />
        </View>
        <View style={styles.line}></View>

        <View style={styles.storybox}>
          <Image style={{ width:113,height:113 }}
                source={require('../assets/c3.png')}
          />
          <Text style={styles.storytext}>CHAPTER 03</Text>
        </View>
        <View style={styles.line}></View>

        <View style={styles.storybox}>
        <Text style={styles.storytext2}>CHAPTER 04</Text>
          <Image style={{ width:113,height:113 }}
                source={require('../assets/c4.png')}
          />
        </View>
        <View style={styles.line}></View>

       </View>
       <View style={styles.paybox}>
          <Image style={{ width:264,height:187 }}
                source={require('../assets/pay.png')}
          />
        </View>
      
      
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  box:{
    alignItems:"center",
  },
  storybox:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:60,
    marginBottom:60,
  },
  paybox:{
    alignItems:"center",
    marginTop:60,
    marginBottom:30,
  },
  ystorytext:{
    color:"#CBA72F",
    marginLeft:50,
    fontSize:20
  },
  storytext:{
    color:"#F2E6D8",
    marginLeft:50,
    fontSize:20
  },
  storytext2:{
    color:"#F2E6D8",
    marginRight:50,
    fontSize:20
  },
  line:{
    width:350,
    height:.3,
    backgroundColor:"#F2E6D8",
    alignItems:"center",
  }
});

export default JouralScreen;
