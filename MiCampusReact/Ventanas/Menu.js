import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Academico</Text>
        </View>

        <Image source={require('../src/imgs/background.jpg')}>
          style={styles.backgroundImage}>
          {this.props.children}
        </Image>
      </View>  
    );
  }
}

class BackgroundImage extends React.Component {
  render() {
    <Image source={require('../src/imgs/background.jpg')}>
      {this.props.children}
    </Image>
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
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});
