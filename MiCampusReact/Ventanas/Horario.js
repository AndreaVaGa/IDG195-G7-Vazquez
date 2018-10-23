import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import Carousel from 'simple-carousel-react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Horario extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      horario: '',
      
    };
  }
  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('horario');
    if (value !== null) {
      var horario = JSON.parse(value)
      this.setState({ horario: horario})
      
    }
  }
  
  render() {
    return (
      <Carousel style={styles.container}>    
      <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={styles.semana}>Lunes</Text>
      </View>
      <View>
        <View style={styles.fila}>
          <View style={styles.materia}>
            <Text style={styles.headers}>Base de Datos</Text>
            <Text style={styles.profesor}>Gerardo del Rincon</Text>
          </View>
          <View style={styles.salon}>
            <Text style={styles.numero}>7013</Text>
            <Text style={styles.hora}>6:00 - 8:00 p.m.</Text>
          </View>
        </View>
      </View>
  </View>

  <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={styles.semana}>Martes</Text>
      </View>
      <View>
        <View style={styles.fila}>
          <View style={styles.materia}>
            <Text style={styles.headers}>Base de Datos</Text>
            <Text style={styles.profesor}>Gerardo del Rincon</Text>
          </View>
          <View style={styles.salon}>
            <Text style={styles.numero}>7013</Text>
            <Text style={styles.hora}>6:00 - 8:00 p.m.</Text>
          </View>
        </View>
      </View>
  </View>

  <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={styles.semana}>Miercoles</Text>
      </View>
      <View>
        <View style={styles.fila}>
          <View style={styles.materia}>
            <Text style={styles.headers}>Base de Datos</Text>
            <Text style={styles.profesor}>Gerardo del Rincon</Text>
          </View>
          <View style={styles.salon}>
            <Text style={styles.numero}>7013</Text>
            <Text style={styles.hora}>6:00 - 8:00 p.m.</Text>
          </View>
        </View>
      </View>
  </View>

  <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={styles.semana}>Jueves</Text>
      </View>
      <View>
        <View style={styles.fila}>
          <View style={styles.materia}>
            <Text style={styles.headers}>Base de Datos</Text>
            <Text style={styles.profesor}>Gerardo del Rincon</Text>
          </View>
          <View style={styles.salon}>
            <Text style={styles.numero}>7013</Text>
            <Text style={styles.hora}>6:00 - 8:00 p.m.</Text>
          </View>
        </View>
      </View>
  </View>

  <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={styles.semana}>Viernes</Text>
      </View>
      <View>
        <View style={styles.fila}>
          <View style={styles.materia}>
            <Text style={styles.headers}>Base de Datos</Text>
            <Text style={styles.profesor}>Gerardo del Rincon</Text>
          </View>
          <View style={styles.salon}>
            <Text style={styles.numero}>7013</Text>
            <Text style={styles.hora}>6:00 - 8:00 p.m.</Text>
          </View>
        </View>
      </View>
  </View>

  <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={styles.semana}>Sabado</Text>
      </View>
      <View>
        <View style={styles.fila}>
          <View style={styles.materia}>
            <Text style={styles.headers}>Base de Datos</Text>
            <Text style={styles.profesor}>Gerardo del Rincon</Text>
          </View>
          <View style={styles.salon}>
            <Text style={styles.numero}>7013</Text>
            <Text style={styles.hora}>6:00 - 8:00 p.m.</Text>
          </View>
        </View>
      </View>
  </View>

  </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fila: {
    marginTop: 30,
    marginLeft: 22,
    flexDirection: 'row',
  },
  materia: {
    width: 240,
    height: 100,
    justifyContent:'center',
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
  salon: {
    width: 80,
    height: 100,
    justifyContent:'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  headers: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
  },
  numero: {
    fontSize: 20,
    textAlign: 'center',
  },
  profesor: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 2,
    marginLeft: 10,
  },
  hora: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 2,
    fontSize: 10,
  },
  semana: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    margin: 10
  }
 });
