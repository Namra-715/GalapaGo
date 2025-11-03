import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Unhandled promise rejection']);
console.warn = () => {};

import {
    StyleSheet,
    Button,
    Text,
    View,
    AsyncStorage,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView, Linking
} from 'react-native';
import OpenMap from "react-native-open-map";

const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    hidden:{
        display: "none"
    },
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
    },
    regularBold:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 30,
        paddingTop: 16,
        paddingBottom: 16,
        flexWrap: "wrap"
    },
    numberRow:{
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: "center",
        flexWrap: "wrap"
    },
    lastRow:{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 50,
        justifyContent: "center",
        flexWrap: "wrap"
    },
    infoPhone: {
        width: 20*rem,
        height: 18*rem,
    },
    infoEmail: {
        width: 21*rem,
        height: 16*rem,
    },
    infoAddress: {
        width: 18*rem,
        height: 21*rem,
    },
    infoWeb: {
        width: 20*rem,
        height: 20*rem,
    },
    subHeader:{
        fontWeight: "700",
        fontSize: 20*rem,
        paddingLeft: 15,
        paddingTop: 23,
        paddingBottom: 9,
        borderBottomWidth: 2,
        borderColor: '#27C4CC'
    },
    infoText: {
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 20*rem,
        marginLeft: 10*rem,
        marginRight: 20*rem,
    },
    entryBox:{
        paddingLeft: 15,
        paddingVertical: 30*rem
    },
    slideImage: {
        alignItems: "center",
        height: 250*rem,
        width: Dimensions.get('window').width,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
    }
});


class Favorites extends React.Component {
    constructor(props){
        super(props);
        this.State = {
            Food: null,
            Hotel: null,
            Time: new Date().toLocaleString()
        }
    }

    UNSAFE_componentWillMount(){
        setInterval(function(){
            this.setState({
                Time: new Date().toLocaleString()
            })
        }.bind(this), 300);
    }

    async removeFavorites(type, key){
        let new_entries;
        let entries =  await AsyncStorage.getItem(type);
        let ok = await AsyncStorage.removeItem(type);

        if (entries !== null) {
            new_entries = JSON.parse(entries);
            delete new_entries[key];
        }
        if (new_entries === {}){
            await AsyncStorage.removeItem(type);
            console.log("null reached!!")
        }
        else {
            await AsyncStorage.setItem(type, JSON.stringify(new_entries));
        }
    };
     async GetFavorites(){
            let valueOfFood = await AsyncStorage.getItem('Food');
            let valueOfHotel =  await AsyncStorage.getItem('Hotel');
            if (valueOfFood !== null && Object.keys(valueOfFood).length !== 2) {
                this.State.Food = JSON.parse(valueOfFood);
            }
            else{
                this.State.Food = null;
            }
            console.log(Object.keys(valueOfFood).length);
            console.log(valueOfFood);
             if (valueOfHotel !== null && Object.keys(valueOfHotel).length !== 2) {
                 this.State.Hotel = JSON.parse(valueOfHotel);
             }
             else{
                 this.State.Hotel = null;
             }
    };

