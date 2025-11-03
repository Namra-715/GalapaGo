import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, Linking} from 'react-native';
import OpenMap from "react-native-open-map";
import { AsyncStorage } from 'react-native';
import { any } from 'prop-types';
import * as Items from '../../../../app/assets/images/restaurants';

// import { getDatabase, ref} from '@firebase/database';
// import { auth, db, firebaseApp, firebase } from "../../../../App";

// import { getStorage } from '@firebase/storage';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    header:{
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 28*rem,
        fontWeight: "600",
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    lastButtonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderColor: '#C0C0C0',
        paddingLeft: 34,
        paddingRight: 14
    },
    buttonLeft:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonRight:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    chevron:{
        width: 11*rem,
        height: 18*rem
    },
    regularBold:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 30,
        paddingTop: 16,
        paddingBottom: 16,
        flexWrap: "wrap"
    },
    regular:{
      fontSize: 17*rem,
      color: '#616161',
      padding: 30,
      lineHeight: 20 * rem
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 34,
      alignItems: 'stretch'
    },
    wrapper: {
      height: 200*rem,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width,
    },
    slideImage: {
      height: 250*rem,
      width: Dimensions.get('window').width,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    infoPhone: {
      width: 20*rem,
      height: 18*rem,
    },
    infoEmail: {
      width: 21*rem,
      height: 16*rem,
    },
    infoAddress: {
      width: 18*rem,
      height: 21*rem,
    },
    infoWeb: {
      width: 20*rem,
      height: 20*rem,
    },
    infoText: {
      fontSize: 17*rem,
      color: '#616161',
      lineHeight: 20*rem,
      marginLeft: 10*rem,
      marginRight: 20*rem,
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: "center",
      flexWrap: "wrap"
    },
    lastRow:{
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 50,
      justifyContent: "center",
      flexWrap: "wrap"
    }
});
const data = require("../../../../data/Restaurants.json")
class SantaCruzFood extends React.Component {

  constructor() {
    super();

    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    this.setState({ restaurants: data })
}
  // componentDidMount() {
  //   db.ref("/restaurants").on("value", snapshot => {
  //   let allRestaurants = [];
  //   snapshot.forEach(snap => {
  //     allRestaurants.push(snap.val());
  //   });
  //   this.setState({ restaurants: allRestaurants });
  // });


// }

    async addToFavorites(name,info){
        let value = await AsyncStorage.getItem('Food');
        let new_value;
        if (value !== null) {
            new_value = JSON.parse(value);
            new_value[name] = info;
        }
        else{
            new_value = {};
            new_value[name] = info
        }
        console.log(new_value);
        await AsyncStorage.setItem('Food', JSON.stringify(new_value))
    };

  render(){
    return (

      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../../app/assets/icons/food.png')}
                  style={{width: 25*rem, height: 31 *rem}}
              />
              <Text style={styles.headerText}>Food &amp; Drinks</Text>
          </View>
          {/*< Image
          source={require('../../../app/assets/images/headerImage_short.png')}
          style={{width: entireScreenWidth, height: 25*rem}}
          />*/}
          {this.state.restaurants.map((restaurant, index) => {
            return(
              <View key={index}>
              <Text style={styles.regularBold}>{restaurant.name}</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                <Image
                        source = { Items[`${restaurant.image1s}`] }
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source = { Items[`${restaurant.image2s}`] }
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source = { Items[`${restaurant.image3s}`] }
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                    source = { Items[`${restaurant.image4s}`] }
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${'+ restaurant.phoneNo + '}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:' + restaurant.email)}>
                    <Image
                        source={require('../../../../app/assets/icons/email.png')}
                        style={styles.infoEmail}
                    />
                    <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.coffeelabec.com')}>
                    <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                        style={styles.infoWeb}
                    />
                    <Text style={styles.infoText}>Website</Text>
                 </TouchableOpacity>
              </View>
              <View style={styles.lastRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => OpenMap.show({ latitude: restaurant.latitude, longitude: restaurant.longitude })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => this.addToFavorites( restaurant.name,{Name: restaurant.name,
                          Latitude: restaurant.latitude, Longitude: restaurant.longitude, Mail: restaurant.email,
                          Website: "https:www.coffeelabec.com", Phone: restaurant.phoneNo, Image:Items[`${restaurant.image4s}`]})}>
                      <Image
                          source={require('../../../../app/assets/icons/turtleBW.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Favorites</Text>
                  </TouchableOpacity>
              </View>
              </View>
            );
        })}

      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzFood;
