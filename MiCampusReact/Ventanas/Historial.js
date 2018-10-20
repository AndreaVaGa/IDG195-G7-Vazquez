import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';

export default class Historial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: '',
      boleta: '',
      promedio: ''
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
      this.setState({ matricula: alumno.matricula })
    }
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
          var historial = JSON.stringify(object);
          alert(historial)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Historial Académico</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.colorBox1}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers} onPress={this._getHistorial}>Cursando</Text>
          </View>
          <View style={styles.rowIcon}>
            <Image source={require('../src/imgs/dropdown-01.png')}></Image>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.colorBox2}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Puedes Cursar</Text>
          </View>
          <View style={styles.rowIcon}>
            <Image source={require('../src/imgs/dropdown-01.png')}></Image>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.colorBox3}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Aprobadas</Text>
          </View>
          <View style={styles.rowIcon}>
            <Image source={require('../src/imgs/dropdown-01.png')}></Image>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.colorBox4}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Sujetas a Aprobación</Text>
          </View>
          <View style={styles.rowIcon}>
            <Image source={require('../src/imgs/dropdown-01.png')}></Image>
          </View>
        </View>

        <View>
          <Text style={{ color: 'black', fontSize: 15 }}>Promedio general: {this.state.promedio}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginTop: 30,
    marginLeft: 22,
    flexDirection: 'row',
    alignContent: 'center',
  },
  materia: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  colorBox1: {
    width: 65,
    height: 100,
    backgroundColor: '#4481c2',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  colorBox2: {
    width: 65,
    height: 100,
    backgroundColor: '#87c540',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  colorBox3: {
    width: 65,
    height: 100,
    backgroundColor: '#fdd900',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  colorBox4: {
    width: 65,
    height: 100,
    backgroundColor: '#f78d1f',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rowIcon: {
      width: 65,
      height: 100,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: '#F5F5F5',
      flexDirection: 'column',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
      alignContent: 'center',
  },
  headers: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    padding: 10,
    color: 'black'
  },
});