import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView,} from 'react-native';

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

class Camping extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <Image
                                source={require('../../../../app/assets/icons/camp.png')}
                                style={{width: 31*rem, height: 31*rem}}
                            />
                            <Text style={styles.headerText}>Camping</Text>
                        </View>
                        <Image
                            source={require('../../../../app/assets/images/headerImage.png')}
                            style={{width: entireScreenWidth, height: 81*rem}}
                        />
                        <View style={styles.bodyContainer}>
                            <Text style={styles.bodyText}>There are several places where you can camp with prior written authorization from the PNG Directorate, in Santa Cruz, San Cristóbal and Isabela.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Camping;