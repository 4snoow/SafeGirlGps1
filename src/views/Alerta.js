import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import bgImage from '../../assets/background.png'

export default function Alerta(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Text>Em breve...</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: null,
        width:'100%',
    }
  });