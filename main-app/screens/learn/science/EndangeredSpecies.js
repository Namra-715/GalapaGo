import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#fff',
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
        paddingBottom: 16,
        flexWrap: "wrap",
        justifyContent: 'center'
    },
    regular:{
      fontSize: 17*rem,
      color: '#616161',
      padding: 30,
      lineHeight: 22 * rem
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 34,
      alignItems: 'stretch'
    },
    wrapper: {
      height: 300*rem,
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


class EndangeredSpecies extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>

          <View>
              <View style={styles.header}>
                  <Image
                      source={require('../../../app/assets/icons/endangered.png')}
                      style={{width: 28*rem, height: 25*rem}}
                  />
                  <Text style={styles.headerText}>Endangered Species</Text>
              </View>
              {/*< Image
              source={require('../../../app/assets/images/headerImage_short.png')}
              style={{width: entireScreenWidth, height: 25*rem}}
            />*/}
            <Text style={styles.regular}>In 2018, a list was created with the endangered species, among which we find: </Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Penguin</Text>
                      <Image
                          source={require('../../../app/assets/images/endangered/penguin.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Land Iguana</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/landIguana.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Sea Cucumber</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/seaCucumber.png')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Giant Tortoise</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/giantTortoise.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Albatross</Text>
                      <Image
                          source={require('../../../app/assets/images/endangered/albatross.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Endemic Rats</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/rat.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Mangrove Finch</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/mangroveFinch.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Hawk</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/hawk.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Sea Turtle</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/turtle.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Text style={styles.regularBold}>Reef Shark</Text>
                    <Image
                        source={require('../../../app/assets/images/endangered/reefSharks.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
                <Text style={styles.regular}>The causes of this phenomenon are diverse, ranging from illegal hunting, the introduction of alien
                species to the islands, the unconsciousness of certain tourists and inhabitants of the area, to climate
                change that generates harmful variations in the levels of oxygen and other gases at the bottom of
                the sea.</Text>
      </View>
      </ScrollView>

    );
  }
}

export default EndangeredSpecies;
