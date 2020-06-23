import React from "react";
import {ScrollView,Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,SafeAreaView,Dimensions} from 'react-native';
import Start from "./StartScreen";
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const image1 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/ycatbg.png" };
const image2 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/wcatbg.png" };


// Make a component
const JouralScreen = ({ navigation }) => {

  return (
    
    <SafeAreaView>
      
    <Start></Start>

     <ScrollView style={{backgroundColor:"#F2E6D8"}}>
     <Image style={{ width:null,height:674 }}
              source={require('../assets/Jbg.png')}
        />
     <View style={styles.swipcontainer}>
                <Swiper style={styles.wrapper} height={270} horizontal={true} loop={ false }autoplay={ false }>
                <View style={styles.card}>
            
                        <Image style={styles.cardpic} source={require('../assets/Canopic.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>什麼是卡諾皮克罐?</Text>
                            <Text style={styles.article}>製作木乃伊時</Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Imset.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>艾姆謝特罐 人首神</Text>
                            <Text style={styles.article}>守護肝臟</Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Duamutef.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>多姆泰夫罐 狼首神</Text>
                            <Text style={styles.article}>守護胃</Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Hapi.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>哈畢罐 狒狒首神</Text>
                            <Text style={styles.article}>守護肺</Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Kebechsenef.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>凱布山納夫罐 鷹首神</Text>
                            <Text style={styles.article}>守護腸子</Text>
                        </View>
                
                </View>
                
              </Swiper>
                
            </View>

        
       <View style={styles.box}>
        
            <TouchableOpacity  onPress={() => navigation.navigate('CHAPTER 01')}> 
              <ImageBackground source={image1} style={styles.cat}>
                <View style={styles.storybox}>
                
                    <Image style={{ width:113,height:113}}
                        source={require('../assets/ani.gif')}
                    />
                    <Text style={styles.ystorytext}>CHAPTER 01</Text> 
                    
                </View>
              </ImageBackground>
            </TouchableOpacity> 

          <View style={styles.line}></View>
       
        <TouchableOpacity onPress = {() =>alert('章節尚未開啟!')}> 
          <ImageBackground source={image2} style={styles.cat}>
            <View style={styles.storybox}>
            <Text style={styles.storytext2}>CHAPTER 02</Text>
              <Image style={{ width:113,height:113 }}
                    source={require('../assets/c2.png')}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity> 

        <View style={styles.line}></View>

        <TouchableOpacity onPress = {() =>alert('章節尚未開啟!')}> 
          <ImageBackground source={image2} style={styles.cat}>
            <View style={styles.storybox}>
              <Image style={{ width:113,height:113 }}
                    source={require('../assets/c3.png')}
              />
              <Text style={styles.storytext}>CHAPTER 03</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity> 

        <View style={styles.line}></View>

        <TouchableOpacity onPress = {() =>alert('章節尚未開啟!')}> 
          <ImageBackground source={image2} style={styles.cat}>
            <View style={styles.storybox}>
            <Text style={styles.storytext2}>CHAPTER 04</Text>
              <Image style={{ width:113,height:113 }}
                    source={require('../assets/c4.png')}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.line}></View>

       </View>

       <TouchableOpacity onPress = {() =>alert('coming soon!')}> 
        <View style={styles.paybox}>
            <Image style={{ width:178,height:125 }}
                  source={require('../assets/pay.png')}
            />
            <Text style={styles.storytext3}>付費以解鎖更多內容</Text>
          </View>
        </TouchableOpacity>
      
      
    </ScrollView>
    </SafeAreaView>

    


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
    width:null,
    height:null
  },
  paybox:{
    alignItems:"center",
    marginTop:60,
    marginBottom:30,
  },
  ystorytext:{
    color:"#CBA72F",
    marginLeft:50,
    fontSize:16,
  },
  storytext:{
    color:"#313131",
    marginLeft:50,
    fontSize:16
  },
  storytext2:{
    color:"#313131",
    marginRight:50,
    fontSize:16
  },
  storytext3:{
    color:"#CBA72F",
    marginTop:3,
    marginBottom:30,
    fontSize:16
  },
  line:{
    width:350,
    height:.3,
    backgroundColor:"#F2E6D8",
    alignItems:"center",
  },
  cat:{
    height:null,
    width:null,
  },


  card:{
    width:356,
    height:217,
    flexDirection:"row",
    //justifyContent:"center",
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:22,
    backgroundColor:"#F3EFEB",
    marginLeft:29,
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
  swipcontainer: {
      height:270,
      marginBottom:20,
  },
});

export default JouralScreen;