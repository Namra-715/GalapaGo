import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Dimensions, SafeAreaView, Image} from 'react-native';

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
        paddingVertical: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 34*rem,
        fontWeight: '600'
    },
    bodyContainer:{
        paddingHorizontal: 33*rem,
        paddingBottom: 52*rem,
        paddingTop: 28*rem
    },
    subHeader:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 34,
        paddingTop: 16,
        paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem
    }
});


class Kayaking extends React.Component {
  render(){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
              <View>
                  <View style={styles.header}>
                      <Image
                          source={require('../../../../app/assets/icons/kayak.png')}
                          style={{width: 28*rem, height: 28*rem}}
                      />
                      <Text style={styles.headerText}>Kayaking</Text>
                  </View>
                  <Image
                      source={require('../../../../app/assets/images/headerImage.png')}
                      style={{width: entireScreenWidth, height: 81*rem}}
                  />
                  <View style={styles.bodyContainer}>
                      <Text style={styles.bodyText}>Kayaking, windsurfing and surfing are all activities allowed within the limits of the Galapagos Marine Reserve. One of the ways to be in greater contact with the tranquility of nature is to practice kayaking. Santa Cruz has fabulous places to do this activity. From the Itabaca Canal on the north side of the island, you can go on an adventure, watching sea turtles, blue-footed boobies, seagulls and pelicans. Also make trips from Puerto Ayora to Punta Estrada. A small beach easily affordable at high tide. Then you can paddle to the Tintoreras Canal and the Canal del Amor, where wildlife and fantastic landscapes await you. In Puerto Ayora there are some Travel Agencies that offer tours, with guide included, to different places. In Isabela there is also a perfect environment for kayaking. You can rent kayak and stroll along the sea to the sites of visit Las Tintoreras and Concha de Perla. Rowing through the coastal area of ​​Isabela Island offers visitors greater contact with nature where you can see whitefin sharks, sea lions and various bird species.</Text>
                  </View>
              </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}

export default Kayaking;