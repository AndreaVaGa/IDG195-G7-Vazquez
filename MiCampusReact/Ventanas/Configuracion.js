import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Button, Image, } from 'react-native';


export default class Configuracion extends React.Component {

  _LogOut = () => {
    AsyncStorage.removeItem('usuario')
    this.props.navigation.navigate('Login');
  }
  _IraFondo = () => {
    this.props.navigation.navigate('Fondo');
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

        <View style={styles.textBox}>
        <Text style={styles.titles}>NOTIFICACIONES</Text>
        </View>

    <View style={styles.textBox}>
      <View style={styles.fila}>
        <View style={styles.columna}>
          <Text style={styles.titles}>FONDO</Text>
        </View>
        <View style={styles.columna2}>
        <TouchableOpacity onPress={(this._IraFondo)}>
          <Image source={require('../src/imgs/flecha.png')} style={styles.flecha} onPress={this._IraFondo} />
          </TouchableOpacity>
        </View>

        </View>
      </View>

        <View style={styles.textBox}>

      <View style={styles.fila}>
        <View style={styles.columna}>
          <Text style={styles.titles}>TERMINOS/PRIVACIDAD</Text>
        </View>
        <View style={styles.columna2}>
        <TouchableOpacity onPress={(this._IraFondo)}>
          <Image source={require('../src/imgs/flecha.png')} style={styles.flecha} onPress={this._IraFondo} />
          </TouchableOpacity>
        </View>
      
      </View>

    </View>

        <View style={styles.button}>
          <Button
            title="Cerrar sesión"
            color= 'white'
            onPress={(this._LogOut)}
            accessibilityLabel="Tap on Me" />
        </View>
      </View>
      </ScrollView>
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

  columna2:{
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'right',
   },

  flecha:{
    height: 15,
    width: 10,
    marginRight: 20,
  },
  
  titles:{
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  
  fila:{
    flexDirection: 'row'
  },

  columna:{
   justifyContent: 'center',
  },
  
  button: {
    backgroundColor: '#ec1d23',
    borderRadius: 40,
    marginTop: 100,
    marginBottom: 50,
  }

});
