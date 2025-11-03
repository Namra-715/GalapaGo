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

class Plan extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>

          <Image
              source={require('../../../app/assets/images/Plan.png')}
              style={{width: entireScreenWidth, height: 200}}
          />
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("TopActivities")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../app/assets/icons/topActivities_gray.png')}
                        style={{width: 30*rem, height: 30*rem}}
                    />
                    <Text style={styles.buttonText}>Top Activities</Text>
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
              onPress={() => this.props.navigation.navigate("SantaCruz")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../app/assets/icons/island_gray.png')}
                        style={{width: 27*rem, height: 31*rem}}
                    />
                    <Text style={styles.buttonText}>Santa Cruz Island</Text>
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
              onPress={() => this.props.navigation.navigate("TravelAgencies")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../app/assets/icons/agencies_gray.png')}
                        style={{width: 27*rem, height: 31*rem}}
                    />
                    <Text style={styles.buttonText}>Travel Agencies</Text>
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
              onPress={() => this.props.navigation.navigate("IslandHop")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../app/assets/icons/cruise_gray.png')}
                        style={{width: 27*rem, height: 27*rem}}
                    />
                    <Text style={styles.buttonText}>Want to Island Hop?</Text>
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
export default Plan;
