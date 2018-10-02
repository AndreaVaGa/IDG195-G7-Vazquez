import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
       <Image style={styles.img} source={require('./src/imgs/flama.png')}/>
        <Text style={styles.text}>Usuario</Text>
        <Text style={styles.text}>Contraseña</Text>
        <View style={styles.button}>
        <Button  
        title="Ingresar"  
        color="#FFFFFF" 
        onPress={(this._onPress)} 
        accessibilityLabel="Tap on Me" />
        </View>>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdcc01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20, 
    padding: 10
    
  },
  img: {
    width: '30%',
    height: '30%',
    marginBottom: 50,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius:10,


  }
  
    
});
