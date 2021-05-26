import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import { Button, Dimensions, StyleSheet, Text, View,Alert } from 'react-native';
import MapView, {Heatmap, Marker} from 'react-native-maps';
import Marcador from './src/components/Marcador';
import MapButton from './src/components/MapButton';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';

export default function App() {



  /*Solicitar localização*/ 
  const [origin, setOrigin] = useState( null);
  const [destination, setDestination] = useState( null);

  useEffect(()=>{
    (async function(){
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    let location = await Location.getCurrentPositionAsync({enableHighAcurracy:true});
  } else {
    throw new Error('Localização não garantida');
  }

    })();
  }, []);
  /*Solicitar localização*/ 


  return (
    <View style={styles.container}>
    
      <MapButton
        style ={{top:40, right:180}}
      />

      <MapView
      showsUserLocation={true}
      zoomEnabled={true}
      followsUserLocation={true}
      style={styles.mapStyle}
          initialRegion={{
            latitude: -12.255476525161434,
            longitude: -38.96073387038091,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          
      >
        <Marcador/>
     
      
      <MapViewDirections
      
      
      
      
      />













        <Marker 
       coordinate={{
        latitude:-12.279680984796018, 
        longitude:-38.973530118484966,
      }}
      title ="Módulo Policial do Feira X"
      description ="R. G, 10 - Muchila"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

        <Marker 
         coordinate={{
          latitude:-12.271459960959438, 
          longitude:-38.951070291826,
          
        }}
        title ="Delegacia da mulher - Adenir Falcão"
        description ="R. Adenil Falcão, 1121-1167 - Brasília"
        icon = {{
          uri: "https://img.icons8.com/color/110/police"
        }}
        />

      <Marker 
       coordinate={{
        latitude:-12.277739682387208, 
        longitude:-38.94653655592664,
        
      }}
      title ="Complexo Policial Investigador Bandeira. Polícia Civil."
      description ="Brasília, Feira de Santana"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.255475205755436, 
        longitude:-38.94423701516107,
        
      }}
      title ="Modulo Policial"
      description ="Av. Getúlio Vargas - Centro"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.252307806282571,  
        longitude:-38.95487273517217,
        
      }}
      title ="DEAM - Delegacia Especializada de Atendimento a Mulher "
      description ="R. Leolinda Bacelar Lima, 887"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.251331102140774, 
        longitude:-38.952796644754336,
        
      }}
      title ="Polícia Federal"
      description ="Av. Maria Quitéria, 1860 - Centro"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.242651765648365, 
        longitude:-38.972452222711794,
        
      }}
      title ="Complexo de Delegacias de Policia "
      description ="R. Landulfo Alves, s/n - Sobradinho"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.25529516856273, 
        longitude:-38.96530921834025,
        
      }}
      title ="Módulo Policial"
      description ="Av. Getúlio Vargas, 20 - Centro"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.240334021428058, 
        longitude:-38.953496121472945,
        
      }}
      title ="CPRL - Comando de Policiamento Regional Leste (PMBA)"
      description ="Av. Maria Quitéria, 3159 - Queimadinha"
      icon = {{
        uri: "https://img.icons8.com/color/polic110/e"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.240334021428058, 
        longitude:-38.953496121472945,
        
      }}
      title ="CPRL - Comando de Policiamento Regional Leste (PMBA)"
      description ="Av. Maria Quitéria, 3159 - Queimadinha"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />

    <Marker 
       coordinate={{
        latitude:-12.239574522490006, 
        longitude:-38.97175261507058,
        
      }}
      title ="65a CIPM"
      description ="230, R. da Palma"
      icon = {{
        uri: "https://img.icons8.com/color/110/police"
      }}
      />  
        </MapView>

        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e84393',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mapStyle: {
    width:Dimensions.get('window').width,
    height:'90%',

    marginTop:10,
    zIndex:1
    
  },
  
});
