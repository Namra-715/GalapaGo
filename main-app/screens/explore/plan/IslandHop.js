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

class IslandHop extends React.Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../app/assets/icons/cruise.png')}
                  style={{width: 30*rem, height: 31*rem}}
              />
              <Text style={styles.headerText}>Island Hop</Text>
          </View>
          <Image
              source={require('../../../app/assets/images/headerImage_short.png')}
              style={{width: entireScreenWidth, height: 25*rem}}
          />
      
              <Text style={styles.regularBold}>Yate Santa Fe III</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/yate-santa-fe/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/yate-santa-fe/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/yate-santa-fe/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/yate-santa-fe/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526419}')}>
                  <Image
                      source={require('../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
              </TouchableOpacity>
            <TouchableOpacity
              style = {{flexDirection: "row"}}
              onPress={() => Linking.openURL('mailto:ventas@santafegalapagos.com.ec')}>
              <Image
                  source={require('../../../app/assets/icons/email.png')}
                  style={styles.infoEmail}
              />
              <Text style={styles.infoText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{flexDirection: "row"}}
              onPress={() => Linking.openURL('https:yacht.santafegalapagos.com.ec')}>
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


              <Text style={styles.regularBold}>M/C Xploration</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/mc-xploration/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mc-xploration/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mc-xploration/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mc-xploration/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526356}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:kmartinez@oagalapagos.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.oceanadventures.com.ec')}>
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


              <Text style={styles.regularBold}>M/N Celebity Xpedition</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/mn-celebrity-xpedition/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-celebrity-xpedition/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-celebrity-xpedition/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-celebrity-xpedition/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526356}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:jceli@oagalapagos.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.oceanadventures.com.ec')}>
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


              <Text style={styles.regularBold}>M/N Celebrity Flora</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/mn-celebrity-flora/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-celebrity-flora/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-celebrity-flora/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-celebrity-flora/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59323809680}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:haguirre@xpedition.com.ec')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.celebritycruises.com')}>
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


              <Text style={styles.regularBold}>M/N Endeavour</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/mn-endeavour/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-endeavour/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-endeavour/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-endeavour/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526159}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>M/N Isabela II</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/mn-isabela/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-isabela/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-isabela/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-isabela/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526157}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>M/N National Geographic Islander</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/mn-national-geographic/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-national-geographic/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mn-national-geographic/3.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>M/V Galápagos Legend</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/mv-galapagos-legend/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/mv-galapagos-legend/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Albatros</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-albatros/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-albatros/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-albatros/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-albatros/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Beluga</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-beluga/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-beluga/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-beluga/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-beluga/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Infinity</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-infinity/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-infinity/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-infinity/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-infinity/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Anahi</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-anahi/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-anahi/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-anahi/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-anahi/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Cachalote</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-cachalote/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-cachalote/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-cachalote/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-cachalote/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Coral I</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-coral-i/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-coral-i/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Coral II</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-coral-ii/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-coral-ii/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Cormorant</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-cormorant/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-cormorant/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-cormorant/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-cormorant/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Daphne</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-daphne/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-daphne/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-daphne/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-daphne/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Jesús Del Gran Poder</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-jesus-del-gran-poder/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-jesus-del-gran-poder/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-jesus-del-gran-poder/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-jesus-del-gran-poder/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Nemo II</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-nemo-ii/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-nemo-ii/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-nemo-ii/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-nemo-ii/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/Reina Silvia</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-reina-silvia/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-reina-silvia/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-reina-silvia/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-reina-silvia/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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


              <Text style={styles.regularBold}>Y/San Jacinto</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../app/assets/images/transport/y-san-jacinto/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-san-jacinto/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-san-jacinto/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../app/assets/images/transport/y-san-jacinto/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59322986570}')}>
                      <Image
                          source={require('../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ebrito@metropolitan-touring.com')}>
                      <Image
                          source={require('../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.ecuadorable.com')}>
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

export default IslandHop;