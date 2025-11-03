import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Dimensions, Image, SafeAreaView} from 'react-native';

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

class Surfing extends React.Component {
  render(){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
              <View>
                  <View style={styles.header}>
                      <Image
                          source={require('../../../../app/assets/icons/surf.png')}
                          style={{width: 28*rem, height: 31*rem}}
                      />
                      <Text style={styles.headerText}>Surfing</Text>
                  </View>
                  <Image
                      source={require('../../../../app/assets/images/headerImage.png')}
                      style={{width: entireScreenWidth, height: 81*rem}}
                  />
                  <View style={styles.bodyContainer}>
                  <Text style={styles.bodyText}>The Galapagos dive sites are undoubtedly one of the best worldwide. In Santa Cruz there are some professional dive centers with which you can go diving safely. The best places near the bay of Puerto Ayora are Caamaño islet, La Lobería, Punta Estrada or Punta Carrión. From the town about an hour away by boat, you will find an impressive dive site, Rocks Gordón, just east of the Plazas Islands. There you will dive with large schools of hammerhead sharks, stingrays, sea turtles and thousands of fish. North Seymour Island is twenty minutes by boat from the Itabaca Canal. Sharks are one of the main attractions of the place. There are several dive centers in Puerto Ayora. All are managed by internationally recognized professionals (PADI generally), and all use modern equipment. Dive centers can organize trips for a day or even for a week. You can choose to dive around Santa Cruz or visit other islands where diving is allowed (Santa Fe, Floreana, North Seymour, Gordon Rocks, Daphne, Beagle Rock, San Cristóbal, Española, Isabela, Pinzón, Santiago or Marchena) . Please take into consideration the difficult conditions that may occur in the sea (cold water, strong currents, large waves, etc.). It is highly recommended to have an experience of at least an intermediate level (more than 30 dives). You can also organize dives in the San Cristobal and Isabela Islands where agencies for this purpose and specialized dive centers are located. </Text>
                 </View>
              </View>
            </ScrollView>
        </SafeAreaView>
        );
  }
}

export default Surfing;