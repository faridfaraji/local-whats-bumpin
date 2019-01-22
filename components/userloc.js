import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions,TaskManager } from 'expo';
import { MapView } from 'expo';


class UserLocation extends Component {
    constructor(props) {
        super(props);
     this.state = { location: {coords: { latitude: 49.292, longitude: -123.116226}},
     locationResult: "babe",
    
    };}
 

 

  
  componentDidMount = async() =>{
    this._getLocationAsync();
    await Location.startLocationUpdatesAsync("firstTask", {
        accuracy: Location.Accuracy.Balanced,
    });
    this.setState({ locationResult: JSON.stringify(location)});


  }


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }
    let curlocation = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(curlocation) }); 
    this.setState({ location: curlocation });  
};



  render() {
    return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        <MapView.Marker
        coordinate={this.state.location.coords}
        title={"marker.title"}
        description={"desss"}
      />
      <Text style ={styles.paragraph}>
      
          Location: {JSON.stringify(this.state.location.coords)}
        </Text>
      
      </MapView>
      );
  }
}


TaskManager.defineTask("firstTask", ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
        const locations  = data;
      // do something with the locations captured in the background
    }
  });
  

  const styles = StyleSheet.create({

    paragraph: {
        marginTop: 24,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
      },

});


export default UserLocation
