import React from 'react';
import { StyleSheet, View, Image, Button, Text, AsyncStorage} from 'react-native';
import App from '../App';




export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }
  _IraBoleta = () => {
    this.props.navigation.navigate('Boleta');
  }
  _IraHistorial = () => {
    this.props.navigation.navigate('Historial');
  }

  _LogOut = () =>{
      AsyncStorage.removeItem('usuario')
      this.props.navigation.navigate('Login');
   
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text} Home/>

        <View style={styles.button}>
          <Button
            title="Perfil"
            color="#FFFFFF"
            onPress={(this._IraBoleta)}
            accessibilityLabel="Tap on Me" />
        </View>
        <View style={styles.button}>
          <Button
            title="Boleta"
            color="#FFFFFF"
            onPress={(this._IraBoleta)}
            accessibilityLabel="Tap on Me" />
        </View>
        <View style={styles.button}>
          <Button
            title="Horario"
            color="#FFFFFF"
            onPress={(this._IraBoleta)}
            accessibilityLabel="Tap on Me" />
        </View>
        <View style={styles.button}>
          <Button
            title="Historial"
            color="#FFFFFF"
            onPress={(this._IraHistorial)}
            accessibilityLabel="Tap on Me" />
        </View>
        
        <View style={styles.button}>
          <Button
            title="Tutores"
            color="#FFFFFF"
            onPress={(this._IraBoleta)}
            accessibilityLabel="Tap on Me" />
        </View>
        <View style={styles.button}>
          <Button
            title="Configuración"
            color="#FFFFFF"
            onPress={(this._IraBoleta)}
            accessibilityLabel="Tap on Me" />
        </View>
        <View style={styles.button}>
          <Button
            title="Log Out"
            color="#FFFFFF"
            onPress={(this._LogOut)}
            accessibilityLabel="Tap on Me" />
        </View>
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
    fontSize: 30,
    padding: 10

  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 20


  }


});
