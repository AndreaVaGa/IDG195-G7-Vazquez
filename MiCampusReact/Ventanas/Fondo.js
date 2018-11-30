import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.fila}>
            <View style={styles.columna}>
              <Image source={require("../src/imgs/portada/a.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/b.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/c.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/d.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/e.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/f.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/g.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/h.jpg")} style={styles.imagenPortada} />
            </View>
            <View style={styles.columna}>
              <Image source={require("../src/imgs/portada/i.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/j.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/k.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/l.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/m.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/n.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/o.jpg")} style={styles.imagenPortada} />
              <Image source={require("../src/imgs/portada/p.jpg")} style={styles.imagenPortada} />
            </View>
          </View>
        </View>
      </ScrollView>
    <View style={styles.cuadro}>
      <TouchableOpacity>
      <Image source={require("../src/imgs/fondobtn.png")} style={styles.aceptar}></Image>
    </TouchableOpacity>
    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  imagenPortada: {
    height: hp('25%'),
    width: wp('45%'),
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  fila: {
    flexDirection: 'row',
  },
  columna: {
    alignItems: 'center',
    marginBottom: 100,
  },
  cuadro: {
    backgroundColor: '#191919',
    bottom: 0,
    position: 'absolute',
    padding: 7,
    width: '100%',
    alignItems: "center",
  },
  aceptar: {
    height: hp('10%'),
    width: wp('50%'),
  }
});


