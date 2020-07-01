import React ,{useState,useContext,useEffect}from "react";
import { Text,TextInput,Alert,Modal,StyleSheet,View,Image,ImageBackground,Button ,Dimensions,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import heartImage from "../assets/222.png"
import heartImageUnfill from "../assets/222-2.png"
import { StoreProvider, StoreContext } from '../store'
import { useFocusEffect } from '@react-navigation/native';
const image = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/wall.png" };


const UserScreen = ({ navigation }) => {

  const {enneadState, kanoState} = useContext(StoreContext);
  const [ennead, setEnnead] = enneadState;
  const [kano, setKano] = kanoState;
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = React.useState('KABA');


  const [heart, setHeart] = useState(false); /*宣告useState*/

  // initHeat();
  
  function renderImage() { /*判斷用哪張圖片渲染*/
    let imgSrc = ''
    if (heart) {
        imgSrc = heartImage;
    }
    else {
        imgSrc = heartImageUnfill;
    }
    return (
        <Image
            style={{ 
              marginTop:10,
              marginLeft:135,
              width:65,
              height:65,}}
            source={imgSrc}
        />
    );
  }
  
  setValue = async (b) => {
    try {
        await AsyncStorage.setItem(COUNTER_KEY, JSON.stringify(b)); /*設定新內容*/
    } 
    catch (error) {
    }
    finally {
        setHeart(b);
    }
  };
  
  const plusOneFn = () => { /*給button用的函式*/
    setHeart(!heart);

  }

  
  const renderHearted = () => {

    const heartedKano = kano.filter(k => k.heart === true);
    return heartedKano.map((heartK, i) => (
        
        <View style={{
          backgroundColor:"#F3EFEB",
          width:211,
          height:220,
          marginLeft:40,
          marginBottom:10,
          marginTop:50,
          borderRadius:34,
          alignItems:"center",
        }}
        key={i}>
      <Image style={{ width: 150, height: 120, marginTop:35,}}
                  source={{uri: heartK.addpic}}
            />
      <Text style={{ fontSize:16,marginTop:17,}}>{heartK.title}</Text>
             <TouchableOpacity
                    style={{
                    position:"absolute",
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                        onPress={plusOneFn}>{renderImage()}

             </TouchableOpacity>   
      </View>
   
    ))
  
  };

  const renderHeartedE = () => {
    const heartedEnnead = ennead.filter(e => e.heart === true);
    return heartedEnnead.map((heartE,i) => (
      <View style={{
        backgroundColor:"#F3EFEB",
        width:211,
        height:220,
        marginLeft:40,
        marginBottom:10,
        marginTop:50,
        borderRadius:34,
        alignItems:"center",
      }}
      key={i}>
        <TouchableOpacity
            style={{
            position:"absolute",
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            }}
                        onPress={plusOneFn}>{renderImage()}

          </TouchableOpacity>  
          <Image style={{ width: 150, height: 120 ,marginTop:35, }}
                  source={{uri: heartE.addpic}}
          />
          <Text style={{ fontSize:16,marginTop:17,}}>{heartE.title}</Text>
          
      </View> 
    ))
  };

  return (
    // <SafeAreaView style={{backgroundColor:"#1E1E1E"}}>
   <View style={{backgroundColor:"#F2E6D8"}}>
       <ImageBackground source={require('../assets/ubg.png')} style={{ width:null,height:270 }}>
        <Image style={{width:414,height:35,position:'absolute'}} source={require('../assets/knowtop.png')}/>
        <View style={{flexDirection:"row"}}>
        <View style={styles.userbox}>
          <Image style={{ width: 60, height: 60 }}
                source={require('../assets/userpic.png')}
          />
          
          <Text style={{color:"#4E5C69",fontSize:20,fontWeight:"bold",marginTop:10,marginLeft:5,}}>{value}</Text>
          {/* username */}
         
        </View>
        <TouchableOpacity
                  style={{marginTop:153,marginLeft:20,}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  >
                    <Image style={{ width: 30, height: 30 ,}} source={require('../assets/fluffy.png')}/>
        </TouchableOpacity>
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        >
          <View style={{backgroundColor: "white",borderRadius: 20,padding: 35,width:350,height:300,
          marginTop:155,marginLeft:32,
          justifyContent: "center",alignItems: "center",alignContent:"center",}}>

            <ImageBackground source={require('../assets/alertbg.png') }style={{ width:350,height:300 }}>
              <View style={{justifyContent: "center",alignItems: "center",marginTop:80,}}>
            <Text style={{color:"#4E5C69",fontSize:20,fontWeight:"bold",}}>更改暱稱</Text>
            
            <TextInput
              style={{ height: 40, width:100,borderColor: 'gray', borderWidth: 1 ,padding:5,marginTop:15,}}
              onChangeText={text => onChangeText(text)}
              value={value}
            />

            <TouchableOpacity
              style={{ height: 40, width:100, backgroundColor: "#4E5C69" ,marginTop:15,padding:10,borderRadius:25,}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={{color:"white",fontSize:16,fontWeight:"bold",marginLeft:24,}}>完成</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>

          </View>
      </Modal>

          {/* 加modal */}
          
         
        </ImageBackground>


<View style={{}}>
  <Text style={{color:"#4E5C69",fontSize:20,fontWeight:"bold",marginLeft:32,marginTop:40,}}>我的收藏</Text>
  <Text style={{color:"#4E5C69",fontSize:13,marginLeft:32,marginTop:5,marginBottom:10,}}>Favorite   </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#F2E6D8",height:450,width:414,}}>
        {renderHearted()}
        {renderHeartedE()}
      </ScrollView>
 </View>      
      
   </View>
  //  </SafeAreaView >
  );
}

const styles = StyleSheet.create({
      userbox:{ 
        marginTop:87,
        marginBottom:37,
        marginLeft:40,
        alignContent:"center",
        justifyContent:"center",
      },
      usertext:{
        fontSize: 20,
        marginTop:20,
        marginLeft:5,
        fontWeight:"bold", 
      },
      infotext:{
        fontSize: 15,
      },
      bgimage:{
        height:643,
        width:389,
        marginTop:40,
        marginLeft:15,
      },
});

export default UserScreen
