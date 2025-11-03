import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView,} from 'react-native';

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
    }
});

class Hiking extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <Image
                                source={require('../../../../app/assets/icons/hiking.png')}
                                style={{width: 23*rem, height: 31*rem}}
                            />
                            <Text style={styles.headerText}>Hiking</Text>
                        </View>
                        <Image
                            source={require('../../../../app/assets/images/headerImage.png')}
                            style={{width: entireScreenWidth, height: 81*rem}}
                        />
                        <ScrollView>
                            <View style={styles.bodyContainer}>
                                <Text style={styles.subHeader}>Santa Cruz Island</Text>

                                <Text style={styles.bodyText}>On Santa Cruz Island there are some good places for hiking such as the trails to Las Grietas, Tortuga Bay or Playa del Garrapatero in the coastal area. In the upper part there are good options to choose from. A trail starts from the town of Bellavista (7 Km. From Puerto Ayora) that will guide you through farm areas, border of the Galapagos National Park, Miconia area and leads you to the highest hills of the island: Media Luna, Puntudo and Cerro Crocker. The distance from Bellavista to Media Luna is 5 km and from there to Puntudo and Crocker Hill about 3 km. If you wish, you can make the journey by bicycle or arrange with a taxi driver to take you most of the way, from that so you will only walk a kilometer from the parking lot to the Half Moon booth. Here you can find birds like Darwin and pachay finches, surrounded by endemic flora of the island that is not found on another island. Try not to disturb the nests of the Galapagos petrels or glued leg, a nocturnal seabird that only nests in this place. The hike is recommended only when the weather is good, during the rainy season the trails are very wet and slippery.
                                </Text>

                                <Text style={styles.subHeader}>Isabela Island</Text>

                                <Text style={styles.bodyText}>In Isabela there are several paths for trekking, starting with the beautiful 3 km long white sand beach. There are roads through Puerto Villamil, the Wetlands and in the upper part.
                                </Text>

                                <Text style={styles.subHeader}>San Cristobal</Text>

                                <Text style={styles.bodyText}>San Cristóbal also has beautiful places; Thus we have La Lobería and Mann Beach, Cerro Tijeretas and the Interpretation Center. In the upper part you can visit La Galapaguera of Cerro Colorado and combine this excursion with a visit to the viewpoint of Cerro Colorado and enjoy the beach of Puerto Chino. Seabirds, marine iguanas, giant turtles in semi-natural conditions and the rare Calandrinia, a Galapagos endemic plant restricted to Zero Colorado, are some of the many attractions you will find.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Hiking;