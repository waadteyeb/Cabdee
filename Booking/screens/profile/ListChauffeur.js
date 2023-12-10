import React ,{useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Image, StyleSheet , View , Text , Button,TouchableOpacity,ScrollView , TextInput,Pressable} from 'react-native';
import Icon from 'react-native-ico-material-design';
import axios from 'axios';
const styles = StyleSheet.create({
container_ip: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
    heigh:'100%',
    width:'100%',
  },
  Titel:{
      color:'#000000',
      fontSize:30,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:10,
     textAlign:'center'
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
    marginTop:10,
      marginLeft:10,
      marginBottom:10,
      borderWidth: 1,
      width:340,
      height:40,
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
      marginBottom:5,
      justifyContent:'flex-end'
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
    
    tv:{
        fontSize:20,
        textAlign:'left',
        marginLeft:15,
    },
    btb:{
      backgroundColor:'#fff',
    },
    VBox:{
      position:'absolute',
      alignItems:'center',
   },
   Box:{
    flexDirection:'row',
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'space-evenly',
    borderRadius:40,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:15
  },
  IconBehave:{
    padding:14
  },
  Navbar:{
    backgroundColor:'#EEEEEE',
    position:'absolute',
    alignItems:'center',
        borderRadius:15,
        margin:10,
  },
 
  
  chauffeur_cont:{
    position:'absolute',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:"#fff",
    borderColor:'#EEEEEE',
    width:'90%',
    borderRadius:40,
    borderWidth:1,
    height:100  
  },
  icone:{
    height:60,
    width:60
  },
  con1:{
    flexDirection:'row',
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:15,

},
iamge:{
    width:80,
    height:80,
    marginTop:10,
    marginBottom:10
},
text:{

    fontSize:20,
    textAlign:'center',
    marginTop:25
},
})

const ListChauffeur = ({ navigation }) => {
  const[chauffeurID,setChauffeurID]=useState("");
  const [result,setResult]=useState(null);
  const [resultv,setResultv]=useState(null);
  const [resultf,setResultf]=useState(null);
const handelSearch=async(data)=>{
  try{
    const DriverInformationResponse = await axios.get("http://192.168.0.165:8080/api/driver/id/${chauffeurID}");
    const FeedBackDriver = await axios.get("http://192.168.0.165:8080/api/feedback/driver/${chauffeurID}",{
      FeedbackRating : DriverInformationResponse.data.feedback,
    });
        const VoitureChauffeur = await axios.get("http://exp://192.168.0.165:8081/api/carbydrivers/${chauffeurID}",{
      Model:DriverInformationResponse.data.voiture,
    });
    const chauffeurResponse = await axios.get("http://exp://192.168.0.165:8081/api/drivers",{
      NameDR:DriverInformationResponse.data.nomChauffeur,
      LastNameDR:DriverInformationResponse.data.preNomChauffeur,
      PhotoDR:DriverInformationResponse.data.imageChauffeur,
    });
    setChauffeurID("");
    setResult(chauffeurResponse.data);
    setResultv(VoitureChauffeur.data);
    setResultf(FeedBackDriver.data);
  }catch(error){
    console.error("Il n'existe aucun conducteur avec cette identité.: ", error);
  }
}
  return (
    <>
    <View style={styles.container_ip}>
        <Text style={styles.Titel}>Mes chauffeurs</Text>
        <View>
        <View style={styles.con1}>
          {(result &&
        <Image
        source={{uri:result.imageChauffeur}} 
        style={styles.iamge}
      />)}
      <Pressable onPress={() => navigation.navigate("ProfileChauffeur")}>
      <AntDesign name="eye" size={30} color="#e91e63"style={{position:'relative',bottom:3,left:215}}/>
      </Pressable>
      {result &&(
      <Text style={styles.text}>{result.nomChauffeur}{result.preNomChauffeur}</Text>
      )}
      {resultv&&(
      <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:13,color:'#D4D3DC'}}>
          {resultv.voiture}
        </Text>
      </View>
      )}
      {resultf && (
      <Text style={{fontSize:13,flexDirection:'row',top:60,position:'relative'}}>{resultf.feedback}</Text>
      )}
      <AntDesign name="star" size={15} color="#e91e63" style={{flexDirection:'row',top:60,position:'relative'}}  />

    </View>
         <Text style={styles.tv}>Ajouter un chauffeur:</Text>
            <TextInput style={styles.input}
            value={chauffeurID}
            onChangeText={(text) => setChauffeurID(text)}
           placeholder="Rechercher un ID ou scanner un QR code"
             >
         </TextInput>
         <Text style={{color:'#D4D3DC'}}>_______________________________________________</Text>
         <Text style={{
         marginTop:20,
         color:'#000',
         fontSize:15,
         textAlign:"center"
        }}>
            vous n'avez pas de chauffeurs?
        </Text>
        <Text style={{
         color:'#000',
         fontSize:15,
         textAlign:"center"
        }}>
            nous pouvons vous en suggérer dans votre ville!
        </Text>
        <TextInput style={styles.input}
           placeholder="Indiquer votre ville"
             >
         </TextInput>
         <Pressable onPress={() => navigation.navigate("ProfileChauffeur")}>
          <Text>test</Text>
        </Pressable>
        </View>
       
    </View>
    <View style={styles.btb}>
    <View style={styles.btconnect}>
          <Button
          title='Valider'
          color='#fff'
          textAlign='center'
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

   </>
  );
};

export default ListChauffeur;

