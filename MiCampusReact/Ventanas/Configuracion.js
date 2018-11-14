import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Configuracion extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Configuración</Text>

        <View style={styles.textBox}>
        <Text style={styles.titles}>Notificaciones</Text>
        </View>

        <View style={styles.textBox}>
        <Text style={styles.titles}>Fondo</Text>
        </View>

        <View style={styles.textBox}>
        <Text style={styles.titles}>Terminos/Privacidad</Text>
        </View>

        <View style={styles.button}>
          <Button
            title="Log Out"
            color="#FFFFFF"
            onPress={(this._LogOut)}
            accessibilityLabel="Tap on Me" />
        </View>
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

  textBox:{
    backgroundColor: '#efefef',
    borderRadius: 20,
    margin: 20
  },
  
  titles:{
    fontSize: 20,
    textAlign: 'left',
    marginTop: 15,
  },

  button: {
    backgroundColor: '#ec1d23',
    borderRadius: 10,
    margin: 20
  }

});
