import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Configuracion extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Configuración</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 10,
    color: 'black'
  },

});
