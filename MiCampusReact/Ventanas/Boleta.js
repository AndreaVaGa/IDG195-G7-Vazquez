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
import { Constants } from 'expo';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

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

  state = {
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <View style={styles.container} >
            
        
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>

          <View>

          <TouchableOpacity onPress={this.toggleExpanded}>


            <View style={styles.fila}>

              <View style={styles.materia}>
                <Text style={styles.headers}>{item.materia}</Text>
                <Text style={styles.texto}>{item.profesor}</Text>
              </View>

              <View style={styles.faltas}>
                <Text style={styles.headers}>F</Text>
                <Text style={styles.texto}>{item.faltas}</Text>
              </View>

              <View style={styles.promedio}>
                <Text style={styles.headers}>P</Text>
                <Text style={styles.texto}>{item.calif}</Text>
              </View>
            </View>


            </TouchableOpacity>

            <Collapsible collapsed={this.state.collapsed} align="center">

             <View style={styles.fila}>

              <View style={styles.materia}>
                <Text style={styles.headers}></Text>
                <Text style={styles.texto}></Text>
              </View>

              <View style={styles.faltas}>
                <Text style={styles.headers}>F</Text>
                <Text style={styles.texto}></Text>
              </View>

              <View style={styles.promedio}>
                <Text style={styles.headers}>P</Text>
                <Text style={styles.texto}></Text>
              </View>
            </View>

            <View style={styles.fila}>

              <View style={styles.materia}>
                <Text style={styles.headers}></Text>
                <Text style={styles.texto}></Text>
              </View>

              <View style={styles.faltas}>
                <Text style={styles.headers}>F</Text>
                <Text style={styles.texto}></Text>
              </View>

              <View style={styles.promedio}>
                <Text style={styles.headers}>P</Text>
                <Text style={styles.texto}></Text>
              </View>
            </View>

            <View style={styles.fila}>

              <View style={styles.materia}>
                <Text style={styles.headers}></Text>
                <Text style={styles.texto}></Text>
              </View>

              <View style={styles.faltas}>
                <Text style={styles.headers}>F</Text>
                <Text style={styles.texto}></Text>
              </View>

              <View style={styles.promedio}>
                <Text style={styles.headers}>P</Text>
                <Text style={styles.texto}></Text>
              </View>
            </View>
            

            </Collapsible>

            </View>

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
 
