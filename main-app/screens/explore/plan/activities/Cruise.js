import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, SectionList} from 'react-native';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    flex: 1,
      flexDirection: 'column'
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
        paddingBottom: 52*rem
    },
    subHeader:{
      fontWeight: '600',
      color: '#000000',
      fontSize: 17*rem,
      paddingTop: 34, 
      paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem, 
        paddingTop: 16*rem
    }, 
    bodyTextEnd:{
      fontSize: 17*rem,
      color: '#616161',
      lineHeight: 22 * rem, 
      paddingTop: 16*rem,
      paddingBottom: 16*rem
  }, 
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 17*rem,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
      marginTop: 32
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      flexWrap: 'wrap',
    }
});

class Cruise extends React.Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../../app/assets/icons/cruise.png')}
                  style={{width: 30*rem, height: 29*rem}}
              />
              <Text style={styles.headerText}>Cruise</Text>
          </View>
          <Image
              source={require('../../../../app/assets/images/headerImage.png')}
              style={{width: entireScreenWidth, height: 81*rem}}
          />
              <View style={styles.bodyContainer}>

                  <Text style={styles.bodyText}>The Galapagos Islands are located in the Pacific Ocean, about 1000 km off the coast of Ecuador. A cruise is the best way to visit many of the islands in a short time. Taking a boat tour will allow you to know the farthest islands, and will always be accompanied by a professional naturalist guide who will teach you the unique geology, flora, fauna and history of each island.
                  </Text>

                  <Text style={styles.bodyTextEnd}>The circuits have a duration of 4, 5 and 8 days. There is a wide range of yachts and boats that offer cruises on the Galapagos Islands. Most boats have snorkeling and kayaking equipment, some yachts also offer diving. Due to the type of service they offer, the training of their staff, the gastronomic offer, the equipment and service on board, in the Galapagos Islands, 4 classes of boats and yachts are distinguished: economy class, tourist class, first class and luxury class.
                  </Text>
              <View style={styles.container}>
                  <SectionList
                      sections={[
                          {title: 'Economy Class Yachts', data: ['Small yachts (8 to 16 passengers)', 'Basic equipment', 'Small spaces on board', 'Narrow cabins with bunk beds', 'Limited food options', 'Limited cruise speed', 'Long sailing time', 'Limited itineraries']},
                          {title: 'Tourist Yachts', data: ['Better equipped (10 to 18 passengers)', 'More spacious', 'Bathrooms and showers in the cabins', 'Social areas', 'Air conditioning option', 'Quality service and itinerary offers', 'Naturalist Guides II with mastery of a foreign language', 'Some offer diving']},
                          {title: 'First Class Yachts', data: ['Extensive itineraries around the islands', 'Undergo international maritime safety regulations', 'Spacious cabins', 'Hot and cold water', 'Air conditioning', 'Buffet-style food', 'Variety and assorted bar', 'Naturalist guides III (highest category in Galapagos) specialized with deep knowledge of the flora and fauna of the Galapagos that speak two or three foreign languages', 'Snorkeling equipment', 'Sea kayaking']},
                          {title: 'Luxury Yachts', data: ['Comfortable and elegant cabins', 'First class service', 'Highly qualified professional team', 'Best routes in Galapagos', 'Satellite communication', 'Video Souvenir shops', 'Jacuzzi', 'Buffet food', 'Minibar in the cabins', 'Air conditioning']},
                      ]}
                      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                      keyExtractor={(item, index) => index}
                  />
              </View>
              </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Cruise;