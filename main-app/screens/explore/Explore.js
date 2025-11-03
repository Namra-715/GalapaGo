import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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


class Explore extends React.Component {
    render(){
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Image
                    source={require('../../app/assets/images/Explore.png')}
                    style={{width: entireScreenWidth, height: 200}}
                />

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate("KnowBefore")}>
                    <View style={styles.buttonLeft}>
                        <Image
                            source={require('../../app/assets/icons/knowBefore_gray.png')}
                            style={{width: 28*rem, height: 28*rem}}
                        />
                        <Text style={styles.buttonText}>Know Before You Go</Text>
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
                    onPress={() => this.props.navigation.navigate("Plan")}>
                    <View style={styles.buttonLeft}>
                        <Image
                            source={require('../../app/assets/icons/plan_gray.png')}
                            style={{width: 27*rem, height: 30*rem}}
                        />
                        <Text style={styles.buttonText}>Plan Your Trip</Text>
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
                    source={require('../../app/assets/images/g2.webp')}
                    style={{width: entireScreenWidth, height: 355 * rem}}
                />
            </View>
        );
    }
}

export default Explore;