  render(){
      let foodContent = [];
      let hotelContent = [];

      this.GetFavorites();

      if (this.State.Food == null){
          foodContent.push(
              <>
                  <View style={styles.entryBox}>
                  <Text>Nothing here yet!</Text>
                  </View>
              </>
          );
      }
      else{
          for ( let [key, value] of Object.entries(this.State.Food)) {
              foodContent.push(
                  <>
                    <Image
                          source = {value.Image}
                          style={styles.slideImage}
                      />
                      <Text style={styles.regularBold}>{key}</Text>
                      <View style={styles.numberRow}>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => Linking.openURL('tel:${59352526627}')}>
                              <Image
                                  source={require('../../app/assets/icons/phone.png')}
                                  style={styles.infoPhone}
                              />
                              <Text style={styles.infoText}>Call</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => Linking.openURL('mailto:' + value.Mail)}>
                              <Image
                                  source={require('../../app/assets/icons/email.png')}
                                  style={styles.infoEmail}
                              />
                              <Text style={styles.infoText}>Email</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => Linking.openURL(value.Website)}>
                              <Image
                                  source={require('../../app/assets/icons/www_gray.png')}
                                  style={styles.infoWeb}
                              />
                              <Text style={styles.infoText}>Website</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.lastRow}>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => OpenMap.show({ latitude: value.Latitude, longitude: value.Longitude })}>
                              <Image
                                  source={require('../../app/assets/icons/location_gray.png')}
                                  style={styles.infoAddress}
                              />
                              <Text style={styles.infoText}>Locate</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => this.removeFavorites("Food", key)}>
                              <Image
                                  source={require('../../app/assets/icons/turtleBW.png')}
                                  style={styles.infoWeb}
                              />
                              <Text style={styles.infoText}>Unfavorite</Text>
                          </TouchableOpacity>
                      </View>
                  </>
              );
          }
      }

      if (this.State.Hotel == null){
          hotelContent.push(
              <>
                  <View style={styles.entryBox}>
                    <Text>Nothing here yet!</Text>
                  </View>
                  </>
          );
      }
      else{
          for ( let [key, value] of Object.entries(this.State.Hotel)) {
              let hotelImage = value.Image;
              hotelContent.push(
                  <>
                    <Image
                          source = {value.Image}
                          style={styles.slideImage}
                      />
                      <Text style={styles.regularBold}>{key}</Text>
                      <View style={styles.numberRow}>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => Linking.openURL('tel:${59352526627}')}>
                              <Image
                                  source={require('../../app/assets/icons/phone.png')}
                                  style={styles.infoPhone}
                              />
                              <Text style={styles.infoText}>Call</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => Linking.openURL('mailto:' + value.Mail)}>
                              <Image
                                  source={require('../../app/assets/icons/email.png')}
                                  style={styles.infoEmail}
                              />
                              <Text style={styles.infoText}>Email</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => Linking.openURL(value.Website)}>
                              <Image
                                  source={require('../../app/assets/icons/www_gray.png')}
                                  style={styles.infoWeb}
                              />
                              <Text style={styles.infoText}>Website</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.lastRow}>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => OpenMap.show({ latitude: value.Latitude, longitude: value.Longitude })}>
                              <Image
                                  source={require('../../app/assets/icons/location_gray.png')}
                                  style={styles.infoAddress}
                              />
                              <Text style={styles.infoText}>Locate</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style = {{flexDirection: "row"}}
                              onPress={() => this.removeFavorites("Hotel", key)}>
                              <Image
                                  source={require('../../app/assets/icons/turtleBW.png')}
                                  style={styles.infoWeb}
                              />
                              <Text style={styles.infoText}>Unfavorite</Text>
                          </TouchableOpacity>
                      </View>
                  </>
              );
          }
      }

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.hidden}>
            <Text>{this.State.Time}</Text>
            </View>
        <Image
            source={require('../../app/assets/images/Favorites.png')}
            style={{width: entireScreenWidth, height: 200}}
        />
        <ScrollView style={styles.container}>
            <View style={{borderBottomWidth: 2, borderColor: '#27C4CC', flexDirection: "row", alignItems: 'center', paddingLeft: 20}}>
                <Image
                    source={require('../../app/assets/icons/bed.png')}
                    style={{width: 25*rem, height: 31 *rem}}
                />
                <Text style={styles.subHeader}>Hotels</Text>
            </View>
                {hotelContent}
            <View style={{borderBottomWidth: 2, borderColor: '#27C4CC', flexDirection: "row", alignItems: 'center', paddingLeft: 20}}>
                <Image
                    source={require('../../app/assets/icons/food.png')}
                    style={{width: 25*rem, height: 31 *rem}}
                />
                <Text style={styles.subHeader}>Food &amp; Drinks</Text>
            </View>
                {foodContent}
        </ScrollView>
        </View>
    );
  }
// render() {
// return (
//     <Text>Favorites</Text>
// );
// }
}

export default Favorites;
