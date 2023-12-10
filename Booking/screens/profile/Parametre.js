import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Image,StyleSheet , View , Text , Modal,TouchableOpacity,ScrollView , TextInput,Pressable} from 'react-native';
import { Button } from 'react-native';
import Icon from 'react-native-ico-material-design';
import {ButtonCh} from '../Chauffeur/ButtonCh';
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        marginTop:10,
        heigh:'100%',
        width:'100%',
    },
    con1:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'90%',
        
        borderRadius:20,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        marginLeft:15,
        marginTop:10
    },con:{
        borderColor:"#D4D3DC",
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'90%',
        height:60,
        justifyContent:'space-evenly',
        borderRadius:10,
        borderWidth:0.5,
        marginLeft:15,
        marginTop:10,
        
    },
    iamge:{
        width:80,
        height:80,
        marginTop:10,
        marginBottom:10,
        marginLeft:15
    },
    text:{
        fontSize:30,
        textAlign:'center',
        marginTop:25,
        marginLeft:15
    },
    icone:{
        position:"relative",
        top: 10,
        
    },
    con2:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'90%',
        justifyContent:'space-evenly',
        marginLeft:15,
    },
    cont2:{
        flex:1,
        backgroundColor:'#fff',
        width:'35%',
        justifyContent:'space-evenly',
        borderRadius:20,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        marginLeft:10,
        marginTop:10,
        padding:10,
    },  cont: {
        flex: 1,
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      paragraph: {
        fontSize: 15,
      },
      checkbox: {
        margin: 8,
      },  Box:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'90%',
        justifyContent:'space-evenly',
        borderRadius:40,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        marginLeft:15
      },
      VBox:{
        position:'absolute',
        alignItems:'center',
        marginBottom:10
     },
      IconBehave:{
        padding:14
      },
      input:{
        marginLeft:10,
        borderWidth: 1,
        width:350,
        height:45,
        borderRadius:10,
        textAlign:'center',
        borderColor:'#D4D3DC'
      },
      label: {
        marginTop:15,
        fontSize: 15,
        color: 'black',
        marginVertical: 5,
        textAlign:'left', 
        marginLeft:10,

      },
      btconnect:{
        marginTop:10,
        marginLeft:10,
        backgroundColor:'#e91e63',
        width:350,
        height:50,
        color:'#fff',
        fontSize:25,
        borderRadius:25,
        textAlign:'center',
        marginBottom:10,
      },
      avatar:{
        margin:10,
        width:60,
        height:60,
        borderRadius:60,
        borderBlockColor:'#e91e63',
        borderWidth:1,
        backgroundColor:"#f06493"
      },
      img:{
        width:60,
        height:60,
        borderRadius:60,
        bottom:26,
        right:1
      }
    })

const Parametre = ({ navigation }) => {
  const [selection1, setSelection1] = useState(true);
  const [selection2, setSelection2] = useState(false);
  const [selection3, setSelection3] = useState(false);
  const [image, setImage] = useState(null);
  const[email,setEmail] = useState("");
  const[phoneCl,setPhoneCl] = useState("");
  const[birthdatecl,setBirthdatecl] = useState("");
  const[adressCl,setAdressCl] = useState("");
  const[password,setPassword] = useState("");
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleUpdate = async (data) => {
    try {
      const response = await axios.put(
        "http://exp://192.168.0.165:8081/api/client/${ClientID}",{
          EmailCL: data.email,
          PhoneCl:data.phonecl,
          BirthDateCl : data.birthdatecl,
          AdressCl : data.adressCl,
          PasswordCl : data.password,
          PhotoCL:data.image,
      }
      );
      console.log(response.data);
       onUpdate();
    } catch (error) {
      console.error('Error signing up: ', error);
      // Handle error
    }
  };
  
  return (
  <>
  <ScrollView>
  <View style={{flexDirection:'row',
          backgroundColor:'#EEEEEE',
          width:'95%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#EEEEEE",
          borderWidth:0.5,
          margin:10}}
          >
  <ButtonCh 
              
              text="Profile" 
              onPress={() =>{ 
                navigation.navigate("Parametre"),
                setSelection1(true)
            }
            }
                type={selection1 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection1  ? '#FFF' : undefined}
                fgColor={selection1 ? '#e91e63' : undefined}  />
                <ButtonCh 
                
                   text="Préférences" 
                   onPress={() => {
                    navigation.navigate("ParametrePer")
                    setSelection2}}
                type={selection2 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection2? '#FFF' : undefined}
                fgColor={selection2 ? '#e91e63' : undefined}  />
                <ButtonCh 
              text="Paiement" 
              onPress={() => {
                navigation.navigate("ParametrePai")
                setSelection3}}
                type={ selection3 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection3  ? '#FFF' : undefined}
                fgColor={selection3 ? '#e91e63' : undefined}  />   
              </View> 
   <View style={styles.container}>
   <View style={styles.con1}>
  <View style={styles.avatar}>
    <TouchableOpacity onPress={pickImage}>
   <MaterialIcons name="add-a-photo" size={25} color='#e91e63'style={{position:'relative',left:15,top:15}} />
   {image && <Image source={{ uri: image }} style={styles.img} />}
   </TouchableOpacity>
   </View>
      <Text style={styles.text}>Sara mahfoudh</Text>
      </View>
      <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Votre adresse mail"
          >
          </TextInput>
          <Text style={styles.label}>Telephone</Text>
          <TextInput
          value={phoneCl}
          onChangeText={setPhoneCl}
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Votre numero de telephone"
          >
          </TextInput>
          <Text style={styles.label}>Date de naissance</Text>
          <TextInput
          value={birthdatecl}
          onChangeText={setBirthdatecl}
          style={styles.input}
          placeholder="JJ/MM/AAAA"
          >
          </TextInput>
          <Text style={styles.label}>Adresse (facultatif)</Text>
          <TextInput
          value={adressCl}
          onChangeText={setAdressCl}
          style={styles.input}
          placeholder="Votre adresse"
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
          <Text style={styles.label}>Confirmer le mot de passe</Text>
          <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="*********************"
          >
          </TextInput>
          </View>
          <View style={styles.btconnect}>
          <Button
          title='Valider'
          color='#fff' 
          textAlign='center'
          onPress={handleUpdate }
          />
          </View>
         
      <View styles={styles.VBox}>
      <View style={styles.Box}>
        <Pressable  onPress={()=>navigation.navigate("Acceuil") } style={styles.IconBehave} >
          <Icon name="map-placeholder" height="20" width="20" color='#D4D3DC'/>
        </Pressable>
        <Pressable  onPress={()=>navigation.navigate("ListChauffeur") } style={styles.IconBehave} >
          <Icon name="user-outline" height="20" width="20" color='#D4D3DC'/>
        </Pressable>
        <Pressable  onPress={()=>navigation.navigate("Trajet") } style={styles.IconBehave} >
          <Icon name="random-line" height="20" width="20" color='#D4D3DC'/>
        </Pressable>
        <Pressable  onPress={()=>navigation.navigate("Disposition") } style={styles.IconBehave} >
          <Icon name="connection-indicator" height="20" width="20" color='#D4D3DC'/>
        </Pressable>
        <Pressable  onPress={()=>navigation.navigate("Parametre") } style={styles.IconBehave} >
          <Icon name="settings-cogwheel-button" height="20" width="20" color='#D4D3DC'/>
        </Pressable>
      </View>
  </View>
   </View>
   </ScrollView>
   
   </>
  )
}

export default Parametre

