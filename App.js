import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Image,StyleSheet } from 'react-native';

import JournalScreen from './screen/JournalScreen';
import KnowledgeScreen from './screen/KnowledgeScreen';
import UserScreen from "./screen/UserScreen";
import StartScreen from "./screen/StartScreen";
import CHAPTER01 from "./story/Story1";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const JournalStack = ({}) => {
  return (
      
      <Stack.Navigator>
        <Stack.Screen name="   "component={StartScreen}
        options={{
          headerStyle:{
            height:0,
          }
        }} 
        /> 
        <Stack.Screen name="  "component={JournalScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />
        <Stack.Screen name="CHAPTER 01"component={CHAPTER01} /> 
      </Stack.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === 'Journal') {
              iconPath = focused
              ? require('./assets/navbar1G.png'):
              require('./assets/1.png');
            } else if (route.name === 'Knowledge') {
              iconPath = focused
              ? require('./assets/navbar2G.png'):
              require('./assets/2.png');
            } else if (route.name == 'User') {
              iconPath = focused
              ? require('./assets/navbar3G.png'):
              require('./assets/3.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 40, height: 35}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#CBA72F',
          inactiveTintColor: '#212122',
          labelStyle: {
            fontSize: 11,
            marginTop: 0,
            padding: 0,
          },
          style:{height:56,backgroundColor:"#F2E6D8",shadowColor:"#929292",shadowOpacity:.5}
          
        }}
        
      >
        <Tab.Screen name="Journal" component={JournalStack} />
        <Tab.Screen name="Knowledge" component={KnowledgeScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;