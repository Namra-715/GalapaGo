import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 360;

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#fff',
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

class ScienceAndSus extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>
          <View>
              <Image
              source={require('../../../app/assets/images/SS.png')}
              style={{width: entireScreenWidth, height: 200}}
            />
              <View style={{borderBottomWidth: 2, borderColor: '#27C4CC'}}>
                  <Text style={styles.subHeader}>Flora & Fauna</Text>
              </View>
              <TouchableOpacity
              style={styles.topButtonContainer}
              onPress={() => this.props.navigation.navigate("Flora")}>
              <View style={styles.buttonLeft}>
                  <Image
                      source={require('../../../app/assets/icons/flora_gray.png')}
                      style={{width: 24*rem, height: 23*rem}}
                  />
                  <Text style={styles.buttonText}>Flora</Text>
              </View>
              <View style={styles.buttonRight}>
                  <Image
                      source={require('../../../app/assets/icons/chevron.png')}
                      style={styles.chevron}
                  />
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.topButtonContainer}
              onPress={() => this.props.navigation.navigate("Fauna")}>
              <View style={styles.buttonLeft}>
                  <Image
                      source={require('../../../app/assets/icons/fauna_gray.png')}
                      style={{width: 27*rem, height: 18*rem}}
                  />
                  <Text style={styles.buttonText}>Fauna</Text>
              </View>
              <View style={styles.buttonRight}>
                  <Image
                      source={require('../../../app/assets/icons/chevron.png')}
                      style={styles.chevron}
                  />
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.topButtonContainer}
              onPress={() => this.props.navigation.navigate("Protect")}>
              <View style={styles.buttonLeft}>
                  <Image
                      source={require('../../../app/assets/icons/protect_gray.png')}
                      style={{width: 28*rem, height: 23*rem}}
                  />
                  <Text style={styles.buttonText}>How to Protect Them</Text>
              </View>
              <View style={styles.buttonRight}>
                  <Image
                      source={require('../../../app/assets/icons/chevron.png')}
                      style={styles.chevron}
                  />
              </View>
          </TouchableOpacity>
              <View style={{borderBottomWidth: 2, borderColor: '#27C4CC'}}>
                  <Text style={styles.subHeader}>Species</Text>
              </View>
              <TouchableOpacity
                  style={styles.topButtonContainer}
                  onPress={() => this.props.navigation.navigate("EndangeredSpecies")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/endangered_gray.png')}
                          style={{width: 27*rem, height: 24*rem}}
                      />
                      <Text style={styles.buttonText}>Endangered Species</Text>
                  </View>
                  <View style={styles.buttonRight}>
                      <Image
                          source={require('../../../app/assets/icons/chevron.png')}
                          style={styles.chevron}
                      />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.topButtonContainer}
                  onPress={() => this.props.navigation.navigate("NewSpecies")}>
                  <View style={styles.buttonLeft}>
                      <Image
                          source={require('../../../app/assets/icons/newSpecies_gray.png')}
                          style={{width: 29*rem, height: 24*rem}}
                      />
                      <Text style={styles.buttonText}>New Species</Text>
                  </View>
                  <View style={styles.buttonRight}>
                      <Image
                          source={require('../../../app/assets/icons/chevron.png')}
                          style={styles.chevron}
                      />
                  </View>
              </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

export default ScienceAndSus;
