import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

class BoletaRow extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true
        };
    }
    _changeHeight = () => {
        if (this.state.collapsed) {
            this._height.setNativeProps({ height: 170 });
            this._height2.setNativeProps({ height: 170 });
            this._height3.setNativeProps({ height: 170 });
        }
        else {
            this._height.setNativeProps({ height: 120 });
            this._height2.setNativeProps({ height: 120 });
            this._height3.setNativeProps({ height: 120 });
        }
        this.state.collapsed = !this.state.collapsed;
    }

    //se llama la funcion desde el renglon individualmente
    _onPress = () => {
        this._changeHeight()
        //this.props.onPressItem(this.props.materia);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.fila}>
                    <View style={styles.materia} ref={component => this._height = component}>
                        <Text style={styles.headers}>{this.props.materia}</Text>
                        <Text style={styles.texto}>{this.props.profesor}</Text>
                    </View>
                    <View style={styles.faltas} ref={component => this._height2 = component}>
                        <Text style={styles.headers}>F</Text>
                        <Text style={styles.texto}>{this.props.faltas}</Text>
                    </View>
                    <View style={styles.promedio} ref={component => this._height3 = component}>
                        <Text style={styles.headers}>P</Text>
                        <Text style={styles.texto}>{this.props.calif}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default BoletaRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },
    fila: {
        marginTop: 30,
        marginLeft: 22,
        flexDirection: 'row',
    },
    materia: {
        width: 200,
        height: 120,
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
    faltas: {
        width: 65,
        height: 120,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },
    promedio: {
        width: 65,
        height: 120,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },
    headers: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
    },
    texto: {
        textAlign: 'center',
        color: '#333333',
        margin: 5
    }
});
