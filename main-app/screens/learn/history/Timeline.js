import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

//get scaling factors
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
        fontWeight: "600"
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
    subHeader:{
      fontWeight: '600',
      color: '#000000',
      fontSize: 17*rem,
      paddingLeft: 34,
      paddingTop: 16,
      paddingBottom: 16
    },
    subHeaderBlue:{
      fontWeight: '600',
      color: '#0C7A80',
      fontSize: 30*rem,
      paddingLeft: 34,
      paddingTop: 25,
      paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem,
        paddingLeft: 34,
        paddingRight: 34,
        paddingBottom: 16
    },
    lastBodyText:{
      fontSize: 17*rem,
      color: '#616161',
      lineHeight: 22 * rem,
      paddingLeft: 34,
      paddingRight: 34,
      paddingBottom: 34
  },
    dropHeader: {
        backgroundColor: 'rgba(39, 196, 204, 0.1)',
        height: 50*rem,
    },
    dropHeaderText: {
        fontSize: 17*rem,
        paddingLeft: 16,
        fontWeight: 'bold'
    },
    dropBodyText: {
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem,
        paddingLeft: 16
    }
});

class Timeline extends React.Component {

  render(){
    return (
        <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
            <Image
                source={require('../../../app/assets/icons/timeline.png')}
                style={{width: 24*rem, height: 27*rem}}
            />
            <Text style={styles.headerText}>Timeline</Text>
        </View>
        {/*< Image
        source={require('../../../app/assets/images/headerImage_short.png')}
        style={{width: entireScreenWidth, height: 25*rem}}
        />*/}
            <Text style={styles.subHeaderBlue}>1535</Text>
            <Text style={styles.bodyText}>Fray Tomás de Berlanga discovers the Galapagos Islands.</Text>
            <Text style={styles.subHeaderBlue}>1832</Text>
            <Text style={styles.bodyText}>The Republic of Ecuador, takes official possession of Galapagos.</Text>
            <Text style={styles.bodyText}>The boat “H.M.S. BEAGLE ”arrives in Galapagos after an exploration tour around the world.
                On board, was the young naturalist Charles Darwin who within the islands would deduce his revolutionary
                Theory of the Evolution of Species, published in November 1859.</Text>
            <Text style={styles.subHeaderBlue}>1934</Text>
            <Text style={styles.bodyText}>The first laws of protection of the islands are promulgated.</Text>
            <Text style={styles.subHeaderBlue}>1959</Text>
            <Text style={styles.bodyText}>The Galapagos Islands are declared National Park.</Text>
            <Text style={styles.subHeaderBlue}>1968</Text>
            <Text style={styles.bodyText}>For the protection of the biodiversity of the islands, the Galapagos National Park Service is
                created. The Galapagos Islands are part of the National System of Protected Areas of Ecuador due to the
                Forestry and Wildlife Conservation Law, promulgated in 1981. Of the 7,882 km2 of the land area of
                the archipelago, 97% constitutes the Galapagos National Park and the remaining 3%
                is destined to human settlements.</Text>
            <Text style={styles.subHeaderBlue}>1979</Text>
            <Text style={styles.bodyText}>UNESCO declared the Galapagos Islands a World Heritage Site.</Text>
            <Text style={styles.subHeaderBlue}>1985</Text>
            <Text style={styles.bodyText}>UNESCO, declared the Biosphere Reserve to the Galapagos Islands.</Text>
            <Text style={styles.subHeaderBlue}>1986</Text>
            <Text style={styles.bodyText}>The Government of Ecuador creates the Galapagos Marine Resources Reserve.</Text>
            <Text style={styles.subHeaderBlue}>1990</Text>
            <Text style={styles.bodyText}>The Archipelago is declared a Sanctuary of Whales.</Text>
            <Text style={styles.subHeaderBlue}>1998</Text>
            <Text style={styles.lastBodyText}>The “Law of Special Regime for the Conservation and Sustainable Development of the Province of Galapagos” is approved. The marine area, declared Galapagos Marine Reserve in 1998, covers an area around 133,000 km2 and includes all the interior waters of the archipelago and all those contained in 40 nautical miles, measured from the baseline of the archipelago. 2001. UNESCO includes the Galapagos Marine Reserve in the list of Natural Heritage of Humanity.</Text>
    </View>
    </ScrollView>
    );
  }
}
export default Timeline;
