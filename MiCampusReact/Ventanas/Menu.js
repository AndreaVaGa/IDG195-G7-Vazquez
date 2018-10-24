import React from 'react';
import { StyleSheet, Text, View, ImageBackground, AsyncStorage, screenWidth, Image, Button, TouchableOpacity, borderBottomColor, borderBottomWidth } from 'react-native';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: '',
    };

  }
  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('usuario');
    if (value !== null) {
      var alumno = JSON.parse(value)
      this.setState({ matricula: alumno.matricula })
    }
  }
  _IraPerfil = () => {
    this.props.navigation.navigate('Perfil');
  }
  _IraHorario = () => {
    this.props.navigation.navigate('Horario');
  }
  _getHistorial = () => {

    return fetch('http://138.68.231.116:5000/historialacademico')

      .then((response) => response.json())
      .then((responseJson) => {
        var matricula = this.state.matricula;
        var test = responseJson.find(function (obj) { return obj.Matricula === matricula });
        return test;
        
      })
      .then((object) => {
        if (object !== undefined) {
          AsyncStorage.setItem('historial', JSON.stringify(object))
          this.props.navigation.navigate('Historial');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }


  _getBoleta = () => {

    return fetch('http://138.68.231.116:5000/boleta')

      .then((response) => response.json())
      .then((responseJson) => {
        var matricula = this.state.matricula;
        var test = responseJson.find(function (obj) { return obj.matricula === matricula });
        return test;
      })
      .then((object) => {
        if (object !== undefined) {
          AsyncStorage.setItem('boleta', JSON.stringify(object))
          this.props.navigation.navigate('Boleta');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getHorario = () => {

    return fetch('http://138.68.231.116:5000/horario2')

      .then((response) => response.json())
      .then((responseJson) => {
        var matricula = this.state.matricula;
        var test = responseJson.find(function (obj) { return obj.matricula === matricula });
        return test;
      })
      .then((object) => {
        if (object !== undefined) {
          AsyncStorage.setItem('horario', JSON.stringify(object))
          this.props.navigation.navigate('Horario');
          
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <View style={styles.perfilContainer}>
        <ImageBackground style={styles.backgroundImage} source={require('../src/imgs/background.jpg')}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', paddingRight: 10 }}>
            <TouchableOpacity style={styles.Boton2} onPress={(this._IraPerfil)} title='Perfil'>
              <Image style={{ flex: 1, aspectRatio: .2, resizeMode: 'contain' }} source={require("../src/imgs/perfil.png")}></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Académico</Text>
          <View style={styles.lineStyle} />
          <View style={styles.container}>
            <TouchableOpacity style={styles.Boton} onPress={(this._getBoleta)} title='Boleta'>
              <Image source={require("../src/imgs/boleta.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton} onPress={(this._getHistorial)} title='Historial'>
              <Image source={require("../src/imgs/historial.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton} onPress={(this._getHorario)} title='Horario'>
              <Image source={require("../src/imgs/horario.png")}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  perfilContainer: {
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
  lineStyle: {
    borderWidth: 1,
    width: 335,
    borderColor: 'white',
    marginLeft: 20,
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
  Boton2: {
    height: 100,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignContent: 'flex-end',
  },
});