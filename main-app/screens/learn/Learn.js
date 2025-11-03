import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,} from 'react-native';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    header: {
        fontSize: 34*rem,
        fontWeight: "600",
        paddingVertical: 16,
        paddingLeft: 34,
        paddingRight: 59
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    lastButtonContainer:{
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
        alignItems: 'center'
    },
    chevron:{
        width: 11*rem,
        height: 18*rem
    }
});


class Learn extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Image
            source={require('../../app/assets/images/Learn.png')}
            style={{width: entireScreenWidth, height: 200}}
        />

        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("AboutUs")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../app/assets/icons/aboutUs_gray.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>About Us</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("ScienceAndSus")}>
            <View style={styles.buttonLeft}>
                <Image
                      source={require('../../app/assets/icons/scienceAndSus_gray.png')}
                      style={{width: 31*rem, height: 27*rem}}
                />
                <Text style={styles.buttonText}>Science & Sustainability</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />
              </View>
              <View style={{borderBottomWidth: 1}}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("History")}>
            <View style={styles.buttonLeft}>
                <Image
                      source={require('../../app/assets/icons/history_gray.png')}
                      style={{width: 27*rem, height: 28*rem}}
                />
                <Text style={styles.buttonText}>History</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />
              </View>
              <View style={{borderBottomWidth: 1}}></View>

          </TouchableOpacity>
          <Image
              source={require('../../app/assets/images/g1.jpg')}
              style={{width: entireScreenWidth, height: 355 * rem}}
          />
      </View>
    );
  }
}

export default Learn;
