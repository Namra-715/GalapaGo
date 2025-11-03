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
    Linking
} from 'react-native';
import { any } from 'prop-types';
import OpenMap from "react-native-open-map";

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
      height: 200*rem,
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

class TravelAgencies extends React.Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../app/assets/icons/agencies.png')}
                  style={{width: 30*rem, height: 31 *rem}}
              />
              <Text style={styles.headerText}>Travel Agencies</Text>
          </View>
          {/*< Image
          source={require('../../../app/assets/images/headerImage_short.png')}
          style={{width: entireScreenWidth, height: 25*rem}}
          />*/}

              <Text style={styles.regularBold}>Fds-Travel S.A</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/fds-travel/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/fds-travel/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/fds-travel/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/fds-travel/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:info@fdstravel.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.fdstravel.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>G Adventures</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/g-adventures/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/g-adventures/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/g-adventures/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/g-adventures/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:info@fdstravel.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.gadventures.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Galapagos a la Carte</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/galapagos-a-la-carte/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galapagos-a-la-carte/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galapagos-a-la-carte/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galapagos-a-la-carte/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:info@fdstravel.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosalacarte.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Galatours S.A.</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/galatours-sa/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galatours-sa/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galatours-sa/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galatours-sa/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:info@fdstravel.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Galápagos Cruising Muran</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/galapagos-cruising/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galapagos-cruising/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galapagos-cruising/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Galápagos Experience</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/galapagos-experience/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galapagos-experience/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galapagos-experience/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:info@fdstravel.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Galamagic</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/galamagic/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galamagic/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/galamagic/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:info@fdstravel.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Geo Reisen Tour Operator - Ecuador</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/geo-reisen-tour/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/geo-reisen-tour/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${info@fdstravel.com}')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Guiding Galapagos Expeditions</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/guiding-galapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/guiding-galapagos/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/guiding-galapagos/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${info@fdstravel.com}')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Jethandling</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/jethandling/1.png')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/jethandling/2.png')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/jethandling/3.png')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${info@fdstravel.com}')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Scuba Iguana</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/scuba-iguana/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/scuba-iguana/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/scuba-iguana/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/scuba-iguana/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${info@fdstravel.com}')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Sea Masters Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/sea-masters/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/sea-masters/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/sea-masters/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/sea-masters/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${info@fdstravel.com}')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Viajes Unigalápagos S.A</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/travel-agencies/viajes-unigalapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/viajes-unigalapagos/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/viajes-unigalapagos/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/travel-agencies/viajes-unigalapagos/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526214}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${info@fdstravel.com}')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagosecuador.com')}>
                      <Image
                          source={require('../../../app/assets/icons/www_gray.png')}
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
                      source={require('../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../app/assets/icons/turtleBW.png')}
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

export default TravelAgencies;
