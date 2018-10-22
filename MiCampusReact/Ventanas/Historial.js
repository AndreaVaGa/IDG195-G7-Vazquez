import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage, ScrollView, Component, Animated } from 'react-native';

export default class Historial extends React.Component {
  constructor(props) {
    super(props);

    this.icons={
      'up' : require('../src/imgs/dropdown-01.png'),
      'down': require('../src/imgs/dropdown-01.png')
    };
    this.state = {
      matricula: '',
      boleta: '',
      promedio: '',
      title: props.title,
      expanded: true,
      animation: new Animated.Value(),
      maxHeight: '',
      minHeight:''
    };

    
  }
  _setMaxHeight(event){
    this.setState({
        maxHeight: event.nativeEvent.layout.height
    });
  };

_setMinHeight(event){
    this.setState({
        minHeight: event.nativeEvent.layout.height
    });
  }

  toggle(){
    let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight: this.state.minHeight,
    finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded:!this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(
      this.state.animation,{
        toValue:finalValue
      }
    ).start();
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
      <View style={styles.container}>

        <Animated.View style={[styles.row,{height:this.state.animation}]}>
          <View style={[styles.colorBox, {backgroundColor: '#4481c2'}]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers} onPress={this._getHistorial}>Cursando</Text>
          </View>
          <TouchableOpacity style={styles.Boton}>
            <View style={styles.rowIcon}>
              <Image style={{flex: 1, aspectRatio: .25, resizeMode: 'contain'}} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.row,{height:this.state.animation}]}>
          <View style={[styles.colorBox, {backgroundColor: '#87c540'}]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Puedes Cursar</Text>
          </View>
          <TouchableOpacity style={styles.Boton}>
            <View style={styles.rowIcon}>
              <Image style={{flex: 1, aspectRatio: .25, resizeMode: 'contain'}} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.row,{height:this.state.animation}]}>
          <View style={[styles.colorBox, {backgroundColor: '#fdd900'}]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Aprobadas</Text>
          </View>
          <TouchableOpacity style={styles.Boton}>
            <View style={styles.rowIcon}>
              <Image style={{flex: 1, aspectRatio: .25, resizeMode: 'contain'}} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.row,{height:this.state.animation}]}>
          <View style={[styles.colorBox, {backgroundColor: '#f78d1f'}]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Sujetas a Aprobación</Text>
          </View>
          <TouchableOpacity style={styles.Boton}>
            <View style={styles.rowIcon}>
              <Image style={{flex: 1, aspectRatio: .25, resizeMode: 'contain'}} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <View style={{flex:1, color:'black'}}>
          <ScrollView>marginBottom</ScrollView>
          <View>
            <Text style={{ color: 'white', fontWeight:'bold', fontSize: 15 }}>Promedio general: {this.state.promedio2}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  colorBox: {
    width: 65,
    height: 100,
    backgroundColor: '#4481c2',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
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
      justifyContent: 'center',
      alignItems: 'center',
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
  promedio2: {
  backgroundColor: 'black',
  bottom: 0,
  position: 'absolute',
  padding: 7,
  width: '100%',
  },
  Boton: {
    height: 100,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  row2: {
    marginTop: 30,
    marginLeft: 22,
    flexDirection: 'row',
  },
  materia2: {
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
  faltas: {
    width: 65,
    height: 100,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  promedio: {
    width: 65,
    height: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  headers2: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  texto: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
  }
});