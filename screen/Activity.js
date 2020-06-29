import React, { Component } from 'react';
import { Dimensions,ActivityIndicator, View,StyleSheet } from 'react-native';
const{width,height}=Dimensions.get('window');

class Activity extends Component {
   state = { animating: true }
   
   closeActivityIndicator = () => setTimeout(() => this.setState({
   animating: false }), 8000)
   
   componentDidMount = () => this.closeActivityIndicator()
   render() {
      const animating = this.state.animating
      return (
         <View style = {styles.container}>
            <ActivityIndicator
               animating = {animating}
               color = '#CBA72F'
               size = "large"
               style = {styles.activityIndicator}/>
         </View>
      )
   }
}
export default Activity

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex:100,
      position:"absolute",
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width:width,
      height: height,
   }
})