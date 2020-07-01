import React, { Component, useState } from "react";
import {ScrollView,Text,StyleSheet,View,Image,ImageBackground,SafeAreaView,TouchableWithoutFeedback} from 'react-native';

import { Alert,Modal, TouchableHighlight} from 'react-native';
import Start from "./StartScreen";
import Swiper from 'react-native-swiper'
import Inputs from "./SignIn";
import story from "../story/Story1";

const image = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/JOURNEYTOP.png" };
const image1 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/ycatbg.png" };
const image2 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/wcatbg.png" };


// Make a component
const JouralScreen = ({ navigation }) => {
 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <View style={{backgroundColor:"#1E1E1E"}}>
    <Start></Start>
    
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>章節尚未開啟!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#CBA72F" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>CLOSE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>




    <View style={{backgroundColor:"#F2E6D8",width:414,height:730}}>
    
    <View style={styles.swipcontainer}style={{width:414,height:265,marginTop:35}}>
      <Swiper 
        height={265} loadMinimalSize={9} showsPagination={false}
        horizontal={true} autoplay={true} autoplayTimeout={8} 
        dotColor={'#F2E6D8'} activeDotColor={'#808080'}
      >
          <View>
            <ImageBackground source={require('../assets/AD1.png')} style={{width:414,height:265}}>
              <Text style={styles.welcometext}>Wellcome Back </Text>
              <Text style={styles.welcometext2}>準備好啟程了嗎?</Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground source={require('../assets/AD2.png')} style={{width:414,height:265}}>
              <Text style={styles.welcometext3}>About ENNEAD</Text>
              <Text style={styles.welcometext4}>關於埃及神祇，你了解多少</Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground source={require('../assets/AD3.png')} style={{width:414,height:265}}>
              <Text style={styles.welcometext5}>Learn more about Mummy</Text>
              <Text style={styles.welcometext6}>揭開木乃伊神秘面紗</Text>
            </ImageBackground>
          </View>
      </Swiper>
    </View>

        <Image style={{width:414,height:35,position:'absolute'}} source={require('../assets/knowtop.png')}/>
        <Text style={styles.titletext}>旅程章節</Text>
        <Text style={styles.titletext2}>JOURNEY CHAPTER</Text>

        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableWithoutFeedback  onPress={() => navigation.navigate('CHAPTER 01')}> 
            <View>
            <View style={styles.card1}>
              <Image style={styles.cardpic} source={require('../assets/J01.png')}/>
            </View>
            <Text style={styles.cardtext}>CHAPTER 01</Text>
            <Text style={styles.cardtext2}>無境的沙漠</Text>
            </View>
            </TouchableWithoutFeedback>   
          
          
            
          <TouchableWithoutFeedback onPress={() => {setModalVisible(true);}}> 
          <View>
            <View style={styles.card}>
              <Image style={styles.cardpic} source={require('../assets/J02.png')}/>
            </View>
            <Text style={styles.cardtext3}>CHAPTER 02</Text>
            <Text style={styles.cardtext4}>死者的國度</Text>
            </View>
            </TouchableWithoutFeedback> 
         

          <TouchableWithoutFeedback onPress={() => {setModalVisible(true);}}> 
          <View>
            <View style={styles.card}>
             <Image style={styles.cardpic} source={require('../assets/J03.png')}/>
            </View>
            <Text style={styles.cardtext3}>CHAPTER 03</Text>
            <Text style={styles.cardtext4}>無花果樹下</Text>
            </View>
            </TouchableWithoutFeedback> 
        
          <TouchableWithoutFeedback onPress={() => {setModalVisible(true);}}> 
          <View>
            <View style={styles.card}>
              <Image style={styles.cardpic} source={require('../assets/J04.png')}/>
            </View>
            <Text style={styles.cardtext3}>CHAPTER 04</Text>
            <Text style={styles.cardtext4}>沉默的神靈與船</Text>
            </View>
            </TouchableWithoutFeedback>
           
          <TouchableWithoutFeedback onPress={() => {setModalVisible(true);}}>   
          <View>         
          <View style={styles.card2}>
              <Image style={styles.cardpic} source={require('../assets/J05.png')}/>
            </View>
            <Text style={styles.cardtext3}>RE : AFTER</Text>
            <Text style={styles.cardtext4}>購買解鎖新篇章</Text>
            </View>    
          </TouchableWithoutFeedback> 
                         
               
    
              </ScrollView  >
            
        </View>


    </View>

  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "#F3EFEB",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    fontFamily:"Segoe UI",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize:16,
    marginBottom: 15,
    textAlign: "center"
  },



  welcometext:{
    fontSize:15,
    color:"#F3EFEB",
    marginLeft:30,
    marginTop:210,
  },
  welcometext2:{
    fontSize:16,
    color:"#F3EFEB",
    marginLeft:30,
    marginTop:4,
  },

  welcometext3:{
    fontSize:15,
    color:"#F3EFEB",
    marginLeft:215,
    marginTop:195,
  },
  welcometext4:{
    fontSize:16,
    color:"#F3EFEB",
    marginLeft:215,
    marginTop:4,
  },welcometext5:{
    fontSize:15,
    color:"#F2461A",
    marginLeft:30,
    marginTop:80,
  },
  welcometext6:{
    fontSize:16,
    color:"#F2461A",
    marginLeft:30,
    marginTop:4,
  },
  titletext:{
    fontSize:25,
    fontWeight:'bold',
    color:"#4E5C69",
    marginLeft:30,
    marginTop:35,
  },
  titletext2:{
    fontSize:13,
    color:"#4E5C69",
    marginLeft:30,
    marginTop:5,
  },
  cardtext:{
    fontSize:18,
    fontWeight:'bold',
    color:"#FFFFFF",
    marginLeft:40,
    marginTop:220,
    position:"absolute"
  },
  cardtext2:{
    fontSize:15,
    color:"#FFFFFF",
    marginLeft:40,
    marginTop:245,
    position:"absolute"
  },
  cardtext3:{
    fontSize:18,
    fontWeight:'bold',
    color:"#FFFFFF",
    marginLeft:25,
    marginTop:220,
    position:"absolute"
  },
  cardtext4:{
    fontSize:15,
    color:"#FFFFFF",
    marginLeft:25,
    marginTop:245,
    position:"absolute"
  },
  card1:{
    width:222,
    height:236,
    flexDirection:"row",
    backgroundColor:"#F3EFEB",
    marginLeft:28,
    marginTop:35,
    borderRadius:16,
  },
  card:{
    width:222,
    height:236,
    flexDirection:"row",
    backgroundColor:"#F3EFEB",
    marginLeft:10,
    marginTop:35,
    borderRadius:16,
},

  card2:{
    width:222,
    height:236,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#0D0D0D",
    marginLeft:10,
    marginRight:28,
    marginTop:35,
    borderRadius:16,
  },
cardpic:{
  width:222,
  height:236,
  //marginBottom:20,
  
},

 

cat:{
  height:null,
  width:null,
},

});

export default JouralScreen;