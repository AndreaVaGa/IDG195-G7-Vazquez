import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Carousel from '../Utils/carrousel';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { StatusColorPicker } from 'react-native-status-color-picker';

export default class Horario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horario: '',
      lunes: '',
      martes: '',
      miercoles: '',
      jueves: '',
      viernes: '',
      sabado: '',
      visible: false,
      colors: ["#F44336", "#E91E63"],
      selectedColor: '#F44336'
    };
  }

  ok = data => {
    this.setState({ selectedColor: data.selectedColor, text: data.text });
    this.close();
  };

  close = () => {
    this.setState({ visible: false });
  };

  componentDidMount() {
    this._loadInitionState().done();
  }

  _loadInitionState = async () => {
    var value = await AsyncStorage.getItem('horario');
    if (value !== null) {
      var horario = JSON.parse(value)
      this.setState({ lunes: horario.Lunes })
      this.setState({ martes: horario.Martes })
      this.setState({ miercoles: horario.Miercoles })
      this.setState({ jueves: horario.Miercoles })
      this.setState({ viernes: horario.Viernes })
      this.setState({ sabado: horario.Sabado })

    }
  }

  render() {
    return (

      <Carousel >
        <View>
          <TouchableOpacity onPress={() => this.setState({ visible: true })}>
          <View style={{ backgroundColor: this.state.selectedColor }}>
            <Text style={styles.semana}>Lunes</Text>
          </View>
          </TouchableOpacity>
          <StatusColorPicker
          visible={this.state.visible}
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          onOk={this.ok}
          onCancel={this.close}/>
          <FlatList
            data={this.state.lunes}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={styles.fila}>
                <View style={styles.materia}>
                  <Text style={styles.headers}>{item.materia}</Text>
                  <Text style={styles.profesor}>{item.profesor}</Text>
                </View>
                <View style={styles.salon}>
                  <Text style={styles.numero}>{item.salon}</Text>
                  <Text style={styles.hora}>{item.horario}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.materia}
            ItemSeparatorComponent={this.ListViewItemSeparator}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#32CD32' }}>
            <Text style={styles.semana}>Martes</Text>
          </View>
          <FlatList
            data={this.state.martes}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={styles.fila}>
                <View style={styles.materia}>
                  <Text style={styles.headers}>{item.materia}</Text>
                  <Text style={styles.profesor}>{item.profesor}</Text>
                </View>
                <View style={styles.salon}>
                  <Text style={styles.numero}>{item.salon}</Text>
                  <Text style={styles.hora}>{item.horario}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.materia}
            ItemSeparatorComponent={this.ListViewItemSeparator}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#DAA520' }}>
            <Text style={styles.semana}>Miercoles</Text>
          </View>
          <FlatList
            data={this.state.miercoles}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={styles.fila}>
                <View style={styles.materia}>
                  <Text style={styles.headers}>{item.materia}</Text>
                  <Text style={styles.profesor}>{item.profesor}</Text>
                </View>
                <View style={styles.salon}>
                  <Text style={styles.numero}>{item.salon}</Text>
                  <Text style={styles.hora}>{item.horario}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.materia}
            ItemSeparatorComponent={this.ListViewItemSeparator}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#DB7093' }}>
            <Text style={styles.semana}>Jueves</Text>
          </View>
          <FlatList
            data={this.state.jueves}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={styles.fila}>
                <View style={styles.materia}>
                  <Text style={styles.headers}>{item.materia}</Text>
                  <Text style={styles.profesor}>{item.profesor}</Text>
                </View>
                <View style={styles.salon}>
                  <Text style={styles.numero}>{item.salon}</Text>
                  <Text style={styles.hora}>{item.horario}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.materia}
            ItemSeparatorComponent={this.ListViewItemSeparator}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#663399' }}>
            <Text style={styles.semana}>Viernes</Text>
          </View>
          <FlatList
            data={this.state.viernes}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={styles.fila}>
                <View style={styles.materia}>
                  <Text style={styles.headers}>{item.materia}</Text>
                  <Text style={styles.profesor}>{item.profesor}</Text>
                </View>
                <View style={styles.salon}>
                  <Text style={styles.numero}>{item.salon}</Text>
                  <Text style={styles.hora}>{item.horario}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.materia}
            ItemSeparatorComponent={this.ListViewItemSeparator}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#CD5C5C' }}>
            <Text style={styles.semana}>Sabado</Text>
          </View>
          <FlatList
            data={this.state.sabado}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={styles.fila}>
                <View style={styles.materia}>
                  <Text style={styles.headers}>{item.materia}</Text>
                  <Text style={styles.profesor}>{item.profesor}</Text>
                </View>
                <View style={styles.salon}>
                  <Text style={styles.numero}>{item.salon}</Text>
                  <Text style={styles.hora}>{item.horario}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.materia}
            ItemSeparatorComponent={this.ListViewItemSeparator}
          />
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
    marginBottom: 5,
    marginLeft: 22,
    flexDirection: 'row',
  },
  materia: {
    width: 240,
    height: 100,
    justifyContent: 'center',
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
    justifyContent: 'center',
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
