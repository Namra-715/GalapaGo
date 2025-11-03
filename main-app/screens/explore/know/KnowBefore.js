import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
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
        paddingLeft: 34,
        paddingRight: 34,
        lineHeight: 22 * rem
    }
});

class KnowBefore extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Image
            source={require('../../../app/assets/images/Know.png')}
            style={{width: entireScreenWidth, height: 200}}
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Language")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../../app/assets/icons/alphabet_gray.png')}
                    style={{width: 32*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Useful phrases for Ecuador</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Customs")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../../app/assets/icons/galap.png')}
                    style={{width: 29*rem, height: 29*rem}}
                />
                <Text style={styles.buttonText}>Cultural & Social Norms</Text>
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
            onPress={() => this.props.navigation.navigate("Rules")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../../app/assets/icons/rules1_gray.png')}
                    style={{width: 27*rem, height: 31*rem}}
                />
                <Text style={styles.buttonText}>Rules of the National Park</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <Text style={styles.subHeader}>Internet & Connectivity</Text>
        <Text style={styles.bodyText}>Internet connection can be obtained in all places of accommodation / restaurants. The internet in
                  Puerto Ayora is satellite, therefore we do not have a fiber optic connection which can make it
                  slow.</Text>
        <Text style={styles.subHeader}>Have an Emergency?</Text>
        <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("Rules")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../../app/assets/icons/phone.png')}
                    style={{width: 25*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Call 911</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
    </View>
    );
  }
}
export default KnowBefore;
