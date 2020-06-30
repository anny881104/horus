import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, TextInput, StyleSheet ,Modal,Image} from 'react-native'
const{width,height}=Dimensions.get('window');


class Inputs extends Component{
   constructor(){
     super();
     this.state={
       signVisible:true,
     }
   }
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

   render(){
      return(
         <View style = {styles.container}>
            <Modal animationType="slide" visible={this.state.signVisible} >
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handleEmail}/>
               
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handlePassword}/>

               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {() => this.login(this.state.email, this.state.password)}
               >
                  <Text style = {styles.submitButtonText}> 走吧! </Text>
               </TouchableOpacity>
              

               <View style={styles.btn} >
                  <TouchableOpacity  onPress={() => {this.setState({signVisible:false})}}> 
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

   container: {
      paddingTop: 23,
      
      width:width,
      height: height,
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

export default Inputs;