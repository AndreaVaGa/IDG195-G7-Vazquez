import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, AsyncStorage, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      password: ''
    };
  }
  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('usuario');
    if (value !== null) {
      this.props.navigation.navigate('Menu');
    }
  }


  _getAlumno = () => {

    return fetch('http://138.68.231.116:5000/alumnos')

      .then((response) => response.json())
      .then((responseJson) => {
        var usuario = this.state.usuario.toLocaleLowerCase()
        var password = this.state.password
        var test = responseJson.find(function (obj) { return obj.matricula === usuario && obj.password === password });
        return test;

      })
      .then((object) => {
        if (object === undefined) {
          alert('Usuario o contraseña incorrecta')
        } else {
          AsyncStorage.setItem('usuario', JSON.stringify(object))
          this.props.navigation.navigate('Menu');

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={{ flex: .4, aspectRatio: 1, resizeMode: 'contain', marginBottom: 10 }} source={require('../src/imgs/flama.png')} />
        <TextInput placeholder="Usuario"
          style={styles.text} onChangeText={(usuario) => this.setState({ usuario })} />
        <TextInput placeholder="Contraseña" secureTextEntry={true}
          style={styles.text} onChangeText={(password) => this.setState({ password })} />
        <View>
        <TouchableOpacity onPress={(this._getAlumno)}>
          <Image source={require('../src/imgs/ingresar.png')} style={styles.button} onPress={this._getAlumno} />
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdcc01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 10

  },
  img: {
    width: '30%',
    height: '30%',
    marginBottom: 50,
    justifyContent: 'center',
  },
  button: {
    height: hp('9%'),
    width: wp('60%'),
    marginTop: 25,

  }


});
