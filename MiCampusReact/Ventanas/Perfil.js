import React from 'react';
import { StyleSheet, Text, AsyncStorage, View, Image, Header, ImageBackground, screenHeight, screenWidth } from 'react-native';

export default class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apellido: '',
      nombre: ''
    };
  }

  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('usuario');
    if (value !== null) {
      var alumno = JSON.parse(value)
      this.setState({ apellido: alumno.apellido })
    }
  }

  render() {
    return (
      <View>
        <ImageBackground source={require('../src/imgs/portada.jpg')} style={style.portada}>
          <Image source={require('../src/imgs/estudiante.jpg')} style={style.fpersona} />
        </ImageBackground>
        <Text style={style.title}>{this.state.apellido}</Text>
        <Text style={style.texto}>Carrear: IDGD</Text>
        <Text style={style.texto}>Semestre: 7</Text>
        <Text style={style.texto}>Materias aprobadas: 35</Text>
        <Text style={style.info}>Más información ></Text>
      </View>

    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 25,
    textAlign: 'center'
  },
  fpersona: {
    width: 130,
    height: 130,
    borderWidth: 5,
    borderColor: '#ffffff',
    borderRadius: 65,
  },
  portada: {
    width: screenWidth,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  texto: {
    justifyContent: 'center',
    marginLeft: 50,
    fontSize: 14,
  },
  info: {
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#4169E1',
    marginLeft: 50,
    marginTop: 50,
    fontSize: 12,
  }
});