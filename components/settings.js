import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Slider,
  } from 'react-native';
  import { CusSlider } from './slider.js';


  export default class Setting extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.sliders}>
          <Text style={styles.sliderText}>How far do you want it to be????</Text>
            <CusSlider left='Very Anxious' right='Relaxed'/>
            <CusSlider left='Very Tired' right='Energized'/>
          </View>
      </View> );



  }

}


const styles = StyleSheet.create({
    container: {
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 5,
      marginTop: 5,
      alignItems: "stretch",
      justifyContent: "center",
    },
  
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    sliderText: {
      fontSize: 25,
      color: '#2699fb',
      marginTop: 200
    },
  
    sliderBar: {
      marginBottom: -10
    }
  });
  
  export { Setting };
  

  