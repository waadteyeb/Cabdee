import {useState , React} from 'react';
import { StyleSheet, Text, View , TextInput,Button , ScrollView, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';
const styles = StyleSheet.create({
  scroll:{
    marginTop:30,
    flex:1,
    justifyContent: 'space-between', 
  },
    container_ip: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      heigh:'100%',
      width:'100%'
    },
    Titel:{
        color:'#000000',
        fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
       
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
        width:340,
        height:50,
        borderRadius:15,
        textAlign:'center',
        borderColor:'#D4D3DC',
      },
      btconnect:{
        marginLeft:10,
        backgroundColor:'#9370db',
        width:340,
        height:50,
        color:'#fff',
        fontSize:20,
        borderRadius:15,
        textAlign:'center',
        marginTop:25,
        marginBottom:5
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
      width:300,
      },
      t:{
        marginLeft:10,
      color:'#D4D3DC',
      fontSize:15,
      marginBottom:20,
      },
      tl:{
        marginLeft:10,
        fontSize : 15 ,
      },
      bl:{
        marginLeft:10,
        fontSize : 15,
        color:'#9370db',
      },
      cb:{
        marginLeft:10,
        flexDirection: 'row', 
      },
      code:{
        marginLeft:10,
        marginBottom:10,
        borderWidth: 1,
        width:340,
        height:50,
        borderRadius:15,
        textAlign:'center',
        borderColor:'#D4D3DC',
      },inp:{
        width:'80%',
        height:50,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
      }
})
const InfCnx = ({ navigation })=>{
  const [email,setEmail]=useState('');
  const [phoneCL,setPhoneCl]=useState('');
  const [password,setPassword]=useState('');
  const handleSignup = async (data) => {
    try {
      const response = await axios.post(
        "http://exp://192.168.0.165:8081/api/client/register",
        [
          EmailCL=data.email,
          PhoneCl=data.phonecl,
          PasswordCl = data.password,
        ],
      );
      console.log(response.data);
      navigation.navigate("ConNum")
    } catch (error) {
      console.error('Error signing up: ', error);
      // Handle error
    }
  };
  
  const[visible1,setVisible1]=useState(false);
  const[visible2,setVisible2]=useState(false);
  const [show1,setShow1]=useState(false);
  const [show2,setShow2]=useState(false);
    return(
    <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
    <View style={styles.container_ip}>
        <Text style={styles.Titel}>Informations de connexion</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Votre email"
          keyboardType='email-address'
          >
          </TextInput>
          
          <Text style={styles.label}>Telephone</Text>
          <TextInput
          value={phoneCL}
          onChangeText={setPhoneCl}
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Votre numero de telephone"
          >
          </TextInput>
          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.code}>
          <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={visible1}
          style={styles.inp}
          placeholder="*********************"
          >
          </TextInput>
          <TouchableOpacity onPress={()=>{
          setVisible1(!visible1)
          setShow1(!show1)
          }}>
          <Entypo name={show1 === false ? 'eye' : 'eye-with-line'} size={29} color='#9370db'style={{left:300,bottom:50}} />
          </TouchableOpacity>
          </View>
          <Text style={styles.label}>Confirmer le mot de passe</Text>
          <View style={styles.code}>
          <TextInput
          secureTextEntry={visible2}
          style={styles.inp}
          placeholder="*********************"
          >
          </TextInput>
          <TouchableOpacity onPress={()=>{
          setVisible2(!visible2)
          setShow2(!show2)
          }}>
          <Entypo name={show2 === false ? 'eye' : 'eye-with-line'} size={29} color='#9370db'style={{left:300 ,bottom:50}} />
          </TouchableOpacity>
          </View>
          </View>
          <View style={styles.btconnect}>
          <Button
          title='Suivant'
          color='#fff'
          textAlign='center'
          onPress={handleSignup}
          />
          </View>
        </View>
        </ScrollView>

    )
}

export default InfCnx ;