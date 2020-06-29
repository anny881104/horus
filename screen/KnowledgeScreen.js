import React, { Component } from 'react'
import {Text,View,Image,Dimensions,SafeAreaView, FlatList,StyleSheet,ScrollView,AppRegistry} from 'react-native'
import Swiper from 'react-native-swiper'


import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
const image = { uri: "https://raw.githubusercontent.com/jean72027/wk44444/master/src/screen/icon/knowHEAD.png" };
 
const {width, height} = Dimensions.get('window');
 



//export default class SwiperDemo2 extends Component 
const knowledgepage = ({ navigation }) => {
 //   render () {
        return (

          <SafeAreaView >


         
          <ScrollableTabView  
          renderTabBar={() => <DefaultTabBar/>}
          locked={false}
          initialPage={0}
          scrollWithoutAnimation={true}
          onScroll={(postion) => {
            // float类型 [0, tab数量-1]
            console.log('scroll position:' + postion);
            }}

        tabBarUnderlineStyle={{backgroundColor:'#CBA72F'}}
        tabBarBackgroundColor='#FFFFFF'
        tabBarActiveTextColor='#CBA72F'
        tabBarInactiveTextColor='#7A67EE'
        tabBarTextStyle={{fontSize: 18}}
        
        prerenderingSiblingsNumber={1}




          >
            <View tabLabel="page1" style={styles.center}>
                <Text >每一天都不同</Text>
                </View>

                <View tabLabel="page2" style={styles.center}>
                    <Text style={{color:'pink'}}>小乔要努力变强</Text>
                </View>
                <View tabLabel="page3" style={styles.center}>
                    <Text style={{color:'red'}}>萝莉身御姐心</Text>
                </View>



          </ScrollableTabView>
          </SafeAreaView>
         
        )
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
});
 
export default knowledgepage;