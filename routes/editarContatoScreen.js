import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button, Icon } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const alterarcontato = ({navigation}) => {
    return (
  
  
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
  
        
      <View style={ {flexDirection:"column", top:"50px"}}>
        <Text style={{color:"white",textAlign:"center", fontSize:"60px",backgroundColor:"blue"}}> Cadastro </Text>      
      </View>   
   
  
  
      <View style={{flex:1, top: "80px", alignItems:"center"}}> 
  
        <Input placeholder="Nome" />
        <Input placeholder="CPF" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        
      </View>
  
  
      <View style={{flex:2, top:"100px", alignItems:"center"}}> 
    
          <Button title="Alterar" style={{ paddingTop: 10, width:"100px" }} />
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

  export default alterarcontato;