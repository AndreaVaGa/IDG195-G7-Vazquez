import React from 'react';
import { StyleSheet, ScrollView, Text, View, ImageBackground, AsyncStorage, screenWidth, screenHeight, Image, TouchableOpacity } from 'react-native';

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

    return fetch('http://138.68.231.116:5000/historial2')

      .then((response) => response.json())
      .then((responseJson) => {
        var matricula = this.state.matricula;
        var test = responseJson.find(function (obj) { return obj.matricula === matricula });
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
      <ImageBackground style={styles.perfilContainer} source={require('../src/imgs/background.jpg')}>
      <ScrollView>
      <View style={styles.perfilContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', paddingRight: 10 }}>
            <TouchableOpacity style={styles.Boton2} onPress={(this._IraPerfil)}>
              <Image style={{ flex: 1, aspectRatio: .2, resizeMode: 'contain' }} source={require("../src/imgs/perfil.png")}></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Académico</Text>

          <View style={styles.container}>
            <TouchableOpacity style={styles.Boton} onPress={(this._getBoleta)} title='Boleta'>
              <Image source={require("../src/imgs/boleta.png")}></Image>
              <Text style={styles.texto}>Boleta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton} onPress={(this._getHistorial)} title='Historial'>
              <Image source={require("../src/imgs/historial.png")}></Image>
              <Text style={styles.texto}>Historial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton} onPress={(this._getHorario)} title='Horario'>
              <Image source={require("../src/imgs/horario.png")}></Image>
              <Text style={styles.texto}>Horario</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineStyle} />
          </View>
      </ScrollView>
      </ImageBackground>
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
    margin: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginLeft: 15,
    marginTop:5,
    marginBottom: 5,
  },
  texto: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    marginLeft: 9,
    marginBottom: 5,
  },
  lineStyle: {
    borderWidth: .9,
    width: 370,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#ffd700',
  },
  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'flex-end',
  },
  Boton: {
    height: 100,
    borderRadius: 20,
    padding: 10,
    marginBottom: 25,
  },
  Boton2: {
    height: 100,
    borderRadius: 20,
    padding: 10,
    alignContent: 'flex-end',
  },
});