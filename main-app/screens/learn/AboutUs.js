import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#fff',
        flex: 1
    },
    header:{
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 28*rem,
        fontWeight: "600"
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
        padding: 34,
        lineHeight: 22 * rem,
    },
    dropHeader: {
        backgroundColor: 'rgba(39, 196, 204, 0.1)',
        height: 50*rem,
    },
    dropHeaderText: {
        fontSize: 17*rem,
        paddingLeft: 16,
        fontWeight: 'bold'
    },
    dropBodyText: {
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem,
        paddingLeft: 16
    }
});

class AboutUs extends React.Component {

  render(){
    return (
        <ScrollView style={styles.container}>
      <View>
        <Image
            source={require('../../app/assets/images/AboutUs.png')}
            style={{width: entireScreenWidth, height: 200}}
        />
        <View>
            <Collapse>
                <CollapseHeader>
                    <Separator bordered style={styles.dropHeader}>
                        <Text style={styles.dropHeaderText}>Mission</Text>
                    </Separator>
                </CollapseHeader>
                <CollapseBody>
                    <ListItem >
                        <Text style={styles.dropBodyText}>We are an organization committed to strengthening the tourism sector as the main productive activity of Galapagos, through the promotion, technical assistance and training of its members and the community, guided by a principle of sustainable tourism.
                        </Text>
                    </ListItem>
                </CollapseBody>
            </Collapse>
            <Collapse>
                <CollapseHeader>
                    <Separator bordered style={styles.dropHeader}>
                        <Text style={styles.dropHeaderText}>Vision</Text>
                    </Separator>
                </CollapseHeader>
                <CollapseBody>
                    <ListItem >
                        <Text style={styles.dropBodyText}>To be the organization that leads the representation of the tourism sector in the Province under standards of excellence and ethics, promoting sustainable tourism and a solidarity participation with its members and the community.
                        </Text>
                    </ListItem>
                </CollapseBody>
            </Collapse>
            <Collapse>
                <CollapseHeader>
                    <Separator bordered style={styles.dropHeader}>
                        <Text style={styles.dropHeaderText}>Objectives</Text>
                    </Separator>
                </CollapseHeader>
                <CollapseBody>
                    <ListItem >
                        <Text style={styles.dropBodyText}>Art. 5.- The Provincial Chamber of Tourism of Galapagos has the following objectives:{"\n\n"}
Promote the development of tourism and its services in general in harmony with the need for conservation, preservation and management of the Galapagos Islands.{"\n\n"}
Ensure the prosperity of its members, providing cooperation and support for the development of their activities and the necessary services in accordance with the legal provisions and the present Statute.{"\n\n"}
Foster collaboration and understanding between the various social sectors and tourism service providers, promoting the harmonious progress of the Galapagos province in every aspect.{"\n\n"}
Stimulate cooperation between the private sector and the public sector for the benefit of tourism.{"\n\n"}
Cooperate in the orientation of state policies and in the elaboration of regulations regarding tourism, conservation and management of the Galapagos Islands.{"\n\n"}
To guide the national and international public opinion on the problems that affect tourism, other productive activities, the community and, in general, the Galapagos Islands, aiming at the achievement of goals that benefit them.{"\n\n"}
All others provided in the Law and more regulations.{"\n"}
                        </Text>
                    </ListItem>
                </CollapseBody>
            </Collapse>
        </View>

            <Text style={styles.bodyText}>The Provincial Chamber of Tourism of Galapagos CAPTURGAL, is a non-profit organization created in 1996 (Ministerial Agreement No. 0013).{"\n\n"}

With its main office in Puerto Ayora, on the island of Santa Cruz, with its respective Chapters of San Cristóbal, it serves its almost 100 associates of the four inhabited islands of the archipelago (Floreana Island is a parish of the San Cristóbal Municipal Government), a who provides services in the fields of legal and technical advice, arbitration, training and business references.{"\n\n"}

In fulfilling its functions, CAPTURGAL takes positive measures to ensure the conservation of these extraordinary islands. Since its foundation, CAPTURGAL has worked determinedly and jointly with the Galapagos National Park in order to promote tourism, without causing any damage to these unique ecosystems.{"\n\n"}

But CAPTURGAL's job is also to take care of the Galapagos visitors, their comfort, their safety, their well-being. In a word: offer them quality.{"\n\n"}

The Provincial Chamber of Tourism of Galapagos is at your service, to make your visit to these enchanted islands unforgettable.{"\n\n"}

Therefore, just enjoy it!

            </Text>
    </View>
    </ScrollView>
    );
  }
}
export default AboutUs;
