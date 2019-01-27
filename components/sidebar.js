import React, { Component } from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import UserLocation from './userloc.js'
import Setting from './settings.js'
import Notifications from './notifications.js'


const NavStack = createDrawerNavigator(

  {
  Map:{ 
      screen: UserLocation,
     
  },
  Settings:{ 
    screen: Setting,
   
},
Venues:{ 
  screen: Setting,
 
},
/*Notification:{
  screen: Notifications,
},*/
});


const AppDrawerNavigator = createAppContainer(NavStack);

export default AppDrawerNavigator;


