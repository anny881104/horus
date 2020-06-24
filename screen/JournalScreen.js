import React from "react";
import {ScrollView,Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,SafeAreaView,Dimensions} from 'react-native';

import Start from "./StartScreen";
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const image = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/Jbg.png" };
const image1 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/ycatbg.png" };
const image2 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/wcatbg.png" };


// Make a component
const JouralScreen = ({ navigation }) => {

  return (
    
    <SafeAreaView  horizontal={true}>
      
    <Start></Start>

    <View style={{backgroundColor:"#F2E6D8"}}>
        <Image style={{width:414,height:276}} source={require('../assets/JOURNEYTOP.png')}/>
        <Text style={styles.welcometext}>Wellcome Back ,KABA</Text>
        <Text style={styles.welcometext2}>準備好啟程了嗎</Text>
      <ScrollView style={styles.scroll}
       horizontal={true} 
       showsHorizontalScrollIndicator={false}
       >
            <TouchableOpacity  onPress={() => navigation.navigate('CHAPTER 01')}> 
                    <View style={styles.card1}>
                
                            <Image style={styles.cardpic} source={require('../assets/Canopic.png')}/>
                            <View style={styles.cardtext}>
                            <Text style={styles.article}>  </Text>
                            </View>
                    
                    </View>
             </TouchableOpacity>   

                <TouchableOpacity onPress = {() =>alert('章節尚未開啟!')}> 
                  <View style={styles.card}>
                          
                          <Image style={styles.cardpic} source={require('../assets/Imset.png')}/>
                          <View style={styles.cardtext}>
                          <Text style={styles.article}>  </Text>
                          </View>
                  
                  </View>
                </TouchableOpacity> 

                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Duamutef.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Hapi.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Hapi.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                
             
               
    
              </ScrollView  >
        </View>

    </SafeAreaView>

    


  );
}

const styles = StyleSheet.create({
  
  welcometext:{
    fontSize:16,
    fontWeight:'bold',
    color:"#F3EFEB",
    marginTop:-55,
    marginLeft:30
  },
  welcometext:{
    fontSize:16,
    fontWeight:'bold',
    color:"#F3EFEB",
    marginTop:0,
    marginLeft:30
  },
  cat:{
    height:null,
    width:null,
  },

  card1:{
    width:253,
    height:335,
    flexDirection:"row",
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:40,
    backgroundColor:"#F3EFEB",
    marginLeft:80,
    marginTop:180,
    borderRadius:13,
    shadowColor:"black",
  },
  card:{
    width:253,
    height:335,
    flexDirection:"row",
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:40,
    backgroundColor:"#F3EFEB",
    marginLeft:10,
    marginTop:180,
    borderRadius:13,
    shadowColor:"black",
},
 
cardpic:{
  width:149,
  height:200,
  //marginBottom:20,
  
},
  cardtext:{
    marginLeft:10,
    // width:165,
    // height:115,
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"space-around",
},
 
texttitle:{
    fontSize:16,
    fontWeight:'bold',
    //fontFamily:'Arial',
},
 
article:{
    fontSize:13,
    fontWeight:'normal',
},
 
});

export default JouralScreen;