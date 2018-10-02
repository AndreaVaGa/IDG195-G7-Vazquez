
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView, FlatList } from 'react-native';

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
  _onPress() {
    Alert.alert('You tapped the button!')
  }

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic = { uri: 'https://i2.wp.com/thehappening.com/wp-content/uploads/2016/02/boliche-cdmx.jpg?fit=1024%2C694&ssl=1'};
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text1}>Hello World!</Text>
        <View style={{backgroundColor:'#a377ad', margin: 100}}>
          <Image source={pic} style={{width: 240, height: 140, margin: 40}}/>
        </View>
        <Blink  text='I love Bowling'/>
        <Blink text='Bowling is my passion'/>
        <Text style={styles.text3}>¿Qué necesitamos para jugar?</Text>
        <FlatList 
          data={[
            {key: 'Bola'},
            {key: 'Zapatos'},
            {key: 'Toallita'},
            {key: 'Puff'},
          ]}
          renderItem={({item}) => <Text style={styles.text4}>{item.key}</Text>}
        />
        <View style={styles.button}>
        <Button  
        title="Tap"  
        color="#FFFFFF" 
        onPress={(this._onPress)} />
        </View>>
      </View>
      </ScrollView>
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
    fontSize:50,
    fontWeight: 'bold',
    marginTop: 60

  },
  
  text2: {
    color: 'blue',
    fontSize: 35,
    marginBottom: 15
  },
  text3: {
    color: 'purple',
    fontSize:20,
    fontWeight: 'bold',
    marginTop: 10
  },
  text4: {
    color: '#530595',
    fontSize:20,
    marginTop: 10
  },
  button: {
    backgroundColor: 'steelblue',
    width: '35%',
    margin: 30
  }
});
