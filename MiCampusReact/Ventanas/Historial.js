import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage, ScrollView, Component, Animated } from 'react-native';

export default class Historial extends React.Component {
  constructor(props) {
    super(props);

    this.icons = {
      'up': require('../src/imgs/dropdown-01.png'),
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
      minHeight: ''
    };


  }
  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height + 50
    });
  };

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  toggle() {
    let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(
      this.state.animation, {
        toValue: finalValue
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
    var value = await AsyncStorage.getItem('historial');
    if (value !== undefined) {
      var historial = JSON.parse(value);
      this.setState({ promedio: historial.PromedioGeneral })
    }
  }


  render() {
    return (
      <View style={styles.container}>

        <Animated.View style={[styles.row, { height: this.state.animation }]}>
          <View style={[styles.colorBox, { backgroundColor: '#4481c2' }]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers} onPress={this._getHistorial}>Cursando</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.rowIcon} onPress={this._setMaxHeight}>
              <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.row, { height: this.state.animation }]}>
          <View style={[styles.colorBox, { backgroundColor: '#87c540' }]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Puedes Cursar</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.rowIcon}>
              <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.row, { height: this.state.animation }]}>
          <View style={[styles.colorBox, { backgroundColor: '#fdd900' }]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Aprobadas</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.rowIcon}>
              <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.row, { height: this.state.animation }]}>
          <View style={[styles.colorBox, { backgroundColor: '#f78d1f' }]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers}>Sujetas a Aprobación</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.rowIcon}>
              <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </Animated.View>


        <View style={styles.promedio}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Promedio general: {this.state.promedio}</Text>
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
  promedio: {
    backgroundColor: 'black',
    bottom: 0,
    position: 'absolute',
    padding: 7,
    width: '100%',
  },
});