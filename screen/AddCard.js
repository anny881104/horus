import React  ,{useContext}from "react";
import { Text,StyleSheet,View,Image,ImageBackground,Button ,Dimensions,ScrollView} from 'react-native';
import {StoreContext} from "../store/index";


const {enneadState, kanoState} = useContext(StoreContext);
const [ennead, setEnnead] = enneadState;
const [kano, setKano] = kanoState;

// Make a component
const renderHearted = () => {

  const heartedKano = kano.filter(k => k.heart === true);
  return heartedKano.map(heartK => (
  <Text>{heartK.title}</Text>
  ))

  };

  export  default renderHearted;