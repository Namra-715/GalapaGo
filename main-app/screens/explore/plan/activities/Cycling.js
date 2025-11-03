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

class Cycling extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <Image
                                source={require('../../../../app/assets/icons/bike.png')}
                                style={{width: 35*rem, height: 22*rem}}
                            />
                            <Text style={styles.headerText}>Cycling</Text>
                        </View>
                        <Image
                            source={require('../../../../app/assets/images/headerImage.png')}
                            style={{width: entireScreenWidth, height: 81*rem}}
                        />
                        <Text style={styles.subHeader}>Santa Cruz Island</Text>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.bodyText}>The only paved road begins in Puerto Ayora and crosses the island to the Itabaca Canal located in front of Baltra Island, it is approximately 41 km. The nearest town is Bellavista located 7 km from Puerto Ayora, from there 13 km away Find Santa Rosa.
                                {"\n"}{"\n"}There is a dirt road behind the Tomás de Berlanga school 4.5 km from Puerto Ayora, which will direct you to Bellavista. From there you continue to the right and you will find two roads, one for the population of El Camote and one for El Cascajo; If you continue along this path you will end up in the parking lot of Playa del Garrapatero. There are two dirt trails along the Santa Rosa sector, the first one is located to the left of the Santa Rosa Colosseum, this will guide you through farms that giant torgugas frequent and are easy to find.
                                {"\n"}{"\n"}The second path is continuing straight through the entrance to Santa Rosa, and will lead you to the town of Salasaca, where you can visit the tourist farms that have lava tunnels and turtles in their natural state. Consider renting a taxi to get to the furthest place and then get off by bike.</Text>
                        </View>
                        <Text style={styles.subHeader}>San Cristobal Island</Text>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.bodyText}>In San Cristóbal, cycling as a tourist activity takes place in the upper part, choose between renting a bicycle or going on a guided tour, follow the signs located along the road. On the route that leads to El Progreso, the road is paved, henceforth the road is weighed until we reach the site called El Junco. Another option is already in Progress take "Y" (left lane), to school. Continue to the top of Cerro Soledad where there is a viewpoint from which you can observe the landscapes of San Cristóbal.</Text>
                        </View>
                        <Text style={styles.subHeader}>Isabela Island</Text>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.bodyText}>In Isabela, renting a bicycle is a good way to get to know the upper part - a little known area of Galapagos. Going through the facilities of the original settlers of the island and visiting farms gives the visitor the opportunity to learn about the history and culture of the Isabeleños. You can also visit the Wetlands and the Wall of Tears by bicycle. The low vehicular traffic on the island ensures a calm and peaceful day.</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Cycling;