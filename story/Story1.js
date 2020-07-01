import React from "react";
import { AppRegistry,Image,SafeAreaView,ScrollView,View,StyleSheet,Text,ImageBackground, } from 'react-native';
import LoadingView from 'react-native-loading-view'

import Swiper from 'react-native-swiper'
import Activity from "../screen/Activity";
// Make a component
const CHAPTER01 = ({ navigation }) => {
  
    return (
            
        // <SafeAreaView style={{backgroundColor: "#1E1E1E"}}>
          

            <ScrollView style={{paddingTop: 0 ,backgroundColor: "#1E1E1E"}}>
                
            <Activity style={{width:50,height:50,marginTop:150,marginLeft:182,}}/>
                <View style={styles.topbox}>
                     <Image style={styles.topimg}source={require('../assets/chapter1.png')}/>
                     <Text style={styles.topText}>CHAPTER 01</Text>
                     <Text style={styles.topText2}>無盡的沙漠</Text>
                </View>
                <ImageBackground source={require('../assets/story.png')} style={{ width:null,height:500 }}>
                
                    <Swiper horizontal={true} loop={true} autoplay={false} style={styles.wrapper}
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
                                }}/>
                            }
                        >
                            
                            <View style={{
                                    alignItems:"center",
                                    justifyContent:"center",
                                    marginTop:15,
                                    marginLeft:57,
                                    height:230,
                                    width:300,
                                    backgroundColor:"#1E1E1E",
                                    }}>
                                
                                    <Text  style={{color:"white",fontSize:16,marginTop:8,}}>熱風呼呼作響，炎陽照的皮膚火熱熱的</Text>
                                    <Text  style={{color:"white",fontSize:16,marginTop:8,}}>映入眼裡的是廣無邊際的沙漠</Text>
                                    <Text  style={{color:"white",fontSize:16,marginTop:8,}}>儘管已化作了靈魂</Text>
                                    <Text  style={{color:"white",fontSize:16,marginTop:8,}}>五感的痛苦卻一點也沒少</Text>
                                    <Text  style={{color:"white",fontSize:16,marginTop:8,}}>飢餓與口渴讓步伐變的沉重</Text>
                                    <Text  style={{color:"white",fontSize:16,marginTop:8,}}>但為了抵達西方的死者的世界</Text>
                                    <Text  style={{color:"white",fontSize:16,marginTop:8,}}>這些考驗是必要的</Text>
                               
                            </View>
                            <View style={{
                                    alignItems:"center",
                                    justifyContent:"center",
                                    marginTop:15,
                                    marginLeft:57,
                                    height:230,
                                    width:300,
                                    backgroundColor:"#1E1E1E",
                                    }}>
                                        <Text  style={{color:"white",fontSize:16,marginTop:8,}}>在那無盡的沙漠裡，四處潛藏著危機</Text>
                                        <Text  style={{color:"white",fontSize:16,marginTop:8,}}>能撕爛魂魄的怪獸</Text>
                                        <Text  style={{color:"white",fontSize:16,marginTop:8,}}>能沖斷靈魂的湍流</Text>
                                        <Text  style={{color:"white",fontSize:16,marginTop:8,}}>為了保護自己殘存的KA與BA</Text>
                                        <Text  style={{color:"white",fontSize:16,marginTop:8,}}>並成功抵達亡者之國(圖雅特)</Text>
                                        <Text  style={{color:"white",fontSize:16,marginTop:8,}}>只能提心吊膽的握緊手裡的武器</Text>
                                        <Text  style={{color:"white",fontSize:16,marginTop:8,}}>用盡力氣一步一步向前行</Text>
                                
                            </View>
                            <View style={{
                                    alignItems:"center",
                                    justifyContent:"center",
                                    marginTop:15,
                                    marginLeft:57,
                                    height:230,
                                    width:300,
                                    backgroundColor:"#1E1E1E",
                                    }}>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>死後的世界無日無月</Text>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>時間彷彿停止流動</Text>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>在走了不知多久</Text>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>四肢快要無法動彈時</Text>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>才終於看見了沙漠的終點</Text>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>一座高聳無比的山出現眼前</Text>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>在休息一陣子後再次起身</Text>
                                            <Text  style={{color:"white",fontSize:16,marginTop:8,}}>迎接前往圖雅特的第二個考驗</Text>
                                
                            </View>
                    </Swiper>
                
                </ImageBackground>
            
            </ScrollView>
       
    );
}
const styles = StyleSheet.create({
   
    topbox:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#1E1E1E",
        height:250,
    },
    topimg:{
        width:89,
        height:88,
        marginTop:20,
        
    },
    topText:{
        fontSize:18,
        fontWeight:'bold',
        color:"#CBA72F",
        marginTop:15,
    },
    topText2:{
        fontSize:15,
        color:"#FFFFFF",
        marginTop:15,
    },
});
export default CHAPTER01;