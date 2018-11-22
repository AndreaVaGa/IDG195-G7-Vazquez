import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage, FlatList, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { StatusColorPicker } from 'react-native-status-color-picker';

export default class Historial extends React.Component {
  state = {
    collapsed: true,
    collapsed2: true,
    collapsed3: true,
    collapsed4: true,
  };

  toggleExpanded = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  toggleExpanded2 = () => {
    this.setState({
      collapsed2: !this.state.collapsed2,
    });
  }
  toggleExpanded3 = () => {
    this.setState({
      collapsed3: !this.state.collapsed3,
    });
  }

  toggleExpanded4 = () => {
    this.setState({
      collapsed4: !this.state.collapsed4,
    });
  }


  constructor(props) {
    super(props);
    this.state = {
      matricula: '',
      historial: '',
      promedio: '',
      cursando: '',
      aprobadas: '',
      sujetas: '',
      puede: ''
    };
  }

  componentDidMount() {
    this._loadInitionState().done();
  }
  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('historial');
    if (value !== undefined) {
      var historial = JSON.parse(value)
      this.setState({ historial: historial })
      this.setState({ promedio: historial.PromedioGeneral })
      this.setState({ cursando: historial.Cursando })
      this.setState({ aprobadas: historial.Aprobadas })
      this.setState({ sujetas: historial.Sujeta })
      this.setState({ puede: historial.Puede })
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity onPress={this.toggleExpanded}>

              <View style={[styles.row, { height: this.state.animation }]}>
                <View style={[styles.colorBox, { backgroundColor: '#4481c2' }]}>
                </View>
                <View style={styles.info}>
                  <Text style={styles.headers}>Cursando</Text>
                </View>

                <View style={styles.rowIcon}>
                  <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
                </View>
              </View>

            </TouchableOpacity>

            <Collapsible collapsed={this.state.collapsed} align="center">


              <View style={[styles.row, { height: this.state.animation }]}>
                <FlatList
                  data={this.state.cursando}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) =>
                    <View style={styles.fila}>

                      <View style={styles.materia}>
                        <Text style={styles.headers}>{item.materia}</Text>
                        <Text style={styles.texto}>{item.Profesor}</Text>
                      </View>

                      <View style={styles.faltas}>
                        <Text style={styles.headers}>H</Text>
                        <Text style={styles.texto}>{item.Horas}</Text>
                      </View>

                      <View style={styles.promedio2}>
                        <Text style={styles.headers}>P</Text>
                        <Text style={styles.texto}>{item.Promedio}</Text>
                      </View>

                    </View>
                  }
                  keyExtractor={item => item.materia}
                  ItemSeparatorComponent={this.ListViewItemSeparator}
                />

              </View>

            </Collapsible>
          </View>

          <View>
            <TouchableOpacity onPress={this.toggleExpanded2}>
              <View style={[styles.row, { height: this.state.animation }]}>
                <View style={[styles.colorBox, { backgroundColor: '#87c540' }]}>
                </View>
                <View style={styles.info}>
                  <Text style={styles.headers}> Puede Cursar</Text>
                </View>

                <View style={styles.rowIcon}>
                  <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
                </View>
              </View>

            </TouchableOpacity>

            <Collapsible collapsed={this.state.collapsed2} align="center">
              <View style={[styles.row, { height: this.state.animation }]}>
                <FlatList
                  data={this.state.puede}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) =>
                    <View style={styles.fila}>

                      <View style={styles.materia}>
                        <Text style={styles.headers}>{item.materia}</Text>
                        <Text style={styles.texto}>{item.Profesor}</Text>
                        <Text style={styles.texto}>Semestre: {item.semestre}</Text>
                      </View>

                      <View style={styles.faltas}>
                        <Text style={styles.headers}>H</Text>
                        <Text style={styles.texto}>{item.Horas}</Text>
                      </View>

                      <View style={styles.promedio2}>
                        <Text style={styles.headers}>P</Text>
                        <Text style={styles.texto}>{item.promedio}</Text>
                      </View>

                    </View>
                  }
                  keyExtractor={item => item.materia}
                  ItemSeparatorComponent={this.ListViewItemSeparator}
                />

              </View>
            </Collapsible>
          </View>

          <View>
            <TouchableOpacity onPress={this.toggleExpanded3}>
              <View style={[styles.row, { height: this.state.animation }]}>
                <View style={[styles.colorBox, { backgroundColor: '#fdd900' }]}>
                </View>
                <View style={styles.info}>
                  <Text style={styles.headers}>Aprobadas</Text>
                </View>

                <View style={styles.rowIcon}>
                  <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
                </View>
              </View>

            </TouchableOpacity>

            <Collapsible collapsed={this.state.collapsed3} align="center">
              <View style={[styles.row, { height: this.state.animation }]}>
                <FlatList
                  data={this.state.aprobadas}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) =>
                    <View style={styles.fila}>

                      <View style={styles.materia}>
                        <Text style={styles.headers}>{item.materia}</Text>
                        <Text style={styles.texto}>{item.Profesor}</Text>
                        <Text style={styles.texto}>Semestre: {item.semestre}</Text>
                      </View>

                      <View style={styles.faltas}>
                        <Text style={styles.headers}>H</Text>
                        <Text style={styles.texto}>{item.Horas}</Text>
                      </View>

                      <View style={styles.promedio2}>
                        <Text style={styles.headers}>P</Text>
                        <Text style={styles.texto}>{item.Promedio}</Text>
                      </View>

                    </View>
                  }
                  keyExtractor={item => item.materia}
                  ItemSeparatorComponent={this.ListViewItemSeparator}
                />

              </View>
            </Collapsible>
          </View>


          <View>
            <TouchableOpacity onPress={this.toggleExpanded4}>
              <View style={[styles.row, { height: this.state.animation }]}>
                <View style={[styles.colorBox, { backgroundColor: '#f78d1f' }]}>
                </View>
                <View style={styles.info}>
                  <Text style={styles.headers}>Sujetas a Aprobación</Text>
                </View>

                <View style={styles.rowIcon}>
                  <Image style={{ flex: 1, aspectRatio: .25, resizeMode: 'contain' }} source={require('../src/imgs/dropdown-01.png')}></Image>
                </View>
              </View>

            </TouchableOpacity>

            <Collapsible collapsed={this.state.collapsed4} align="center">
              <View style={[styles.row, { height: this.state.animation }]}>
                <FlatList
                  data={this.state.sujetas}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) =>
                    <View style={styles.fila}>

                      <View style={styles.materia}>
                        <Text style={styles.headers}>{item.Profesor}</Text>
                        <Text style={styles.texto}>{item.semestre}</Text>
                      </View>

                      <View style={styles.faltas}>
                        <Text style={styles.headers}>H</Text>
                        <Text style={styles.texto}>{item.Horas}</Text>
                      </View>

                      <View style={styles.promedio2}>
                        <Text style={styles.headers}>P</Text>
                        <Text style={styles.texto}>{item.Promedio}</Text>
                      </View>

                    </View>
                  }
                  keyExtractor={item => item.materia}
                  ItemSeparatorComponent={this.ListViewItemSeparator}
                />

              </View>
            </Collapsible>
          </View>
        </ScrollView>
        <View style={styles.promedio}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'right', marginRight: 5 }}>Promedio general: {this.state.promedio}</Text>
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
  info: {
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
  materia: {
    width: 190,
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
  faltas: {
    width: 65,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  fila: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  promedio2: {
    width: 65,
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
  texto: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
    marginBottom: 15
  }
});