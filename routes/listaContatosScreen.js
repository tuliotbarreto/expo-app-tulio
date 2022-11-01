import {React, useEffect, useState} from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { ListItem, Avatar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


/* const list = [
    {
      name: 'Patricia Tavares',
      avatar_url: 'https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg',
      subtitle: '81 998765332'

    },
    {
      name: 'Marcos Andrade',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/147/147133.png',
      subtitle: '81 988553424'
    },
    {
        name: 'Rodrigo Antunes',
        avatar_url: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg',
        subtitle: '81 987765525'
      },

      {
        name: 'Turma ADS',
        avatar_url: 'https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg',
        subtitle: '81 12345678'
      },
   // more items
  ]
 */



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