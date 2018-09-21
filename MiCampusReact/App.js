import React from 'react';
import { StyleSheet, Text, View, Image, button, Button} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
       <Image style={styles.img} source={require('./src/imgs/flama.png')}/>
        <Text style={styles.text}>Usuario</Text>
        <Text style={styles.text}>Contraseña</Text>
        <Button style={styles.button}  
        title="Ingresar"  
        color="#FFFFFF" 
        onPress={this._onPress} 
        accessibilityLabel="Tap on Me" />
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
    backgroundColor: '#C0C0C0',
    borderRadius:10,


  }
  
    
});
