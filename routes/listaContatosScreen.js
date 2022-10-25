import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListItem, Avatar } from 'react-native-elements'
import { Icon } from 'react-native-vector-icons/FontAwesome';

const list = [
  {
    name: 'Túlio Eduardo',
    avatar_url: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg',
    subtitle: 'Presidente'
  },
  {
    name: 'Vincius Ferreira',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
    subtitle: 'Presidente'
  }
  
]


const listaContatos = ({navigation}) => {
    return (
  
  
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>

      <View style={ {flexDirection:"column", top:"50px"}}>

        <Text style={{color:"white",textAlign:"center", fontSize:"60px",backgroundColor:"blue"}}> Lista de Contatos  
        </Text> 
      </View>  
 
<View style={{top:"70px"}}>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
  

  
  
    
  
        </View>

  
    ); 
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  export default listaContatos;
  
  