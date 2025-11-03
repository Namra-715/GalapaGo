import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar, ImageBackground,StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,} from 'react-native';
import Video from 'react-native-video';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
const image = require('../../app/assets/images/Background.png')
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
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});



class Home extends React.Component {

  // videoBuffer = (isBuffer) =>{
  //
  //
  //   console.log(isBuffer)
  //   //here you could set the isBuffer value to the state and then do something with it
  //   //such as show a loading icon
  // }

  render(){
    return (
      <View style={{backgroundColor: 'history_gray', flex: 1}}>
        <Image
            source={require('../../app/assets/images/Main.png')}
            style={{width: entireScreenWidth, height: 200}}
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("RelevantInformation")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../app/assets/icons/info.jpg')}
                    style={{width: 33*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Galapagos Overview</Text>
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
            onPress={() => this.props.navigation.navigate("Maps")}>
            <View style={styles.buttonLeft}>
                <Image
                      source={require('../../app/assets/icons/Map.png')}
                      style={{width: 31*rem, height: 27*rem}}
                />
                <Text style={styles.buttonText}>Maps</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />
              </View>
              <View style={{borderBottomWidth: 1}}></View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("Overview")}>
            <View style={styles.buttonLeft}>
                <Image
                      source={require('../../app/assets/icons/history_gray.png')}
                      style={{width: 27*rem, height: 28*rem}}
                />
                <Text style={styles.buttonText}>Galapagos Overview</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />
              </View>
              <View style={{borderBottomWidth: 1}}></View>
          </TouchableOpacity> */}
          <Image
              source={require('../../app/assets/images/Ga_withLogo.png')}
              style={{width: entireScreenWidth, height: 355 * rem}}
          />
      </View>
    );
  }
}

export default Home;
