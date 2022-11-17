import {React, useEffect, useState} from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { ListItem, Avatar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';




const ListaContatos = ({navigation}) => {


  const [getData, setData] = useState([]);

    useEffect(()=>{
        
        async function resgatarDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
              );
              setData(result.data);
        }
        resgatarDados();
    }, [])
    console.log(getData); 
    


    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
  
        <View style={{ flex: 0.5, backgroundColor: "blue", alignItems: "center", }}>
  
          
        <View style={ {flexDirection:"column", top:"50px"}}>
      <Text style={{color:"white", textAlign:"center", fontSize:"60px",backgroundColor:"blue"}}> Login</Text>      
      <Icon onPress={()=>navigation.navigate('CadastroDeContato')} 
             name='plus'
             size={30}
             color='white'
           />
    </View>   

          
         
          </View>


          <View style={{ flex: 2, backgroundColor: "white", alignItems: "center", }}>
          {
    getData.map ((l, i) => (
      <ListItem key={i} bottomDivider  onPress={()=>navigation.navigate('AlteracaoDeContato')}>
        <Avatar source={{uri: "https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg"}} />
        <ListItem.Content>
        <ListItem.Title>{l.id}</ListItem.Title>
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.id_usuario}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.datacadastro}</ListItem.Subtitle>
          
        </ListItem.Content>
      </ListItem>
    ))
  }
            


        </View>


          </View>
           );
        };

     



        const styles = StyleSheet.create({
            container: {
              flex: 1,
              padding: 20,
            },
          });
        
          
        
        
          export default ListaContatos;