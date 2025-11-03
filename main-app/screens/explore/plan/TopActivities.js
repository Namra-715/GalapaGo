import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 360;

const styles = StyleSheet.create ({
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
    subHeader:{
        fontWeight: "600",
        fontSize: 17*rem,
        paddingLeft: 34,
        paddingTop: 23,
        paddingBottom: 9,
        borderBottomWidth: 2,
        borderColor: '#27C4CC'
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    topButtonContainer:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    buttonContainer:{
        flexDirection: 'row',
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

class TopActivities extends React.Component {
  render(){
    return (
            <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../app/assets/icons/topActivities.png')}
                  style={{width: 35*rem, height: 35 *rem}}
              />
              <Text style={styles.headerText}>Top Activities</Text>
          </View>
          {/*< Image
          source={require('../../../app/assets/images/headerImage_short.png')}
          style={{width: entireScreenWidth, height: 25*rem}}
          />*/}
          <ScrollView>
              <View style={{borderBottomWidth: 2, borderColor: '#27C4CC'}}>
              <Text style={styles.subHeader}>Land</Text>
              </View>
              <TouchableOpacity
                  style={styles.topButtonContainer}
                  onPress={() => this.props.navigation.navigate("Cycling")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/bike_gray.png')}
                          style={{width: 27*rem, height: 16*rem}}
                      />
                      <Text style={styles.buttonText}>Cycling</Text>
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
                  onPress={() => this.props.navigation.navigate("Camping")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/camp_gray.png')}
                          style={{width: 23*rem, height: 23*rem}}
                      />
                      <Text style={styles.buttonText}>Camping</Text>
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
                  onPress={() => this.props.navigation.navigate("Hiking")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/hiking_gray.png')}
                          style={{width: 20*rem, height: 28*rem}}
                      />
                      <Text style={styles.buttonText}>Hiking</Text>
                  </View>
                  <View style={styles.buttonRight}>
                      <Image
                          source={require('../../../app/assets/icons/chevron.png')}
                          style={styles.chevron}
                      />
                  </View>
              </TouchableOpacity>
              <View style={{borderBottomWidth: 2, borderColor: '#27C4CC'}}>
                  <Text style={styles.subHeader}>Sea</Text>
              </View>
              <TouchableOpacity
                  style={styles.topButtonContainer}
                  onPress={() => this.props.navigation.navigate("Cruise")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/cruise_gray.png')}
                          style={{width: 23*rem, height: 23*rem}}
                      />
                      <Text style={styles.buttonText}>Cruise</Text>
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
                  onPress={() => this.props.navigation.navigate("Diving")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/diving_gray.png')}
                          style={{width: 27*rem, height: 22*rem}}
                      />
                      <Text style={styles.buttonText}>Diving</Text>
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
                  onPress={() => this.props.navigation.navigate("Surfing")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/surf_gray.png')}
                          style={{width: 23*rem, height: 27*rem}}
                      />
                      <Text style={styles.buttonText}>Surfing</Text>
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
                  onPress={() => this.props.navigation.navigate("Kayaking")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/kayak_gray.png')}
                          style={{width: 23*rem, height: 23*rem}}
                      />
                      <Text style={styles.buttonText}>Kayaking</Text>
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
                  onPress={() => this.props.navigation.navigate("Fishing")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/fish_gray.png')}
                          style={{width: 27*rem, height: 15*rem}}
                      />
                      <Text style={styles.buttonText}>Fishing</Text>
                  </View>
                  <View style={styles.buttonRight}>
                      <Image
                          source={require('../../../app/assets/icons/chevron.png')}
                          style={styles.chevron}
                      />
                  </View>
              </TouchableOpacity>
          </ScrollView>
      </View>
    );
  }
}

export default TopActivities;
