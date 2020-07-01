import React, {Component} from "react";
import Swiper from 'react-native-swiper'
import {Dimensions,Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,Modal} from 'react-native';
const{width,height}=Dimensions.get('window');
const image2 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/page2%20%E2%80%93%201.png" };
const image3 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/page3%20%E2%80%93%201.png" };
const image4 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/page4%20%E2%80%93%201.png" };

class Start extends Component{
  constructor(){
    super();
    this.state={
      modalVisible:true,
    }
  }

  render(){
    return(
        <View > 
        <Modal animationType="slide" visible={this.state.modalVisible} >
       
        <Swiper horizontal={true}loop={false}autoplay={true}autoplayTimeout={5}showsPagination={false}
       >
        <Image style={{width:414,height:736,position:'absolute'}} source={require('../assets/page0.png')}/>

        <Swiper horizontal={true} loop={false} autoplay={ false }
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight:3,
              marginTop: 3,
              marginBottom: 150,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 150,
            }}
            />
          }
       >
 
             <View style={styles.slide}>
                 <ImageBackground source={image2} style={{width: 414, height: 736,zIndex:0}}>
                    <View style={styles.textbox}>
                    <Image style={{width:67,height:58}} source={require('../assets/enertimg.png')}/>
                        <Text style={styles.abouttext}> 嗨!終於見到你了，卡巴。</Text>
                        <Text style={styles.abouttext}>相信你對於死後一定有很多疑問</Text>
                        <Text style={styles.abouttext}>我是聖甲蟲，你的守護神</Text>
                        <Text style={styles.abouttext}>接下的旅途可能會很艱辛</Text>
                        <Text style={styles.abouttext}> 但我保證一定會非常有趣</Text>
                    </View>
                 </ImageBackground>
            </View>
            <View style={styles.slide}>
                 <ImageBackground source={image3} style={{width: 414, height: 736,zIndex:0}}>
                <View style={styles.textbox}>
                    <Image style={{width:67,height:58}} source={require('../assets/enertimg.png')}/>
                        <Text style={styles.abouttext}>對古埃及人來說，死亡並不是結束?</Text>
                        <Text style={styles.abouttext}>而是準備邁向重生、進入來世的一個過程。</Text>
                        <Text style={styles.abouttext}>古埃及人認為，人的靈體可以分為幾個部分：</Text>
                        <Text style={styles.abouttext}>Ib（心） Sheut（影子） Ren（名字）</Text>
                        <Text style={styles.abouttext}> Ka（生命力） Ba（人格）。</Text>
                </View>
                 </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground source={image4} style={{width: 414, height: 736,zIndex:0}}>
              <View style={styles.textbox2}>
                  <Image style={{width:67,height:58}} source={require('../assets/enertimg.png')}/>
                      <Text style={styles.abouttext}>  人死後，Ka跟Ba就會離開，</Text>
                      <Text style={styles.abouttext}>在經過名為"死後審判"的重重考驗後，</Text>
                      <Text style={styles.abouttext}>才能回到自己的身體裡，再次復活。</Text>
                      <Text style={styles.abouttext}>那...卡巴，你準備好了嗎?</Text>
                      <Text style={styles.abouttext}>讓我們一同進入</Text>
                      <Text style={styles.abouttext}>那名為"死後審判"的奇妙旅程吧!</Text>
              </View>
              </ImageBackground>
            </View>
        </Swiper>
          
      </Swiper>

            <View style={styles.btn} >
            <TouchableOpacity  onPress={() => {this.setState({modalVisible:false})}}> 
                <Image style={{ width: 50, height: 50 }}
                      source={require('../assets/skipbtn.png')}
                />
            </TouchableOpacity>  
            </View>
  
      </Modal>
    </View>
        )
    }
}
 
const styles = StyleSheet.create({
  btn:{
    marginTop:600,
    marginLeft:330,
    position:'absolute',
  },
  slide:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    textbox:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:280,
      
      //backgroundColor:"#BF7866",
    },
    textbox2:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:247,
    },
    abouttext:{
      fontSize: 16,
      marginTop:15,
    },
  });
 
  export default Start;
