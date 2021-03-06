import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { StatusColorPicker } from 'react-native-status-color-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class HorarioRow extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            colors: ['#ffffff',"#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"],
            selectedColor: '#ffffff',
        };
    }

    ok = data => {
    this.setState({ selectedColor: data.selectedColor});
    this.close();
  };

  close = () => {
    this.setState({ visible: false });
  };

  _onPress = () => {
    this.setState({ visible: true })
        
    };


    render() {
        return (
            <View>
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.fila}>
                <View style={styles.materia}>
                  <Text style={styles.headers}>{this.props.materia}</Text>
                  <Text style={styles.profesor}>{this.props.profesor}</Text>
                </View>
                <View style={[styles.salon, { backgroundColor: this.state.selectedColor }]}>
                  <Text style={styles.numero}>{this.props.salon}</Text>
                  <Text style={styles.hora}>{this.props.horario}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <StatusColorPicker
            visible={this.state.visible}
            colors={this.state.colors}
            selectedColor={this.state.selectedColor}
            onOk={this.ok}
            onCancel={this.close}/>
            </View>
        );
    }
}

export default HorarioRow;


const styles = StyleSheet.create({
  fila: {
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 22,
    flexDirection: 'row',
  },
  materia: {
    height: hp('15%'),
    width: wp('58%'),
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  salon: {
    height: hp('15%'),
    width: wp('30%'),
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  headers: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
  },
  numero: {
    fontSize: 20,
    textAlign: 'center',
  },
  profesor: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 2,
    marginLeft: 10,
  },
  hora: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 2,
    fontSize: 10,
  },
});