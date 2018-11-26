import React from 'react';
import { StyleSheet, View, Text, AsyncStorage, ScrollView, screenWidth } from 'react-native';

export default class Tutores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      telefono: '',
      trabajo: '',
      correo: '',
      direccion: '',
      nombre2: '',
      telefono2: '',
      trabajo2: '',
      correo2: '',
      direccion2: ''
    };
  }

  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('usuario');
    if (value !== null) {
      var alumno = JSON.parse(value)
      this.setState({ nombre: alumno.tutor1.nombre })
      this.setState({ telefono: alumno.tutor1.telefono })
      this.setState({ trabajo: alumno.tutor1.trabajo })
      this.setState({ correo: alumno.tutor1.correo })
      this.setState({ direccion: alumno.tutor1.direccion })
      this.setState({ nombre2: alumno.tutor2.nombre })
      this.setState({ telefono2: alumno.tutor2.telefono })
      this.setState({ trabajo2: alumno.tutor2.trabajo })
      this.setState({ correo2: alumno.tutor2.correo })
      this.setState({ direccion2: alumno.tutor2.direccion })
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titles}>Padre: </Text>
        <Text style={styles.texto}>{this.state.nombre}</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.texto2}>Telefono: </Text>
        <Text style={styles.texto}>{this.state.telefono}</Text>
        <Text style={styles.texto2}>Trabajo: </Text>
        <Text style={styles.texto}>{this.state.trabajo}</Text>
        <Text style={styles.texto2}>Correo: </Text>
        <Text style={styles.texto}>{this.state.correo}</Text>
        <Text style={styles.texto2}>Dirección: </Text>
        <Text style={styles.texto}>{this.state.direccion}</Text>
        <Text style={styles.titles}>Madre: </Text>
        <Text style={styles.texto}>{this.state.nombre2}</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.texto2}>Telefono: </Text>
        <Text style={styles.texto}>{this.state.telefono2}</Text>
        <Text style={styles.texto2}>Trabajo: </Text>
        <Text style={styles.texto}>{this.state.trabajo2}</Text>
        <Text style={styles.texto2}>Correo: </Text>
        <Text style={styles.texto}>{this.state.correo2}</Text>
        <Text style={styles.texto2}>Dirección: </Text>
        <Text style={styles.texto}>{this.state.direccion2}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 20
  },
  titles: {
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 25,
    fontSize: 30
  },
  texto: {
    justifyContent: 'center',
    marginLeft: 50,
    fontSize: 14
  },
  texto2: {
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 20,
    fontSize: 16
  },
  lineStyle: {
    borderWidth: 1,
    width: screenWidth,
    borderColor: '#ffd700',
    marginTop: 15
  },
});
