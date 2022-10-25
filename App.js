import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cadastro from './routes/cadastroScreen';
import listaContatos from "./routes/listaContatosScreen";
import cadastroContato from "./routes/listaContatosScreen";
import alterarcontato from "./routes/editarContatoScreen";


const indexScreen = ({navigation}) => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>


    <View style={ {flexDirection:"column", top:"50px"}}>
      <Text style={{color:"white", textAlign:"center", fontSize:"60px",backgroundColor:"blue"}}> Login</Text>      
    </View>   
 


    <View style={{top: "80px", borderWidth:"1px", alignItems:"center"}}> 

      <Input placeholder="Login" style={{width:"10px"}}/>
      <Input placeholder="Senha" style={{width:"10px"}}/>
    </View>


    <View style={{flex:1, top:"120px", alignItems:"center"}}> 
      <Button  onPress={()=>navigation.navigate('listaDeContatos')} title="Logar" style={{ paddingTop: 10, width:"100px" }} />
        <Button  onPress={()=>navigation.navigate('Cadastro')} title="Cadastrar" buttonStyle={{backgroundColor:"red"}} style={{ paddingTop: 10, width:"100px" }} />
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

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={indexScreen} />
<Stack.Screen name="Cadastro" component={cadastro} />
<Stack.Screen name="listaDeContatos" component={listaContatos}/>
<Stack.Screen name="CadastroDeContato" component={cadastroContato}/>
<Stack.Screen name="AlteracaoDeContato" component={alterarcontato}/>

</Stack.Navigator>
</NavigationContainer>
);
}




export default App;
