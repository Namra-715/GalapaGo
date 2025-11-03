import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Dimensions, SafeAreaView, Image, ImageBackground} from 'react-native';

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
        paddingBottom: 52*rem
    },
    subHeader:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingTop: 34,
        paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem,
        paddingTop: 16*rem
    },
    imageBackground:{
        backgroundColor: 'white',
        paddingVertical: 36*rem,
        paddingHorizontal: 22*rem
    }
});


class Hiking extends React.Component {
  render(){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
              <View style={styles.container}>
                  <View style={styles.header}>
                      <Image
                          source={require('../../../../app/assets/icons/diving.png')}
                          style={{width: 32*rem, height: 27*rem}}
                      />
                      <Text style={styles.headerText}>Diving</Text>
                  </View>
                  <Image
                      source={require('../../../../app/assets/images/headerImage.png')}
                      style={{width: entireScreenWidth, height: 367*rem}}
                      />
                  <View style={styles.bodyContainer}>
                      <Text style={styles.bodyText}>Diving in Galapagos for many is the dream of his life, so these islands offer you the possibility, through a navigable diving cruise, to marvel at the underwater world, visiting the Northern Islands such as Darwin and Wolf where you can appreciate an impressive biodiversity that goes from the shy Blenios de Lapa or Percebe to the giant of the seas the whale shark.</Text>

                      <Text style={styles.subHeader}>When Should I Dive?</Text>
                      <Text style={styles.bodyText}>From June to November Water Temperature 60 - 75F / 16 - 24C Mostly whale sharks From December to May Water Temperature 70 - 86F / 21 - 30C Long schools of hammerhead sharks, singrays, and eagle rays </Text>
                      <Text style={styles.subHeader}>Daily Diving Tours</Text>
                      <Text style={styles.bodyText}>The Galapagos dive sites are undoubtedly one of the best worldwide. In Santa Cruz there are some professional dive centers with which you can go diving safely. The best places near the bay of Puerto Ayora are Caamaño islet, La Lobería, Punta Estrada or Punta Carrión. From the town about an hour away by boat, you will find an impressive dive site, Rocks Gordón, just east of the Plazas Islands. There you will dive with large schools of hammerhead sharks, stingrays, sea turtles and thousands of fish. North Seymour Island is twenty minutes by boat from the Itabaca Canal. Sharks are one of the main attractions of the place. There are several dive centers in Puerto Ayora. All are managed by internationally recognized professionals (PADI generally), and all use modern equipment. Dive centers can organize trips for a day or even for a week. You can choose to dive around Santa Cruz or visit other islands where diving is allowed (Santa Fe, Floreana, North Seymour, Gordon Rocks, Daphne, Beagle Rock, San Cristóbal, Española, Isabela, Pinzón, Santiago or Marchena) . Please take into consideration the difficult conditions that may occur in the sea (cold water, strong currents, large waves, etc.). It is highly recommended to have an experience of at least an intermediate level (more than 30 dives). You can also organize dives in the San Cristobal and Isabela Islands where agencies for this purpose and specialized dive centers are located. </Text>
                  </View>
              </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}

export default Hiking;