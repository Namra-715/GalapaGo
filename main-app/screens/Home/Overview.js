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
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        padding: 34,
        lineHeight: 22 * rem,
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

class Overview extends React.Component {

  render(){
    return (
        <ScrollView style={styles.container}>
     <View>
        <View style={styles.header}>
            <Image
                source={require('../../app/assets/icons/aboutUs.png')}
                style={{width: 34*rem, height: 27*rem}}
            />
            <Text style={styles.headerText}>Galapagos Overview</Text>
        </View>
        {/*< Image
        source={require('../../../app/assets/images/headerImage_short.png')}
        style={{width: entireScreenWidth, height: 25*rem}}
      />*/}
        <Text style={styles.bodyText}>•	In the airports of Quito and Guayaquil prior to the check-in with your airline you must:
Step 1: Register with the Galapagos Government Council Office to obtain your Transit Control Card (TCT), which must be kept until you leave the archipelago (maximum 2 months stay). The cost of the TCT is $20 (Twenty United States dollars).
Fill out the Previous Registration Form for the TCT here  (check the correct link)

Step 2: Check your baggage in the Galapagos ABG Biosecurity Control and Regulation Agency room to avoid unintentional introduction of invasive species that threaten the biodiversity of the islands. The same applies to transport between populated islands at the boarding docks of the various populated ports.
        </Text>
    </View>
    </ScrollView>
    );
  }
}
export default Overview;
