import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

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
      paddingLeft: 30,
      paddingTop: 34,
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        padding: 34,
        lineHeight: 22 * rem,
    }
});

class People extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
            <Image
                source={require('../../../app/assets/icons/people.png')}
                style={{width: 29*rem, height: 29*rem}}
            />
            <Text style={styles.headerText}>People</Text>
        </View>
        {/*< Image
        source={require('../../../app/assets/images/headerImage_short.png')}
        style={{width: entireScreenWidth, height: 25*rem}}
        />*/}
            <Text style={styles.bodyText}>The history of the colonization of the Galapagos goes back to the middle of the 17th century,
                with the arrival of the first pirates who used the islands as a refuge; subsequently the Norwegians
                settled on the islands promoting human settlements. {"\n\n"}
                Tourism, artisanal fishing, agriculture and handicrafts are today the main sources of life for the Galapagos populations. Around 30,000 people inhabit the set of the five populated islands: San Cristóbal, Santa Cruz, Isabela, Floreana and Baltra.{"\n\n"}
                Tourism is the basis of the local economy and its main source of income. The archipelago currently receives
                175,000 visitors a year. The second economic activity is artisanal fishing, the fishing sector is the most
                involved in the management of the Marine Reserve. Artisanal fishermen represent an important group in the
                economy. In recent years, the artisanal ability of the island's inhabitants has developed significantly.{"\n\n"}
                The use of recycled materials, t-shirt painting and wood carving is unique. Agricultural activities in the
                islands are not very technical, natural products grown organically are brought from the humid areas of the
                upper parts of the archipelago to be consumed in the ports.{"\n\n"}
                The music in Galapagos stands out for having happy rhythms with lyrics that talk about the daily life of the inhabitants of Galapagos.</Text>
    </View>
    </ScrollView>
    );
  }
}
export default People;
