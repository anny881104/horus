import React ,{useState,useContext}from "react";
import { Text,StyleSheet,View,Image,ImageBackground,Button ,Dimensions,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import heartImage from "../assets/222.png"
import heartImageUnfill from "../assets/222-2.png"
import { StoreProvider, StoreContext } from '../store'
const image = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/wall.png" };


const UserScreen = ({ navigation }) => {

  const {enneadState, kanoState} = useContext(StoreContext);
  const [ennead, setEnnead] = enneadState;
  const [kano, setKano] = kanoState;


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
    return heartedKano.map(heartK => (
     
        <View style={{
          backgroundColor:"#F3EFEB",
          width:211,
          height:220,
          marginLeft:40,
          marginBottom:10,
          marginTop:50,
          borderRadius:34,
          alignItems:"center",
        }}>
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
    return heartedEnnead.map(heartE => (
      <View style={{
        backgroundColor:"#F3EFEB",
        width:211,
        height:220,
        marginLeft:40,
        marginBottom:10,
        marginTop:50,
        borderRadius:34,
        alignItems:"center",
      }}>
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
    <SafeAreaView style={{backgroundColor:"#1E1E1E"}}>
   <View style={{backgroundColor:"#F2E6D8"}}>
      

        <View style={styles.userbox}>
          <Image style={{ width: 60, height: 60 }}
                source={require('../assets/userpic.png')}
          />
          <Text style={styles.usertext}>KABA</Text>
        </View>
<View style={{backgroundColor:"#F2E6D8",}}>
  <Text style={{color:"#4E5C69",fontSize:20,fontWeight:"bold",marginLeft:32,marginTop:50,}}>我的收藏</Text>
  <Text style={{color:"#4E5C69",fontSize:13,marginLeft:32,marginTop:5,marginBottom:15,}}>Favorite   </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#808080",height:450,width:414,}}>
        {renderHearted()}
        {renderHeartedE()}
      </ScrollView>
 </View>      
      
   </View>
   </SafeAreaView >
  );
}

const styles = StyleSheet.create({
      userbox:{ 
        marginTop:87,
        marginBottom:37,
        marginLeft:40,
      },
      usertext:{
        fontSize: 20,
        marginTop:20,
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

export default ()　=> {
  return (
      <StoreProvider>
          <UserScreen />
      </StoreProvider>
  )
};
