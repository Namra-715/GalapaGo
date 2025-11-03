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

class SanCristobal extends React.Component {
  render(){
    return (
        <View style={styles.container}>
            <Text>Island Hop</Text>
            <Text>San Cristobal Island</Text>
            <ScrollView>
                <Text>WEATHER TAB HERE</Text>
                <Text>What to Do</Text>
                <Button
                    title="Top Activities"
                    onPress={() => this.props.navigation.navigate("SanCristobalTop")}
                />
                <Text>Eat &amp; Drink</Text>
                <Button
                    title="Food &amp; Drinks"
                    onPress={() => this.props.navigation.navigate("SanCristobalFood")}
                />
                <Text>Plan Ahead</Text>
                <Button
                    title="Hotels"
                    onPress={() => this.props.navigation.navigate("SanCristobalHotels")}
                />
            </ScrollView>
        </View>
    );
  }
}

export default SanCristobal;