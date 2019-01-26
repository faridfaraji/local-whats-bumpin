import React, { Component } from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import UserLocation from './userloc.js'
 

export const NavStack = createDrawerNavigator({
  Map:{ 
      screen: UserLocation,
  }
});
const AppDrawerNavigator = createAppContainer(NavStack);

export default AppDrawerNavigator;


