
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
  
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 500);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.text2}>{display}</Text>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic = { uri: 'https://i2.wp.com/thehappening.com/wp-content/uploads/2016/02/boliche-cdmx.jpg?fit=1024%2C694&ssl=1'};
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Hello World!</Text>
        <View style={{backgroundColor:'#a377ad', margin: 20}}>
        <Image source={pic} style={{width: 240, height: 140, margin: 40}}/>
        </View>
        <Blink  text='I love Bowling'/>
        <Blink text='Bowling is my passion'/>
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🎳').join(' ')}
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text1: {
    color: 'purple',
    fontSize:30,
    fontWeight: 'bold'

  },
  text2: {
    color: 'blue',
    fontSize: 15,
  }
  
});
