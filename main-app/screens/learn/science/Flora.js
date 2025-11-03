import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Dimensions, Image, SafeAreaView} from 'react-native';

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
        paddingBottom: 40*rem
    },
    subHeader:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 34,
        paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem,
    }
});

class Flora extends React.Component {
    render(){
    return (
        <ScrollView style={styles.container}>
          <View>
              <View style={styles.header}>
                  <Image
                      source={require('../../../app/assets/icons/flora.png')}
                      style={{width: 30*rem, height: 30*rem}}
                  />
                  <Text style={styles.headerText}>Flora</Text>
              </View>
               {/*< Image
            source={require('../../../app/assets/images/headerImage_short.png')}
            style={{width: entireScreenWidth, height: 25*rem}}
          />*/}
              <SafeAreaView style={styles.container}>
                      <View style={styles.bodyContainer}>
                      <Text style={styles.bodyText}>Scientifically, it is known that the Galapagos flora has managed to grow thanks to the winds, the
                          transport of the seeds in the legs and digestive tract of the animals, and through floating rafts that
                          came from the rivers to the sea. It should be clarified that not all seeds were suitable for all types
                          of soils, so they germinated in the different vegetation zones to which they best adapted. Now let's
                          talk about each of these areas to get an idea of the flora that grows in the Galapagos.</Text>
                      </View>
                      <Text style={styles.subHeader}>Coastal Zone</Text>
                      <View style={styles.bodyContainer}>
                      <Text style={styles.bodyText}>The coastal zone is characterized by its high saline level, so the local plants can withstand these
                          hypersaline conditions. The most representative are the Monte Salado, the Red Mangrove and the Morning
                          Glory. </Text>
                      </View>
                      <Text style={styles.subHeader}>Arid Zone</Text>
                      <View style={styles.bodyContainer}>
                      <Text style={styles.bodyText}>In the arid zone we find the three species of cactus on the islands: Opuntia, Candelabra and Lava,
                          which provide food for iguanas and land turtles.</Text>
                      </View>
                      <Text style={styles.subHeader}>Humid Zone</Text>
                      <View style={styles.bodyContainer}>
                      <Text style={styles.bodyText}>In the humid zone we find a microclimate very similar to that of the cloud forests, and that has
                          created great distance with the arid zone. This area has ferns, orchids, moss, lichen, cat's claw and
                          other plants. </Text>
                      </View>
              </SafeAreaView>
      </View>
      </ScrollView>

    );
    }
}

export default Flora;
