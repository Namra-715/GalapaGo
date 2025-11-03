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
        paddingVertical: 36*rem,
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

class NewSpecies extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>
        <View>
            <View style={styles.header}>
                <Image
                    source={require('../../../app/assets/icons/newSpecies.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.headerText}>New Species</Text>
            </View>
            {/*< Image
            source={require('../../../app/assets/images/headerImage_short.png')}
            style={{width: entireScreenWidth, height: 25*rem}}
          />*/}
            <SafeAreaView style={styles.container}>
                  <View style={styles.bodyContainer}>
                      <Text style={styles.bodyText}>We have made a small tour of the flora and fauna of the Galapagos, but that does not mean that
                        there are no more species or that all have already been discovered.{"\n\n"}

                        In fact, since 2009 they have
                        been discovering more animal and plant species. Among the ten species discovered, we find two new
                        species of fish: Scorpaenodes sp and Gobiomuros sp.{"\n\n"}

                        In the Wolf Volcano, what scientists describe as a "living fossil" was discovered: the pink iguana.{"\n\n"}

                        Under the sea, in 2012, a new species of cat shark was discovered: Bythaelurus giddingsi, barely thirty centimeters in length. On the other hand,
                        three species of corals were found, one of them was believed extinct, but survived the El Niño
                        phenomenon. {"\n\n"}

                        The lichens added to their family ten new species and the finches have a new companion,
                        which despite being discovered twenty years ago, in 2009 it was registered as a new species. {"\n\n"}

                        In 2018, scientists from Brazil and Ecuador found three new species of snakes. {"\n\n"}

                        These findings and the species already known before, show us that the Galapagos Islands are a living laboratory and that, although
                        their species have evolved and developed in inhospitable environments, their ecosystems are fragile.</Text>
                  </View>
            </SafeAreaView>
      </View>
      </ScrollView>
    );
  }
}

export default NewSpecies;
