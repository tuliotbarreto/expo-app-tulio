import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

 
 const CadastroContatosScreen = ({route, navigation}) => {

  const [getNome,setNome] = useState();
const [getCpf,setCpf] = useState();
const [getTelefone,setTelefone] = useState();
const [getEmail,setEmail] = useState();
const [getId,setId] = useState();
const [getAlterar,setAlterar] = useState();

useEffect(()=>{
  if(route.params){
      const { nome } =  route.params 
      const { telefone } =  route.params 
      const { email } =  route.params 
      const { cpf } =  route.params 
      const { id } =  route.params
      const { alterar } =  route.params
      

      setNome(nome)
      setTelefone(telefone)
      setEmail(email)
      setCpf(cpf)
      setId(id)
      setAlterar(alterar)
     
  }

},[]) 

async function inserirDados(){
        
  await axios.post('http://professornilson.com/testeservico/clientes', {
      nome: getNome,
      telefone: getTelefone,
      email: getEmail
    })
    .then(function (response) {
      setNome('');
      setTelefone(''); 
      setEmail('');
    })
    .catch(function (error) {
      console.log(error)
    });     
  
}


    
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
  
        <View style={{ flex: 0.5, backgroundColor: "blue", alignItems: "center", }}>
  
          <Text h1 style={{fontSize:30, color:"white"}}>  
          <Icon onPress={()=>navigation.navigate('Lista de Contatos')} 
             name='arrow-left'
             size={30}
             color='white'
           />Contato
          </Text>

          </View>

          <View style={{ flex: 3, backgroundColor: "white" }}>
       
            <Input
              placeholder='Nome' leftIcon={{ type: 'font-awesome', name: '' }} textAlign="center" onChangeText={text => setNome(text)} value={getNome}
            />

          
            <Input
              placeholder='Telefone' leftIcon={{ type: 'font-awesome', name: '' }} textAlign="center" onChangeText={text => setTelefone(text)} value={getTelefone}
            />

          
            <Input placeholder='Email' leftIcon={{ type: 'font-awesome', name: '' }} textAlign="center" onChangeText={text => setEmail(text)} value={getEmail}
            />
 

        
        </View>
  


{ !getAlterar ? (
    <Button style={{paddingTop:20}} buttonStyle={{backgroundColor:'blue'}}
    title="Salvar"
    onPress={() => inserirDados()}
    />
    ):null}




</View>
  );
};
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  export default CadastroContatosScreen; 
