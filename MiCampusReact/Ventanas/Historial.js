import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage, ScrollView, ModalDropdown} from 'react-native';
import { Constants } from 'expo';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

export default class App extends Component {
  state = {
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

export default class Historial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: '',
      historial: '',
      promedio: '',
    };
  }

  componentDidMount() {
    this._loadInitionState().done();
  }
  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('historial');
    if (value !== undefined) {
      var historial = JSON.parse(value)
      this.setState({historial:historial.Plandeestudios})
      alert(JSON.stringify(this.state.historial))
      this.setState({ promedio: historial.PromedioGeneral })
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.toggleExpanded}>

        <View style={[styles.row, { height: this.state.animation }]}>
          <View style={[styles.colorBox, { backgroundColor: '#4481c2' }]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers} >Cursando</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.rowIcon}>
              <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>

        </TouchableOpacity>  

         <Collapsible collapsed={this.state.collapsed} align="center">

         <View style={[styles.row, { height: this.state.animation }]}>
          <View style={[styles.colorBox, { backgroundColor: '#4481c2' }]}>
          </View>
          <View style={styles.materia}>
            <Text style={styles.headers} >Cursando</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.rowIcon}>
              <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>

         </Collapsible>


        <View style={[styles.row, { height: this.state.animation }]}>
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
        </View>

        <View style={[styles.row, { height: this.state.animation }]}>
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
        </View>

        <View style={[styles.row, { height: this.state.animation }]}>
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
        </View>


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
