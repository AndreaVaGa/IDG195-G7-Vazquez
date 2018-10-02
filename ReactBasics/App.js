import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = { uri: 'https://i2.wp.com/thehappening.com/wp-content/uploads/2016/02/boliche-cdmx.jpg?fit=1024%2C694&ssl=1'};
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Image source={pic} style={{width: 240, height: 140}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
