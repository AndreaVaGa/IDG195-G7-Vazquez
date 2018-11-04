import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  ScrollView,
  Switch,
  TouchableOpacity
} from 'react-native';

var collapsed = true;

class ListViewDemo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }
  componentDidMount() {
    this._loadInitionState().done();
  }
  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('boleta');
    if (value !== undefined) {
      var boleta = JSON.parse(value)
      this.setState({ data: boleta.boleta })
    }
  }

  changeHeight = () => {

  if (collapsed) {
    this._height.setNativeProps({height: 150});
    this._height2.setNativeProps({height: 150});
    this._height3.setNativeProps({height: 150});
  }
  else {
    this._height.setNativeProps({height: 100});
    this._height2.setNativeProps({height: 100});
    this._height3.setNativeProps({height: 100});
  }

  collapsed=!collapsed;
}

  render() {
    return (
      <View style={styles.container} >
            
        
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>


          <TouchableOpacity onPress={this.changeHeight}>


            <View style={styles.fila}>

              <View style={styles.materia} ref={component => this._height = component}>
                <Text style={styles.headers}>{item.materia}</Text>
                <Text style={styles.texto}>{item.profesor}</Text>
              </View>

              <View style={styles.faltas} ref={component => this._height2 = component}>
                <Text style={styles.headers}>F</Text>
                <Text style={styles.texto}>{item.faltas}</Text>
              </View>

              <View style={styles.promedio} ref={component => this._height3 = component}>
                <Text style={styles.headers}>P</Text>
                <Text style={styles.texto}>{item.calif}</Text>
              </View>
            </View>


            </TouchableOpacity>


          }
          keyExtractor={item => item.materia}
          ItemSeparatorComponent={this.ListViewItemSeparator}
        />

      </View>
    );
  }

}
export default ListViewDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
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
 
