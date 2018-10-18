import React from 'react';
import { StyleSheet, Text, View , ImageBackground, screenWidth } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground style={styles.backgroundImage} source={require('../src/imgs/background.jpg')}>
        </ImageBackground>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  backgroundImage: {
    width: screenWidth,
    heigth: 300,
    alignItems:'center',
    justifyContent: 'flex-end',
  }
});
