import React from 'react';
import { StyleSheet, Text, View, ImageBackground, screenWidth, Image, Button, TouchableOpacity, borderBottomColor, borderBottomWidth } from 'react-native';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

  }
  _IraBoleta = () => {
    this.props.navigation.navigate('Boleta');
  }
  _IraHistorial = () => {
    this.props.navigation.navigate('Historial');
  }
  _IraPerfil = () => {
    this.props.navigation.navigate('Perfil');
  }
  _IraHorario = () => {
    this.props.navigation.navigate('Horario');
  }

  render() {
    return (
      <View style={styles.perfilContainer}>
        <ImageBackground style={styles.backgroundImage} source={require('../src/imgs/background.jpg')}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems:'flex-start', paddingRight: 10}}>
            <TouchableOpacity style={styles.Boton2} onPress={(this._IraPerfil)} title='Perfil'>
                <Image style={{flex: 1, aspectRatio: .2, resizeMode: 'contain'}} source={require("../src/imgs/perfil.png")}></Image>
            </TouchableOpacity>
          </View>
           <Text style={styles.title}>Académico</Text>
           <View style = {styles.lineStyle} />
          <View style={styles.container}>
            <TouchableOpacity style={styles.Boton} onPress={(this._IraBoleta)} title='Boleta'>
              <Image source={require("../src/imgs/boleta.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton} onPress={(this._IraHistorial)} title='Historial'>
              <Image source={require("../src/imgs/historial.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton} onPress={(this._IraHorario)} title='Horario'>
              <Image source={require("../src/imgs/horario.png")}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  perfilContainer:{
    flex: 1,
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginLeft: 20,
    marginBottom: 5,
  },
  lineStyle:{
        borderWidth: 1,
        width: 335,
        borderColor:'white',
        marginLeft:20,
   },
  backgroundImage: {
    width: screenWidth,
    height: '100%',
    justifyContent: 'flex-end',
  },
  Boton: {
    height: 100,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  Boton2:{
    height: 100,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignContent:'flex-end',
  },
});