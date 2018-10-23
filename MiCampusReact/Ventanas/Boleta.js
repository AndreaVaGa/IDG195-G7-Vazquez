import React, { Component } from 'react';
import { Platform, ListView, StyleSheet, Text, View, AsyncStorage} from 'react-native';

var maestros = [1, 2, 3];

class ListViewDemo extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(maestros),
      boleta: '',
      materia:'',
      profesor:'',

    };
  }
  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('boleta');
    if (value !== undefined) {
      var boleta = JSON.parse(value);
      this.setState({ boleta: boleta });
      this.setState({ materia: boleta.materia1.materia});
      this.setState({ profesor: boleta.materia1.profesor});
    }
  }
  renderRow() {
    return (
      <View style={styles.container}>


        <View style={styles.fila}>

          <View style={styles.materia}>
            <Text style={styles.headers}>{this.state.materia}</Text>
            <Text style={styles.texto}>{this.state.profesor}</Text>
          </View>

          <View style={styles.faltas}>
            <Text style={styles.headers}>F</Text>
            <Text style={styles.texto}>0</Text>
          </View>

          <View style={styles.promedio}>
            <Text style={styles.headers}>P</Text>
            <Text style={styles.texto}>10</Text>
          </View>

        </View>

      </View>
    );
  }


  render() {
    return (
      <ListView dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}>
      </ListView>
    );
  }
}

export default ListViewDemo;

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
  headers: {
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