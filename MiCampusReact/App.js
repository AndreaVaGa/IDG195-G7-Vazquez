import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      password: ''
    };
  }
  

  _getAlumnos= () => {
    
    return fetch('http://138.68.231.116:5000/alumnos')
    
      .then((response) => response.json())
      .then((responseJson) => {
        var usuario= this.state.usuario.toLocaleLowerCase()
        var password= this.state.password
        var test = responseJson.find(function (obj) { return obj.matricula === usuario && obj.password=== password });
        return test;
      })
      .then((object) => {
        if (object === undefined) {
          alert('Usuario o contraseña incorrecta')
        } else {
          alert(object.matricula + ' ' + object.nombre)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
       
       <Image style={styles.img} source={require('./src/imgs/flama.png')}/>
        <TextInput placeholder="Usuario" 
        style={styles.text} onChangeText={(usuario) => this.setState({usuario})} />
        <TextInput placeholder="Contraseña" secureTextEntry={true}
        style={styles.text} onChangeText={(password) => this.setState({password})}/>
        <View style={styles.button}>
        <Button  
        title="Ingresar"  
        color="#FFFFFF" 
        onPress={(this._getAlumnos)} 
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
