import React,{useEffect,useState} from 'react';
import { StyleSheet,View , Text ,Pressable ,TouchableOpacity, TextInput,Button, Image,ScrollView} from "react-native";
import Validation from "./Valider";
import axios from 'axios';
const styles = StyleSheet.create({
  scroll:{
   marginTop:30,
   flex:1,
   justifyContent: 'space-between', 
   },
    container_signup: {
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
    text_link:{
      alignItems:'center',
      justifyContent: 'center',
      color:'#A6A6A6',
      textAlign: 'center',
      marginLeft : 10,
      marginBottom:30,
      fontSize:12
    },
    bl2:{
      alignItems:'center',
      justifyContent: 'center',
      fontSize : 12,
      color:'#9370db',
      textAlign:'center'
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'space-between', // Align content vertically at the ends
    },
    connect:{
      color:"#000",
      fontSize:20,
      textAlign:"center"
    }
})

const SignupCli = ({ navigation }) =>{
  const [email,setEmail]=useState('');
  const handleSignup = async (data) => {
    try {
      const response = await axios.post(
        "http://exp://192.168.0.165:8081/api/client/register",
        [
          EmailCl=data.emailcl
        ],
      );

      console.log(response.data);
       navigation.navigate("InfPer")
    } catch (error) {
      console.error('Error signing up: ', error);
      // Handle error
    }
  };

    return(
      <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.container_signup} >
            <Text style={styles.Titel}>Créer un compte</Text>
            <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
          value={email} 
          onChangeText={setEmail}
          keyboardType='email-address'
          style={styles.input}
          placeholder="Votre adresse mail"
          />
          </View>
          <View style={styles.btconnect}>
          <Button
          title='Suivant'
          color='#fff'
          onPress={handleSignup} 
          textAlign='center'
          />
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
        <Text style={styles.text_link}> On créant un compte , vous acceptez nos
          <Pressable
           onPress={() => navigation.navigate("Login")}
           >
                <Text style={styles.bl2} > condition générales d'utilisation </Text>
             </Pressable>
             et notre
             <Pressable
           onPress={() => navigation.navigate("Login")}
           >
                <Text style={styles.bl2} > politique de confidentialité</Text>
             </Pressable> 
          </Text>
        
        <Text style={styles.tl}> Vous avez déjà un compte ?
          <Pressable
           onPress={() => navigation.navigate("Login")}
           >
                <Text style={styles.bl} >Se connecter</Text>
             </Pressable>
          </Text>
        </View>
        </ScrollView>
    )
}
export default SignupCli ;
