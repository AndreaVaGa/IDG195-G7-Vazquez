import React from 'react';
import { StyleSheet, Text, View , ImageBackground, screenWidth } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground style={styles.backgroundImage} source={require('../src/imgs/background.jpg')}>
        </ImageBackground>
        <Text style={style.title}>Académico</Text>
        <View style={style.container}>
          <Button onPress={() => {alert.alert('Tapped Academico')}}>
            <Image style={style.icon} source={require("../src/imgs/historial.png")}></Image>
          </Button>
          <Button onPress={() => {alert.alert('Tapped Academico')}}>
            <Image style={style.icon} source={require("../src/img/boleta.png")}></Image>
          </Button>
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  icon:{
    width: 100,
    heigth: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white'
  },
  backgroundImage: {
    width: screenWidth,
    heigth: 300,
    alignItems:'center',
    justifyContent: 'flex-end',
  }
});
