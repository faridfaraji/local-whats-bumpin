import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



class Sidebar extends React.Component {
    render() {
      return (
        <View>
          <Text >
            Welcome to React Native!
          </Text>
          <Text>
            To get started, edit index.ios.js
          </Text>
          <Text >
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
        </View>
      );
    }
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
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



  export default Sidebar
  