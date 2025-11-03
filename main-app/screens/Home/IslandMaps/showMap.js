import * as React from 'react';
import {Image, Dimensions, Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Map from '../../../components/Map';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const showMap = ({navigation}) => {

  //console.log(navigation.getParam('coords'))
  const {lat, lon, latD, lonD} = navigation.getParam('coords');
    
    return (
      <Map 
          latitude= {lat}
          longitude=  {lon}
          latDelta= {latD}
          lonDelta= {lonD}
      />
      
  );
}


export default showMap;