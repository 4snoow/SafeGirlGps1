import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'
import bgImage from '../../assets/menu.png'

export default function Login(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Button
                buttonStyle={styles.button}
                title=''
                onPress={()=>props.navigation.navigate('Alerta')}>
            </Button>
            <View style={styles.container2}>
            <Button
                buttonStyle={styles.buttons}
                title=''
                onPress={()=>props.navigation.navigate('Mapa')}>
            </Button>
            <Button
                buttonStyle={styles.buttons}
                title=''
                onPress={()=>props.navigation.navigate('Policia')}>
            </Button>
            <Button
                buttonStyle={styles.buttons}
                title=''
                onPress={()=>props.navigation.navigate('Assistente')}>
            </Button>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      

    //   borderStyle: 'solid',
    //   borderColor: 'black',
    //   borderWidth: 1
    },
    container2: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,

    //   borderStyle: 'solid',
    //   borderColor: 'black',
    //   borderWidth: 1
    },
    backgroundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: null,
        width:'100%',
    },
    button:{
        backgroundColor: 'rgba(198,48,41,0.0)',
        borderRadius: 80,
        padding: 70,
        marginTop: 190,

        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1
    },
    buttons:{
        backgroundColor: 'rgba(198,48,41,0.0)',
        borderRadius: 80,
        padding: 60,
        marginRight: 10,
        marginTop: 100
    }
  });