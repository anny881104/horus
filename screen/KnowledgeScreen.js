import React, { Component } from 'react'
import {Text,View,Image,Dimensions,ImageBackground, FlatList,StyleSheet,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const image = { uri: "https://raw.githubusercontent.com/jean72027/wk44444/master/src/screen/icon/knowHEAD.png" };
 
 
 
//export default class SwiperDemo2 extends Component 
const knowledgepage = ({ navigation }) => {
 //   render () {
        return (
          <ScrollView style={{backgroundColor:"#F2E6D8"}}>
 
          <ImageBackground source={image} style={styles.headerimage}>
            <View style={styles.headertext}>
              <Text style={styles.headertitle}>古埃及百科</Text>
              <Text style={styles.headertitle2}>KNOWLEDGE </Text>
              <Text style={styles.headertitle2}>ABOUT</Text>
              <Text style={styles.headertitle2}>ANCIENT EYGEPT</Text>
            </View>
            <View style={styles.headerbuttom}>
              <View  style={styles.buttom}>
                <Image style={styles.buttompic} source={require('../assets/ennead.png')}/>
                <Text style={styles.buttomtext}>九柱神</Text>
              </View>
              <View  style={styles.buttom}>
                <Image style={styles.buttompic2} source={require('../assets/jar.png')}/>
                <Text style={styles.buttomtext}>卡諾皮克罐</Text>
              </View>
              <View  style={styles.buttom}>
                <Image style={styles.buttompic3} source={require('../assets/mummy.png')}/>
                <Text style={styles.buttomtext}>木乃伊製作</Text>
              </View>
            </View>
 
          </ImageBackground>
          <View>
            <Text style={styles.cardtitle1}>九柱神 ENDEAD</Text>
            <View style={styles.swipcontainer}>
              <Swiper style={styles.wrapper} height={270} horizontal={true} autoplay={ false } loadMinimalSize={9}>
              <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Ra.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>太陽神 拉</Text>
                <Text style={styles.article}>九柱神之首</Text>
                <Text style={styles.article}>創造出一切的創世神</Text>
                <Text style={styles.article}>原為埃及的統治者</Text>
                <Text style={styles.article}>後被奧西里斯奪去王位</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} resizeMode='stretch' source={require('../assets/Shu.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>大氣之神 舒</Text>
                <Text style={styles.article}>拉的兒子</Text>
                <Text style={styles.article}>大氣之神</Text>
                <Text style={styles.article}>手撐天空腳踩大地</Text>
                <Text style={styles.article}>頭戴著長羽毛頭飾</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Tefnut.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>濕氣之神 泰芙努特</Text>
                <Text style={styles.article}>拉的女兒</Text>
                <Text style={styles.article}>濕氣之神</Text>
                <Text style={styles.article}>與兄長舒結婚</Text>
                <Text style={styles.article}>生下蓋布與努特</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Geb.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>大地之神 蓋布</Text>
                <Text style={styles.article}>舒與泰芙努特的兒子</Text>
                <Text style={styles.article}>大地之神</Text>
                <Text style={styles.article}>與妹妹努特相愛</Text>
                <Text style={styles.article}>育有四個孩子</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Nut.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>天空女神 努特</Text>
                <Text style={styles.article}>舒與泰芙努特的女兒</Text>
                <Text style={styles.article}>天空的女神</Text>
                <Text style={styles.article}>又被視為死亡女神</Text>
                <Text style={styles.article}>石棺內壁上常繪有她</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Osiris.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>冥界之神 奧西里斯</Text>
                <Text style={styles.article}>原為農業之神，統治埃及</Text>
                <Text style={styles.article}>後被兄弟賽特殺死</Text>
                <Text style={styles.article}>而成為了冥界之主</Text>
                <Text style={styles.article}>與妹妹伊西絲生下荷魯斯</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Isis.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>魔法之神 伊西絲</Text>
                <Text style={styles.article}>魔法與自然之神</Text>
                <Text style={styles.article}>王位的化身</Text>
                <Text style={styles.article}>她的頭飾就是個寶座</Text>
                <Text style={styles.article}>是荷魯斯(法老之始)的母親</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Set.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>戰爭之神 賽特</Text>
                <Text style={styles.article}>戰爭與沙漠、力量之神</Text>
                <Text style={styles.article}>殺死奧西里斯奪取他的王位</Text>
                <Text style={styles.article}>後與姪子荷魯斯爭奪王位</Text>
                <Text style={styles.article}>最終敗北</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/Nephthys.png')}/>
            <View style={styles.cardtext}>
                <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>和諧之神 奈芙蒂斯</Text>
                <Text style={styles.article}>和諧與生育之神</Text>
                <Text style={styles.article}>賽特的妹妹與妻子</Text>
                <Text style={styles.article}>同時也是亡者的守護神</Text>
                <Text style={styles.article}>是死神阿努比斯的母親</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
              </Swiper>
                
            </View>
          </View>  
 
          <View>
          <Text style={styles.cardtitle}>卡諾皮克罐 CANOPIC JAR</Text>
            <View style={styles.swipcontainer}>
                <Swiper style={styles.wrapper} height={270} horizontal={true} loop={ false }autoplay={ false }>
                <View style={styles.card}>
            
                        <Image style={styles.cardpic} source={require('../assets/Canopic.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>什麼是卡諾皮克罐?</Text>
                            <Text style={styles.article}>製作木乃伊時</Text>
                            <Text style={styles.article}>用來保存內臟的罐子</Text>
                            <Text style={styles.article}>意義是保護法老的內臟</Text>
                            <Text style={styles.article}>以供法老來世使用</Text>
                            <Text style={styles.article}>多由石灰石製成</Text>
                            <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Imset.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>艾姆謝特罐 人首神</Text>
                            <Text style={styles.article}>守護肝臟</Text>
                            <Text style={styles.article}>罐上刻著的銘文是</Text>
                            <Text style={styles.article}>「我是艾姆謝特，</Text>
                            <Text style={styles.article}>你——奧西里斯的孩子，</Text>
                            <Text style={styles.article}>我來保護你。」</Text>
                            <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Duamutef.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>多姆泰夫罐 狼首神</Text>
                            <Text style={styles.article}>守護胃</Text>
                            <Text style={styles.article}>罐上刻著的銘文是</Text>
                            <Text style={styles.article}>「我是多姆泰夫，愛你</Text>
                            <Text style={styles.article}>的——荷魯斯的孩子。我</Text>
                            <Text style={styles.article}>來為父親報仇。」</Text>
                            <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Hapi.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>哈畢罐 狒狒首神</Text>
                            <Text style={styles.article}>守護肺</Text>
                            <Text style={styles.article}>罐上刻著的銘文是</Text>
                            <Text style={styles.article}>「我是哈畢，</Text>
                            <Text style={styles.article}>你——奧西里斯的孩子，</Text>
                            <Text style={styles.article}>我來保護你。」</Text>
                            <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                <View style={styles.card}>
                        
                        <Image style={styles.cardpic} source={require('../assets/Kebechsenef.png')}/>
                        <View style={styles.cardtext}>
                        <Text style={styles.article}>  </Text>
                            <Text style={styles.texttitle}>凱布山納夫罐 鷹首神</Text>
                            <Text style={styles.article}>守護腸子</Text>
                            <Text style={styles.article}>罐上刻著的銘文是</Text>
                            <Text style={styles.article}>「我是凱布山納夫，你，</Text>
                            <Text style={styles.article}>奧西里斯的孩子。我已</Text>
                            <Text style={styles.article}>經來了，我會保護你。」</Text>
                            <Text style={styles.article}>  </Text>
                        </View>
                
                </View>
                
              </Swiper>
                
            </View>
          </View>
 
          <View>
          <Text style={styles.cardtitle}>木乃伊製作 MAKEING MUMMY</Text>
            <View style={styles.swipcontainer}>
                <Swiper style={styles.wrapper} height={270} horizontal={true} loop={ false }autoplay={ false }>
                <View style={styles.card}>
            
            <Image style={styles.cardpic3} source={require('../assets/mummy1.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>1.清洗遺骸</Text>
                <Text style={styles.article}>先用蘇打水清洗擦拭遺骸</Text>
                <Text style={styles.article}>以松脂塗抹面部防止變形</Text>
                <Text style={styles.article}>將細管從鼻子插入顱腔</Text>
                <Text style={styles.article}>攪碎腦漿再抽出</Text>
                <Text style={styles.article}>最後在顱腔填入香料跟藥材</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/mummy2.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>2.內臟處理</Text>
                <Text style={styles.article}>取出遺體的肝、胃、肺、</Text>
                <Text style={styles.article}>腸，並用食鹽吸乾水份</Text>
                <Text style={styles.article}>塗上松脂跟食用油</Text>
                <Text style={styles.article}>再分別放入卡諾皮克罐</Text>
                <Text style={styles.article}>心臟會另外處理</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic3} source={require('../assets/mummy3.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>3.處理心臟</Text>
                <Text style={styles.article}>古埃及人認為心臟</Text>
                <Text style={styles.article}>是智慧之源</Text>
                <Text style={styles.article}>心臟要放回遺體內</Text>
                <Text style={styles.article}>心臟經由食鹽鹼粉脫水後</Text>
                <Text style={styles.article}>用棕油清洗一次，放上</Text>
                <Text style={styles.article}>甲蟲護身符後放回胸腔</Text>
                <Text style={styles.article}>  </Text>
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/mummy4.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>4.胸腔縫合</Text>
                <Text style={styles.article}>將腹腔胸腔內壁用棕油洗</Text>
                <Text style={styles.article} >淨，放入成包的蘇打粉鹼</Text>
                <Text style={styles.article}>粉瀝青，再將屍體放上鋪</Text>
                <Text style={styles.article}>滿乾粉的床對屍體進行脫</Text>
                <Text style={styles.article}>水處理，脫水完再填入香</Text>
                <Text style={styles.article}>料與內臟縫合</Text>
                <Text style={styles.article}>  </Text>
               
            </View>
    
    </View>
    <View style={styles.card}>
            
            <Image style={styles.cardpic} source={require('../assets/mummy4.png')}/>
            <View style={styles.cardtext}>
            <Text style={styles.article}>  </Text>
                <Text style={styles.texttitle}>5.美化包裹</Text>
                <Text style={styles.article}>由於經過乾燥處理</Text>
                <Text style={styles.article}>木乃伊的面部輪廓會變得</Text>
                <Text style={styles.article}>模糊，需要化妝師為</Text>
                <Text style={styles.article}>木乃伊化妝整容，並戴</Text>
                <Text style={styles.article}>上假髮和首飾，最後再用</Text>
                <Text style={styles.article}>亞麻布將遺體包裹住</Text>
                <Text style={styles.article}>  </Text>
                
            </View>
    
    </View>
                </Swiper>
                
            </View>
          </View>
 
</ScrollView>
 
        )
};
 
const styles = StyleSheet.create({
 
  pai:{
    flexDirection:"row",
  },
  
  headerimage: {
    width,
    height:259,
  },
  headertext:{
    marginTop:26,
    marginLeft:33,
    fontWeight:'bold',
  },
 
  headertitle:{
    fontSize:25,
    color:'#4E5C69',
    fontWeight:"900",
  },
 
  headertitle2:{
    fontSize:20,
    color:'#4E5C69',
  },
  headerbuttom:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:33,
  },
 
  buttom:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
 
  buttompic:{
    width:47,
    height:47,
  },
  buttompic2:{
    width:50,
    height:47,
  },
  buttompic3:{
    width:49,
    height:47,
  },
 
  buttomtext:{
    fontSize:16,
    color:'#CBA72F',
    backgroundColor:'#000000',
    marginTop:5,
    paddingTop:5,
    paddingLeft:10,
    paddingBottom:3,
    paddingRight:10,
    borderRadius:8,
  },
 
  cardtitle1:{
    marginLeft:29,
    fontSize:18,
    marginBottom:10,
    marginTop:25,
  },
 
  cardtitle:{
    marginLeft:29,
    fontSize:18,
    marginBottom:10,
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
cardpic3:{
  width:155,
  height:200,
  
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
 
export default knowledgepage;

