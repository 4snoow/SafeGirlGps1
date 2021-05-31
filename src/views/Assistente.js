import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Linking } from 'react-native';
import bgImage from '../../assets/menu.png'

export default function Assistente(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Text onPress={()=>{Linking.openURL('tel:180');}} style={styles.funcNavText}>180</Text>
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
    },
    funcNavText:{
        backgroundColor: 'rgb(198,48,41)',
        borderRadius: 60,
        padding: 30,
        color: 'white',
        fontSize:16
    }
  });