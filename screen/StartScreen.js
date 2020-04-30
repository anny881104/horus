import React, {Component} from "react";
import {Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,SafeAreaView,Modal} from 'react-native';
const image = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/enterpageBG.png" };


class Start extends Component{
  constructor(){
    super();
    this.state={
      modalVisible:true,
    }
  }
    render(){
        return(
<View>
            <Modal animationType="slide" visible={this.state.modalVisible}>

        <View style={{backgroundColor:"#CBA72F"}}>
          <ImageBackground source={image} style={styles.bgimage}>

            <View style={styles.sbox}>
              <View style={styles.aboutspace}>
                <Text style={styles.abouttext}>
                  你害怕死亡嗎? 
                </Text>
                <Text style={styles.abouttext}>
                  死亡就一定代表著終結嗎?
                </Text>
              </View>
              
              <View style={styles.aboutspace}>
                <Text style={styles.abouttext}>
                  生活在古代的埃及人可不這麼想
                </Text>
                <Text style={styles.abouttext}>
                  對古埃及人來說，死亡並不是結束
                </Text>
                <Text style={styles.abouttext}>
                  而是準備邁向重生、進入來世的一個過程。
                </Text>
              </View>

              <View style={styles.aboutspace}>
                <Text style={styles.abouttext}>
                  Ib（心） Sheut（影子） Ren（名字）
                </Text>
                <Text style={styles.abouttext}>
                  Ka（生命力） Ba（人格）。
                </Text>
              </View>

              <View style={styles.aboutspace}>
                <Text style={styles.abouttext}>
                  人死後，Ka跟Ba就會離開，
                </Text>
                <Text style={styles.abouttext}>
                  在經過名為"死後審判"的重重考驗後，
                </Text>
                <Text style={styles.abouttext}>
                  才能回到自己的身體裡，再次復活。
                </Text>
              </View>

              <View style={styles.aboutspace}>
                <Text style={styles.abouttext}>
                  現在，讓我們化身KaBa(卡巴)
                </Text>
                <Text style={styles.abouttext}>
                  一同進入那名為"死後審判"的奇妙旅程──
                </Text>
              </View>

              
              <TouchableOpacity  onPress={() => {this.setState({modalVisible:false})}}> 
              <Image style={{ width: 60, height: 60 }}
                    source={require('../assets/enertimg.png')}
              />
              <Text style={styles.abouttext2}>開始旅程</Text>
            </TouchableOpacity> 

            </View>

          </ImageBackground>  
      </View>
   </Modal>
</View>
        )
    }
}



   
const styles = StyleSheet.create({
   
  
    sbox:{ 
          
      marginTop:90,
      alignItems:"center",
      justifyContent:"center",
    },
    aboutspace:{
      marginBottom:30,
      justifyContent:"center",
      alignItems:"center",
    },
    abouttext:{
      fontSize: 14,
      marginTop:15,
    },
    abouttext2:{
      fontSize: 14,
      marginTop:2,
      //color:"#4E5C69",
    },
    bgimage:{
      height:735,
      width:415,
    },
  });

  export default Start;