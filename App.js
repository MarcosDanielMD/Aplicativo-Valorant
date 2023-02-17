import* as React from 'react';
import{Text,View,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}>Personagens Valorant</Text>
      </View>
      <ScrollView>
        <View>
          <Text style ={estilo.txt}>Reyna</Text>
          <Image style={estilo.img} source={require("./components/reyna.jpg")}/>
          <Text style ={estilo.txt}>Astra</Text>
          <Image style={estilo.img} source={require("./components/astra.webp")}/>
          <Text style ={estilo.txt}>Raze</Text>
          <Image style={estilo.img} source={require("./components/raze.webp")}/>
          <Text style ={estilo.txt}>Sage</Text>
          <Image style={estilo.img} source={require("./components/sage.png")}/>
        </View>
      </ScrollView>
    </View>
    
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#6592bf"
  },
  titulo:{
    marginTop:30,
    fontSize:25,
    color: "#FFFFFF",
    marginBottom:20,
    fontWeight: "bold"
  },
  img:{
    borderRadius:20,
    width: 250,
    height: 200,
    marginBottom:20
  },
  txt:
  {
    color: "#FFFFFF",
  
  }
})