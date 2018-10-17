import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      

      <View style={styles.container}>

      <View style={styles.boleta}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize:20}}>Boleta</Text>
      </View>

      <View style={styles.fila}>

      <View style={styles.materia}>
        <Text style={styles.headers}>Base de Datos</Text>
        <Text style={styles.texto}>Gerardo del Rincon</Text>
      </View>

      <View style={styles.faltas}>
        <Text style={styles.headers}>F</Text>
        <Text style={styles.texto}>0</Text>
      </View>
      
      <View style={styles.promedio}>
        <Text style={styles.headers}>P</Text>
        <Text style={styles.texto}>10</Text>
      </View>

      </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boleta: {
    height:40,
    marginTop:20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',  
  },
  fila: {
    marginTop: 30,
    marginLeft: 22,
    flexDirection: 'row',
  },
  materia: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#eee',
    flexDirection: 'column',
  },
  faltas: {
    width: 65,
    height: 100,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  promedio: {
    width: 65,
    height: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  headers: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  texto: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
  }
 });
