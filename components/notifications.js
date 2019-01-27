import React from 'react';
import { StyleSheet, Text, View, Menu } from 'react-native';
import Expo, { AppLoading, Asset, Font, Icon, Constants } from 'expo';

async function register(){
  const {status} = await Expo.Permissions.askAsync(
     Expo.Permissions.NOTIFICATIONS
  );
  if(status !== 'granted'){
    return;
  }

const token = await Expo.Notifications.getExpoPushTokenAsync();
}


export default class Notifications extends React.Component {

componentWillMount(){
register();
this.listener = Expo.Notifications.addListner(this.listen)

}

componentWillUnmount(){
this.listener && Expo.Notifications.removeListner(this.listen)

} 
listen = ({origin, data}) => {


}  

  render() {


   return null;

   
    
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
