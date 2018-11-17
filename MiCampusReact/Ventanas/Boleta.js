import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  ScrollView,
  Switch,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import MyListItem from '../Ventanas/MyListItem'

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
      this._height.setNativeProps({ height: 150 });
      this._height2.setNativeProps({ height: 150 });
      this._height3.setNativeProps({ height: 150 });
    }
    else {
      this._height.setNativeProps({ height: 100 });
      this._height2.setNativeProps({ height: 100 });
      this._height3.setNativeProps({ height: 100 });
    }

    collapsed = !collapsed;
  }

  _keyExtractor = (item, index) => item.matricula

  _onPressItem = (id) => {
    alert(id)
    //this.changeHeight()
  };

  _renderItem = ({ item }) => (
    <MyListItem
      onPressItem={this._onPressItem}
      matricula={item.matricula}
      materia={item.materia}
      calif={item.calif}
      profesor={item.profesor}
      faltas={item.faltas}
      height='150'
    />
  );

  render() {
    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
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
    margin: 5
  }
});

