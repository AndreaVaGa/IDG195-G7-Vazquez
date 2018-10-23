import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  SearchBar
} from 'react-native';


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
      this.setState({data: boleta.boleta})

      //this.setState({ promedio: historial.PromedioGeneral })
    }
  }
  

ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          Boleta
        </Text>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.materia}</Text>
            <Text style={styles.email}>{item.profesor}</Text>
            <Text>{item.calif}</Text>
            <Text>{item.faltas}</Text>
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
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'green'
  }

});
  