import React from 'react';
import { StyleSheet, Text, View , ImageBackground, screenWidth, Image, Button, TouchableOpacity } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground style={styles.backgroundImage} source={require('../src/imgs/background.jpg')}>
          <Text style={styles.title}>Académico</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.Boton} onPress={() => { alert('Tapped Academico') }} title='Historial'>
              <Image source={require("../src/imgs/historial.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton} onPress={() => { alert('Tapped Boleta') }} title='Boleta'>
              <Image source={require("../src/imgs/boleta.png")}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white'
  },
  backgroundImage: {
    width: screenWidth,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Boton: {
    height: 100,
    borderRadius:20,
    padding: 10,
    marginBottom: 20,
  }
});