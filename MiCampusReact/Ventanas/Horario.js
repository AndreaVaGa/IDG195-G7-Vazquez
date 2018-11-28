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
import HorarioRow from '../Utils/horario_row';

class Horario extends React.Component {
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

  _onPressItem = (value) => {
    alert(value)
  };

  _renderItem = ({ item }) => (
    <HorarioRow
      onPressItem={this._onPressItem}
      matricula={item.matricula}
      horario={item.horario}
      materia={item.materia}
      salon={item.salon}
      profesor={item.profesor}
    />
  );

  render() {
    return (
      <Carousel >
        <View>
          <View style={{ backgroundColor: '#32CD32' }}>
            <Text style={styles.semana}>Lunes</Text>
          </View>
          <FlatList
            data={this.state.lunes}
            extraData={this.state}
            keyExtractor={(item, index) => item.materia}
            renderItem={this._renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#32CD32' }}>
            <Text style={styles.semana}>Martes</Text>
          </View>
          <FlatList
            data={this.state.martes}
            extraData={this.state}
            keyExtractor={(item, index) => item.materia}
            renderItem={this._renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#DAA520' }}>
            <Text style={styles.semana}>Miercoles</Text>
          </View>
          <FlatList
            data={this.state.miercoles}
            extraData={this.state}
            keyExtractor={(item, index) => item.materia}
            renderItem={this._renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#DB7093' }}>
            <Text style={styles.semana}>Jueves</Text>
          </View>
          <FlatList
            data={this.state.jueves}
            extraData={this.state}
            keyExtractor={(item, index) => item.materia}
            renderItem={this._renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#663399' }}>
            <Text style={styles.semana}>Viernes</Text>
          </View>
          <FlatList
            data={this.state.viernes}
            extraData={this.state}
            keyExtractor={(item, index) => item.materia}
            renderItem={this._renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View>
          <View style={{ backgroundColor: '#CD5C5C' }}>
            <Text style={styles.semana}>Sabado</Text>
          </View>
          <FlatList
            data={this.state.sabado}
            extraData={this.state}
            keyExtractor={(item, index) => item.materia}
            renderItem={this._renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </Carousel>
    );
  }
}

export default Horario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  semana: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    margin: 10
  }

});
