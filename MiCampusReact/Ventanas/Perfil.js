import React from 'react';
import {
  StyleSheet,
  Text,
  AsyncStorage,
  View,
  Image,
  ImageBackground,
  screenWidth,
  TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      carrera: '',
      semestre: '',
      aprobadas: '',
      matricula: ''
    };
  }
  _IraTutores = () => {
    this.props.navigation.navigate('Tutores');
  }

  _IraConfiguracion = () => {
    this.props.navigation.navigate('Configuracion');
  }

  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('usuario');
    if (value !== null) {
      var alumno = JSON.parse(value)
      var matriculatemp = alumno.matricula
      var matricula_numerica = matriculatemp.slice(matriculatemp.length * -1 + 1)
      this.setState({ nombre: alumno.nombre })
      this.setState({ apellido: alumno.apellido })
      this.setState({ carrera: alumno.carrera })
      this.setState({ semestre: alumno.semestre })
      this.setState({ aprobadas: alumno.aprobadas })
      this.setState({ matricula: matricula_numerica })

    }
  }

  render() {
    return (
      <View>
      <ImageBackground source={{ uri: 'http://imagenpng.com/wp-content/uploads/2017/07/portadas-para-youtube-2560x1440-HD-5.png' }} style={styles.portada}>
            <TouchableOpacity  onPress={(this._IraConfiguracion)}>
              <Image source={require("../src/imgs/configuracion.png")} style={styles.confi} onPress={(this._IraConfiguracion)}></Image>
            </TouchableOpacity>
          <Image source={{ uri: 'https://micampus.tij.cetys.mx/fotos/' + this.state.matricula + '.jpg' }} style={styles.fpersona} />
        </ImageBackground>
      <View>
        <Text style={styles.title}>{this.state.nombre}</Text>
        <Text style={styles.title2}>{this.state.apellido}</Text>
        <Text style={styles.texto}>Carrera: {this.state.carrera} </Text>
        <Text style={styles.texto}>Semestre: {this.state.semestre}</Text>
        <Text style={styles.texto}>Materias aprobadas: {this.state.aprobadas}</Text>
        <Text style={styles.info} onPress={this._IraTutores}>Más información ></Text>
      </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
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
  confi: {
    height: hp('5%'),
    width: wp('9%'),
    marginBottom: 25,
    marginLeft: 300,
  }
});