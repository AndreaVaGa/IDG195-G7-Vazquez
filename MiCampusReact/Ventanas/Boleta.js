import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  AsyncStorage,
} from 'react-native';
import MyListItem from '../Utils/boleta_row'

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

  _keyExtractor = (item, index) => item.matricula

  _onPressItem = (id) => {
    alert(id)
  };

  _renderItem = ({ item }) => (
    <MyListItem
      onPressItem={this._onPressItem}
      matricula={item.matricula}
      materia={item.materia}
      calif={item.calif}
      profesor={item.profesor}
      faltas={item.faltas}
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
  }
});

