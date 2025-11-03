import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Image, Dimensions} from 'react-native';
import {SceneView} from "react-navigation";

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

class Fauna extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>

      <View>
        <View style={styles.header}>
            <Image
                source={require('../../../app/assets/icons/fauna.png')}
                style={{width: 34*rem, height: 23*rem}}
            />
            <Text style={styles.headerText}>Fauna</Text>
        </View>
        {/*< Image
        source={require('../../../app/assets/images/headerImage_short.png')}
        style={{width: entireScreenWidth, height: 25*rem}}
      />*/}
            <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>There are 7214 species identified in Galapagos. {"\n\n"}
            It is estimated that up to 86% of the biodiversity described would already be inventoried. 30.8% of the Galapagos species are endemic (native) to the islands.{"\n\n"}
            Vertebrate animals comprise 696 species, 10% of the island's biodiversity. Terrestrial and freshwater invertebrates represent 32% of terrestrial biodiversity. Currently, marine invertebrates represent 31% of marine biodiversity (note: these data are estimates as of 2001 and are in constant variation).{"\n\n"}
            The Galapagos Marine Reserve is the second largest in surface and the only open water in the world. The biomass of its waters is surprisingly rich by the cold water currents that emerge in this sector, without doubt the waters of the archipelago have an interesting marine fauna that remains to be known. {"\n\n"}
            For this reason, the scientific research of the Technical Department of the Galapagos National Park focuses on the study of marine biodiversity. New technology allows us to go down to great depths to observe and collect samples of underwater ecosystems of which we know very little.{"\n\n"}
            Numerous scientific research favors the discovery of the amazing nature of Galapagos. </Text>
            </View>
      </View>
      </ScrollView>
    );
  }
}

export default Fauna;
