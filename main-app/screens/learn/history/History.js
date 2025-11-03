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

class History extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>
      <View>
        <Image
            source={require('../../../app/assets/images/History.png')}
            style={{width: entireScreenWidth, height: 200}}
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Timeline")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../../app/assets/icons/timeline_gray.png')}
                    style={{width: 21*rem, height: 24*rem}}
                />
                <Text style={styles.buttonText}>Timeline</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("People")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../../app/assets/icons/people_gray.png')}
                    style={{width: 27*rem, height: 27*rem}}
                />
                <Text style={styles.buttonText}>People</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <Text style={styles.subHeader}> Natural History </Text>
            <Text style={styles.bodyText}>The Galapagos Islands constitute one of the most complex, diverse and unique oceanic archipelagos in the world, which still maintains its ecosystems and biodiversity without major alterations. Its location and geographical isolation, its biological richness and the evolutionary processes reflected in its unique fauna and flora, have earned them worldwide recognition.{"\n\n"}

The Galapagos Islands are located on the equatorial line of the Pacific Ocean, 1000 km west of the Continental Ecuador and consists of 13 major islands, 6 minor islands and more than 107 islets and rocks. The islands maintain several habitats with their own characteristics, which are shelters for food and reproduction of different land and marine animals.{"\n\n"}

Galapagos is a geologically active area, where formations such as the Alcedo volcano or the Sierra Negra are some of the most interesting natural attractions of the archipelago. Sierra Negra has the second largest boiler in the world. The Cerro Azul Volcano recorded a last eruption in 1998. The total area of ​​the islands covers 7,882 km2 spread over approximately 45,000 km2 of sea.{"\n\n"}

The marine floor of the eastern South Pacific has an extraordinary topography: mountains, summits, plateaus and valleys that house a wide variety of marine species; The islands of the archipelago are the surface tips of huge volcanoes.
{"\n\n"}

Therefore, just enjoy it!

            </Text>
    </View>
    </ScrollView>
    );
  }
}
export default History;
