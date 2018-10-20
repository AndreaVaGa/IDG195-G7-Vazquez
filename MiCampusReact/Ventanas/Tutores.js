import React from 'react';
import { StyleSheet, View, Text, AsyncStorage, ScrollView } from 'react-native';

export default class Tutores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      telefono: '',
      trabajo: '',
      correo: '',
      direccion: ''
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
      this.setState({ nombre: alumno.tutor2.nombre })
      this.setState({ telefono: alumno.tutor2.telefono })  
      this.setState({ trabajo: alumno.tutor2.trabajo })
      this.setState({ correo: alumno.tutor2.correo })
      this.setState({ direccion: alumno.tutor2.direccion })
    }
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.titles}>Padre: </Text>
        <Text style={styles.texto}>{this.state.nombre}</Text>
        <Text style={styles.texto2}>Telefono: </Text>
        <Text style={styles.texto}>{this.state.telefono}</Text>
        <Text style={styles.texto2}>Trabajo: </Text>
        <Text style={styles.texto}>{this.state.trabajo}</Text>
        <Text style={styles.texto2}>Correo: </Text>
        <Text style={styles.texto}>{this.state.correo}</Text>
        <Text style={styles.texto2}>Dirección: </Text>
        <Text style={styles.texto}>{this.state.direccion}</Text>
        <Text style={styles.titles}>Madre: </Text>
        <Text style={styles.texto}>{this.state.nombre}</Text>
        <Text style={styles.texto2}>Telefono: </Text>
        <Text style={styles.texto}>{this.state.telefono}</Text>
        <Text style={styles.texto2}>Trabajo: </Text>
        <Text style={styles.texto}>{this.state.trabajo}</Text>
        <Text style={styles.texto2}>Correo: </Text>
        <Text style={styles.texto}>{this.state.correo}</Text>
        <Text style={styles.texto2}>Dirección: </Text>
        <Text style={styles.texto}>{this.state.direccion}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titles: {
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 25,
    fontSize: 20
  },
  texto: {
    justifyContent: 'center',
    marginLeft: 50,
    fontSize: 14
  },
  texto2: {
    justifyContent: 'center',
    marginLeft: 50,
    marginTop:25,
    fontSize: 16
  }
});
