import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView} from 'react-native';

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class Floreana extends React.Component {
  render(){
      return (
          <View style={styles.container}>
              <Text>Island Hop</Text>
              <Text>Floreana Island</Text>
              <ScrollView>
                  <Text>WEATHER TAB HERE</Text>
                  <Text>What to Do</Text>
                  <Button
                      title="Top Activities"
                      onPress={() => this.props.navigation.navigate("FloreanaTop")}
                  />
                  <Text>Eat &amp; Drink</Text>
                  <Button
                      title="Food &amp; Drinks"
                      onPress={() => this.props.navigation.navigate("FloreanaFood")}
                  />
                  <Text>Plan Ahead</Text>
                  <Button
                      title="Hotels"
                      onPress={() => this.props.navigation.navigate("FloreanaHotels")}
                  />
              </ScrollView>
          </View>
      );
  }
}

export default Floreana;