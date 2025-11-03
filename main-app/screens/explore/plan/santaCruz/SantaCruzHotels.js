import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Linking, AsyncStorage
} from 'react-native';
import { any } from 'prop-types';
import OpenMap from "react-native-open-map";
import * as Items from '../../../../app/assets/images/hotels1';


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

const data = require("../../../../data/Hotels.json")

class SantaCruzHotels extends React.Component {
    constructor() {
      super();

      this.state = {
        hotels: []
      };
    }

    componentDidMount() {
      this.setState({ hotels: data })
    }

    async addToFavorites(name,info){
        let value = await AsyncStorage.getItem('Hotel');
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
        await AsyncStorage.setItem('Hotel', JSON.stringify(new_value))
    };
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../../app/assets/icons/bed.png')}
                  style={{width: 32*rem, height: 29*rem}}
              />
              <Text style={styles.headerText}>Hotels</Text>
          </View>
          {/*< Image
          source={require('../../../app/assets/images/headerImage_short.png')}
          style={{width: entireScreenWidth, height: 25*rem}}
          />*/}
          {this.state.hotels.map((hotel, index) => {
            const temp = Items.coffeelab1
            return(
              <View key={index}>
              <Text style={styles.regularBold}>{hotel.name}</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={Items[`${hotel.image1s}`]}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={ Items[`${hotel.image2s}`] }
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={ Items[`${hotel.image3s}`] }
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={ Items[`${hotel.image4s}`] }
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${'+ hotel.phoneNo + '}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:' + hotel.email)}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL(hotel.website)}>
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
                      onPress={() => OpenMap.show({ latitude: hotel.latitude, longitude: hotel.longitude })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => this.addToFavorites( hotel.name,{
                          Latitude: hotel.latitude, Longitude: hotel.longitude, Mail: hotel.email,
                          Website: hotel.website, Phone: hotel.phoneNumber, Image: Items[`${hotel.image1s}`]})}>
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

              <Text style={styles.regularBold}>Hotel Santa Fé</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/angermeyer/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526419}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:recepcion@santafegalapagos.com.ec')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:hotel.santafegalapagos.com.ec')}>
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
                      onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => this.addToFavorites( "Hotel Santa Fé",{
                          Latitude: "-0.7449591", Longitude: "-90.3152", Mail: "angercontabilidad@gmail.com",
                          Website: "www.angermeyer-waterfront-inn.com", Phone: "59352526561", Image: "../../app/assets/images/hotels/santa-fe/1.jpg"})}>
                      <Image
                          source={require('../../../../app/assets/icons/turtleBW.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Favorites</Text>
                  </TouchableOpacity>
              </View>
              <Text style={styles.regularBold}>Hotel Angermeyer Water Front Inn</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/angermeyer/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>
              </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzHotels;
