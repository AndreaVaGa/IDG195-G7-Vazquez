import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Configuracion extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textBox}>
        <Text style={styles.titles}>NOTIFICACIONES</Text>
        </View>

    <View style={styles.textBox}>
        <Text style={styles.titles}>FONDO</Text>
        <Text style={styles.flecha}>></Text>
        </View>

        <View style={styles.textBox}>
        <Text style={styles.titles}>TERMINOS/PRIVACIDAD</Text>
        <Text style={styles.flecha}>></Text>
      </View>

        <View style={styles.button}>
          <Button
            title="Cerrar sesión"
            color= 'black'
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
    margin: 20,
  },

  textBox:{
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },

  flecha:{
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    flexDirection: 'row'
  },
  
  titles:{
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row'
  },

  button: {
    backgroundColor: '#ec1d23',
    borderRadius: 40,
    marginTop: 100
  }

});
