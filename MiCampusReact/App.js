import React from 'react';
import { StyleSheet, View, Image, Button, TextInput, AsyncStorage } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import Login from './Ventanas/Login';
import Home from './Ventanas/Home';
import Boleta from './Ventanas/Boleta';
import Historial from './Ventanas/Historial';
import Horario from './Ventanas/Horario';
import Perfil from './Ventanas/Perfil';
import Tutores from './Ventanas/Tutores';
import Fondo from './Ventanas/Fondo';
import Configuracion from './Ventanas/Configuracion';
import Menu from './Ventanas/Menu';

const MiCampus = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null, } },
  Home: { screen: Home, navigationOptions: { header: null, } },
  Boleta: {
    screen: Boleta, navigationOptions: {
      title: 'Boleta',
    }
  },
  Horario: {
    screen: Horario, navigationOptions: {
      title: 'Horario',
    }
  },
  Historial: {
    screen: Historial, navigationOptions: {
      title: 'Historial',
    }
  },
  Perfil: {
    screen: Perfil, navigationOptions: {
      title: 'Perfil',
    }
  },
  Tutores: {
    screen: Tutores, navigationOptions: {
      title: 'Tutores',
    }
  },
  Fondo: {
    screen: Fondo, navigationOptions: {
      title: 'Fondo',
    }
  },
  Configuracion: {
    screen: Configuracion, navigationOptions: {
      title: 'Configuración',
    }
  },
  Menu: {
    screen: Menu, navigationOptions: { header: null, }
  }
});
export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  _IraBoleta = () => {
    this.props.navigation.navigate('Boleta');
  }
  _LogOut = () => {
    AsyncStorage.removeItem('usuario')
    this.props.navigation.navigate('Login');

  }
  render() {
    return (
      <MiCampus />
    );
  }
}
