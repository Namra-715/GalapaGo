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
        fontSize: 34*rem,
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
    }
});

class SantaCruz extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
                <Image
                    source={require('../../../../app/assets/icons/island.png')}
                    style={{width: 28*rem, height: 31*rem}}
                />
              <Text style={styles.headerText}>Santa Cruz</Text>
          </View>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("SantaCruzFood")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../../app/assets/icons/food_gray.png')}
                        style={{width: 24*rem, height: 30*rem}}
                    />                  
                    <Text style={styles.buttonText}>Food &amp; Drinks</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />                
                </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.lastButtonContainer}
              onPress={() => this.props.navigation.navigate("SantaCruzHotels")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../../app/assets/icons/bed_gray.png')}
                        style={{width: 29*rem, height: 30*rem}}
                    />                   
                    <Text style={styles.buttonText}>Hotels</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />                   
                </View>
          </TouchableOpacity>
      </View>
    );
  }
}
export default SantaCruz;