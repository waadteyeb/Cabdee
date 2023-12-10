import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button , Image , Pressable,ScrollView ,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';

const styles = StyleSheet.create({
  scroll:{
    marginTop:30,
     flex:1,
     backgroundColor:'#fff'
     },
    container_login: {
      flex: 2,
        marginTop:30,
        alignItems:'flex-start',
        backgroundColor: '#fff',
        heigh:'100%',
        width:'100%'
    },
    Titel:{
      color:'#000000',
      fontSize:30,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:10,
     marginLeft:10
    },
    label: {
      marginTop:30,
      fontSize: 20,
      color: 'black',
      marginVertical: 5,
      textAlign:'left', 
      marginLeft:10,
      marginBottom:10
    },
    input:{
      marginLeft:10,
      marginBottom:10,
      borderWidth: 1,
      width:350,
      height:50,
      borderRadius:25,
      textAlign:'center',
      borderColor:'#D4D3DC'
    },
    btconnect:{
      marginLeft:10,
      backgroundColor:'#9370db',
      width:350,
      height:50,
      color:'#fff',
      fontSize:20,
      borderRadius:25,
      textAlign:'center',
      marginBottom:30,
    },
    bts:{
      marginLeft:10,
    marginTop:10,
    borderColor:'#D4D3DC',
    borderWidth:1,
    height:50,
    color:'#000',
    fontSize:20,
    borderRadius:25,
    textAlign:'center',
    width:350,
    },
    t:{
      marginLeft:10,
      color:'#D4D3DC',
      fontSize:18,
      marginBottom:20,
    },
    tl:{
      marginLeft:10,
      fontSize : 15 ,
      marginBottom : 10,
      marginTop:10
    },
    bl:{
      marginLeft:10,
      fontSize : 15,
      color:'#9370db',
    },
    connect:{
      color:"#000",
      fontSize:20,
      textAlign:"center"
    },error:{
      fontSize: 13,
      color:'#9370db'
    }
  });


const Login =({ navigation })=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (data) => {
    try {
      const LoginRespose = await axios.get('http://192.168.0.165:8080/api/clients');
      const response = await axios.post("http://192.168.0.165:8080/api/clients/login",
      {
        EmailCl:LoginRespose.data.email,
        PasswordCl:LoginRespose.data.password
      });
      
      if (response.data.success) {
        console.log('Login successful');
        navigation.navigate("Acceuil");
      } else {   
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

    return(
      <ScrollView style={styles.scroll}>
        <View style={styles.container_login}>
        <Text style={styles.Titel}>Se connecter </Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          style={styles.input}
          placeholder="Votre adresse mail"
          >
            </TextInput>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
          placeholder="*********************"
          >
            </TextInput>
          <View style={styles.btconnect}>
          <Button
          title='Suivant'
          color='#fff'
          onPress={handleLogin}
          textAlign='center'
          />
         
           
          </View>
        </View>
        
          <Text style={styles.t}>
            <Text style={styles.t}>__________________</Text>
            Or
            <Text style={styles.t}>__________________</Text>
          </Text>
        
          <View >
        <TouchableOpacity style={styles.bts}>
          <Text style={styles.connect}>Contenu avec Google</Text>
        <Image source={require('../assets/icones/social.png')}
        style={{position:"relative",left:60,bottom:20}}
        />
        </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity style={styles.bts}>
          <Text style={styles.connect}>Contenu avec Apple</Text>
        <Image source={require('../assets/icones/apple.png')}
        style={{position:"relative",left:60,bottom:20}}
        />
        </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity style={styles.bts}>
          <Text style={styles.connect}>Contenu avec Facebook</Text>
        <Image source={require('../assets/icones/facebook.png')}
        style={{position:"relative",left:45,bottom:20}}
        />
        </TouchableOpacity>
        </View>
        
          <Text style={styles.tl}> vous n'avez pas un compte ?
          <Pressable
           onPress={() => navigation.navigate("Signup")}
           >
                <Text style={styles.bl} >creer un compte </Text>
             </Pressable>
          </Text>
        </View>
        </ScrollView>
        );

}
export default Login;
