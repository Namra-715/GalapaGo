import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, SectionList} from 'react-native';
import { any } from 'prop-types';
import { ListItem } from 'native-base';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
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
      paddingLeft: 34,
      paddingTop: 30,
      paddingRight: 34,
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
    },
    sectionHeader: {
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        flexWrap: "wrap",
        paddingTop: 5,
        paddingLeft: 34,
        paddingRight: 10,
        paddingBottom: 5,
        marginBottom: 5,
        marginTop: 30,
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 17*rem,
        height: 44,
        paddingTop: 15,
        paddingLeft: 34,
        paddingRight: 34,
        flexWrap: "wrap",
    },
    lists: {
        marginBottom: 30,
        flexWrap: "wrap",
        flexDirection: 'row'
    }
});

class Customs extends React.Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../app/assets/icons/galap.png')}
                  style={{width: 25*rem, height: 25*rem}}
              />
              <Text style={styles.headerText}>Social Customs</Text>
          </View>
          {/*< Image
          source={require('../../../app/assets/images/headerImage_short.png')}
          style={{width: entireScreenWidth, height: 25*rem}}
          />*/}

            <Text style={styles.regular}>
            Ecuadorians are known to be very hospitable, friendly and helpful.{"\n\n"}

            Ecuadorians are known for their ‘South American laid-backness’. Please be patient and include some waiting time in your travel itinerary. When invited to someone's home,bring small gifts and try not to say negative comments.{"\n\n"}

            Photographing airports, military equipment, and the police is strictly prohibited. Ask for someon'e permission before taking a photo of them. {"\n\n"}

            There are marked smoking areas. Those smoking outside of these areas may be penalized.{"\n\n"}

        </Text>


      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Customs;
