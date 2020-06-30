import React, { useState ,useContext} from 'react';
import { View, FlatList,StyleSheet,Image,TouchableOpacity,AsyncStorage, Linking,Text } from "react-native"
import heartImage from "../assets/222-2.png"
import heartImageUnfill from "../assets/222.png"
import {StoreContext } from '../store/index'
const COUNTER_KEY = "HEART_PRESS";



const cardDetail  = ({ album, navigation }) => {

const {enneadState, kanoState} = useContext(StoreContext);
const [ennead, setEnnead] = enneadState;
const [kano, setKano] = kanoState;

const [heart, setHeart] = useState(false); /*宣告useState*/



function renderImage() { /*判斷用哪張圖片渲染*/
  let imgSrc = ''
  if (album.heart) {
      imgSrc = heartImage;
  }
  else {
      imgSrc = heartImageUnfill;
  }
  return (
      <Image
          style={{ 
            marginTop:365,
            marginLeft:270,  
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
const addFav = () => { /*給button用的函式*/
    /* 要set global state 的地方*/

    const copyEnnead = [...ennead];
    const index = copyEnnead.findIndex(data => data.title === album.title);
    const targetEnnead = ennead[index];
    targetEnnead.heart = !targetEnnead.heart;

    copyEnnead.splice(index, 1, targetEnnead);
    setEnnead(copyEnnead);

  }



  return (

  <View style={styles.card}>

      <View style={styles.postname}>

          <Image style={{width:190,height:275,marginLeft:-15,marginTop:13}} source={{uri: album.pic}}/>

          <Text style={styles.title}>{album.title}</Text>
          
                <Text style={styles.articletext}>{album.a1}</Text>
                <Text style={styles.articletext}>{album.a2}</Text>
                <Text style={styles.articletext}>{album.a3}</Text>
                <Text style={styles.articletext}>{album.a4}</Text>
                <Text style={styles.articletext}>{album.a5}</Text>
                <Text style={styles.articletext}>{album.a6}</Text>
         

            
        
            
                    
      </View>
 <TouchableOpacity
                    style={{
                    position:"absolute",
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                        onPress={addFav}>

                                {renderImage()}

                </TouchableOpacity>    
                            

       
    </View>
    );
  }

const styles = StyleSheet.create({

    card:{
        flexDirection:"row",
        justifyContent:"flex-start",
        backgroundColor:"#F3EFEB",
        borderRadius: 42,
        width:346,
        height:440,
        marginTop:25,
    },

    title:{
        color:"#4E5C69",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        marginBottom:5,
        marginTop:15,
    },

    articletext:{
        color:"#4E5C69",fontSize:13,alignItems:"center",marginTop:8,
    
    },
    postname:{
        width:360,
        height:46,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
    },
  

});


export default cardDetail;