import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class IsabelaHotels extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
        <Button
          title="Go to Learn"
          onPress={() => this.props.navigation.navigate("Learn")}
        />
      </View>
    );
  }
}

export default IsabelaHotels;