import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, SectionList} from 'react-native';
import { any } from 'prop-types';
import { ListItem } from 'native-base';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        flex: 1,

    },
    header:{
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 28*rem,
        fontWeight: "600",
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
    regularBold:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 30,
        paddingTop: 16,
        paddingBottom: 16,
        flexWrap: "wrap"
    },
    regular:{
      fontSize: 17*rem,
      color: '#616161',
      paddingLeft: 34,
      paddingTop: 30,
      paddingRight: 34,
      lineHeight: 20 * rem
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 34,
      alignItems: 'stretch'
    },
    wrapper: {
      height: 200*rem,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width,
    },
    slideImage: {
      height: 200*rem,
      width: Dimensions.get('window').width,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
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
    infoText: {
      fontSize: 17*rem,
      color: '#616161',
      lineHeight: 20*rem,
      marginLeft: 10*rem,
      marginRight: 20*rem,
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
    sectionHeader: {
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        flexWrap: "wrap",
        paddingTop: 5,
        paddingLeft: 14,
        paddingRight: 10,
        paddingBottom: 5,
        marginBottom: 5,
        marginTop: 30,
        backgroundColor: 'rgba(247,247,247,1.0)',
        flexDirection: "row"
    },
    item: {

        fontSize: 17*rem,
        height: 44,
        paddingTop: 15,
        paddingLeft: 14,
        paddingRight: 34,
        flexWrap: "wrap",
        flex: 1
    },
    lists: {
        marginBottom: 30,
        marginRight: 10,
        flexWrap: "wrap",
        flex: 1,
        flexDirection: 'row'
    }
});

class Language extends React.Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={false}>
      <View style={{backgroundColor: 'white', flex: 1,}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../app/assets/icons/alphabet.png')}
                  style={{width: 30*rem, height: 23*rem}}
              />
              <Text style={styles.headerText}>Useful Phrases for Ecuador</Text>
          </View>
          {/*< Image
          source={require('../../../app/assets/images/headerImage_short.png')}
          style={{width: entireScreenWidth, height: 25*rem}}
          />*/}

            <Text style={styles.regular}>
                Check out the top phrases in Spanish for travelers heading to the Galapagos Islands:
            </Text>
            <SectionList
                style={styles.lists}
                sections={[
                    {title: 'Greetings', data: ['Good morning - Buenos días', 'Good afternoon - Buenos tardes', 'Hi, Hello - Hola', 'How are you? - Cómo está?', 'Good, thank you - Bien, gracias', 'Nice to meet you - Mucho gusto']},
                    {title: 'Basic Phrases', data: ['Do you speak English? - Habla inglés?', 'Please - Por favor', 'Thank you - Gracias', 'I want - Yo quiero', 'I do not want - Yo no quiero', 'A ticket - Un boleto', 'A hotel - Un hotel', 'A taxi - Un taxi', 'I would like - Me gustaría', 'I understand - Yo entiendo', 'I do not understand - Yo no entiendo', 'How much does it cost? - Cuanto cuesta?']},
                    {title: 'Directions', data: ['Where is...? - Dónde está?', 'Where is the bus station/train station? - Dónde está la estación de autobuses/ferrocarril?', 'Where is a good restaurant? - Dónde hay un buen restaurante?', 'Where is the bathroom? - Dónde está el baño?']},
                    {title: 'Understanding Directions', data: ['To the right - A la derecha', 'To the left - A la izquierda', 'Straught ahead - Derecho', 'At the corner - En la esquina', 'In two, three, four blocks - A dos, tres, cuatro curadras']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
            </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Language;
