import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,AsyncStorage  } from 'react-native';
import { SplashScreen } from 'expo';

import JournalScreen from './screen/JournalScreen';
import KnowledgeScreen from './screen/KnowledgeScreen';
import UserScreen from "./screen/UserScreen";
import CHAPTER01 from "./story/Story1";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PERSISTENCE_KEY = "NAVIGATION_STATE";

const JournalStack = ({}) => {
  return (
      
      <Stack.Navigator>
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
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
    <NavigationContainer 
        initialState={initialNavigationState}
        onStateChange={(state)=>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
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
                style={{width: 30, height: 30,marginTop:5,}}
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
            marginBottom:8,
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

}

export default App;