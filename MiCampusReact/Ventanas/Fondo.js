import React from 'react';
import { StyleSheet, Text, ScrollView,TextInput, View, Image, Header, ImageBackground, screenHeight, screenWidth } from 'react-native';

export default class App extends React.Component {
    render() {
      return (
      <ScrollView> 
      <View style={styles.container}>
      <View style={styles.fila}>
        <View style={styles.columna}>
          <Image source={{uri:'http://i.huffpost.com/gen/1423740/images/o-DISCOTECA-facebook.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'https://2.bp.blogspot.com/-11bGWXmao30/WDdmnt8UCwI/AAAAAAAAAHI/DnniclkiXHAanxci0adU1ZmWRggOpbmTgCLcB/s1600/Backgrounds_Black_wallpaper_with_sneakers_078569_.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'http://imagenpng.com/wp-content/uploads/2017/07/portadas-para-youtube-2560x1440-HD-5.png'}}style={styles.imagenPortada}/>
          <Image source={{uri:'http://4.bp.blogspot.com/-jMKc1eCtMJ4/UPWRgJKb23I/AAAAAAAAFDw/CB75tgeQGYQ/s1600/FotoPortada_buena+(7).jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'http://descargaleando.com/wp-content/uploads/2017/03/Imagenes-hipster-para-portada-6.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'http://webtoolfeed.files.wordpress.com/2012/10/leaves1.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'http://www.peceswiki.com/Imagenes/imagenes-de-peces.jpg'}}style={styles.imagenPortada}/>
        </View>
        <View style={styles.columna}>
          <Image source={{uri:'https://k42.kn3.net/B85BFAD35.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'http://www.plataformalavarden.gob.ar/wp-content/uploads/2017/06/arpegios-guitarra-1400x787.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'https://i.ytimg.com/vi/543tcFh9vAc/maxresdefault.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'http://4.bp.blogspot.com/-ziW5TbJ9fIY/UjibjOlCXnI/AAAAAAAADQw/opr-ribQYBc/s1600/facebook-61-luna-mar.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'https://verfotosdecarros.files.wordpress.com/2014/08/chevroled182-7.jpg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'https://www.crowdbabble.com/wp-content/uploads/2017/12/instagram-bot-instagram-automation-instagram-bots.jpeg'}}style={styles.imagenPortada}/>
          <Image source={{uri:'https://cdn.civitatis.com/francia/paris/guia/paris-en-dos-dias.jpg'}}style={styles.imagenPortada}/>
        </View>
        </View>
      </View>
      </ScrollView> 
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
    alignItems: 'center'  
  },
  imagenPortada: {
    width: 180, 
    height: 180,
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  fila: {
    flexDirection: 'row',
  },
  columna: {
    alignItems: 'center',
  },
});


