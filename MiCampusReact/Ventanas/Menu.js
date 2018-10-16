import React from 'react';
import{Button} from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Academico</Text>
        </View>
                
        <View>
          style{
            {
              borderBottomColor: "#ffcd00",
              borderBottomWidth: 1,
            }
          }
        </View>
        
        <View style={styles.container}>
          <Text>Financiero</Text>
        </View>

        <View>
          style{
            {
              borderBottomColor: "#ffcd00",
              borderBottomWidth: 1,
            }
          }
        </View>
      </View>  
    );
  }
}

class BackgroundImage extends Component{
  render(){
    <Image source={require(background.jpg)}>
      {this.props.children}
    </Image>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover'
  }
});
