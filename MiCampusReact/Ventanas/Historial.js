import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Historial extends React.Component {
  render() {
    return (
      <View>
        <View>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Historial Académico</Text>
        </View>
        <View>
          <Text style={{color:'black', fontSize:15}}>Promedio general</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.colorBox1}>
          </View>
          <View style={styles.materia}>
            <Text>Cursando</Text>
          </View>
          <View style={styles.rowIcon}>
            <Image source={require('../src/imgs/dropdown-01.png')}></Image>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    marginTop: 30,
    marginLeft: 22,
    flexDirection: 'row',
    alignContent: 'center',
  },
  materia:{
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
  colorBox1:{
    width: 65,
    height: 100,
    backgroundColor:'#4481c2',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rowIcon:{
    width:65,
    height:100,
    borderTopRightRadius:10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 20,
    padding: 10,
    color: 'black'
  },
});