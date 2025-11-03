import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Dimensions, SafeAreaView, Image} from 'react-native';

//get scaling factors
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
        paddingHorizontal: 33*rem,
        paddingBottom: 52*rem,
        paddingTop: 28*rem
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


class Fishing extends React.Component {
  render(){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
              <View style={styles.container}>
                  <View style={styles.header}>
                      <Image
                          source={require('../../../../app/assets/icons/fish.png')}
                          style={{width: 36*rem, height: 20*rem}}
                      />
                      <Text style={styles.headerText}>Fishing</Text>
                  </View>
                  <Image
                      source={require('../../../../app/assets/images/headerImage.png')}
                      style={{width: entireScreenWidth, height: 81*rem}}
                  />
                  <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>Sport fishing is prohibited in Galapagos until it can be carefully determined that it can be done sustainably. However, one of the possibilities being explored is known as "Experiential Fishing" or demonstration fishing. The artisanal fishermen of Galapagos will be able to offer the experience fishing service to the tourists of the archipelago. This combines traditional skills with tourism, and using “experiential fishing” can help fishermen's families, whose income is affected by the consequences of overfishing and also by the Special Law, maintain their livelihoods.</Text>
                  </View>
              </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}

export default Fishing;