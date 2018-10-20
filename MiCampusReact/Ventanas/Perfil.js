import React from 'react';
import { StyleSheet, Text, AsyncStorage, View, Image, Header, ImageBackground, screenHeight, screenWidth, Button } from 'react-native';

export default class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apellido: '',
      nombre: ''
    };
  }
  _IraTutores = () => {
    this.props.navigation.navigate('Tutores');
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
  _LogOut = () => {
    AsyncStorage.removeItem('usuario')
    this.props.navigation.navigate('Login');

  }




  render() {
    return (
      <View>
        <ImageBackground source={{ uri: 'http://imagenpng.com/wp-content/uploads/2017/07/portadas-para-youtube-2560x1440-HD-5.png' }} style={style.portada}>
          <Image source={require('../src/imgs/estudiante.jpg')} style={style.fpersona} />
        </ImageBackground>
        <Text style={style.title}>{this.state.apellido}</Text>
        <Text style={style.texto}>Carrear: IDGD</Text>
        <Text style={style.texto}>Semestre: 7</Text>
        <Text style={style.texto}>Materias aprobadas: 35</Text>
        <Text style={style.info} onPress={this._IraTutores}>Más información ></Text>
        <View style={style.button}>
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
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 20


  }
});