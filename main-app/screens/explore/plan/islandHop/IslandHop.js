import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class IslandHop extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Choose a Island</Text>
          <ScrollView>
            <Button
              title="Isabela Island"
              onPress={() => this.props.navigation.navigate("Isabela")}
            />
              <Button
                  title="Santa Cruz Island"
                  onPress={() => this.props.navigation.navigate("SantaCruz")}
              />
              <Button
                  title="San Cristobal Island"
                  onPress={() => this.props.navigation.navigate("SanCristobal")}
              />
              <Button
                  title="Floreana Island"
                  onPress={() => this.props.navigation.navigate("Floreana")}
              />
          </ScrollView>
      </View>
    );
  }
}

export default IslandHop;