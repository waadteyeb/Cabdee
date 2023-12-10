import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Image,StyleSheet , View , Text , Modal,TouchableOpacity,ScrollView , TextInput,Pressable} from 'react-native';
import ButtonCh from './ButtonCh';
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
        justifyContent:'space-evenly',
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
        marginTop:20,
        
    },
    iamge:{
        width:80,
        height:80,
        marginTop:10,
        marginBottom:10,
        marginLeft:15
    },
    text:{
        fontSize:20,
        textAlign:'center',
        marginTop:25,
        marginLeft:15
    },
    icone:{
        position:"relative",
        top: 10,
        
    },
   
   
   
    })
const InformationChauffeur = ({ navigation }) => {
  const [selection1, setSelection1] = useState(false);
  const [selection2, setSelection2] = useState(true);
  const [selection3, setSelection3] = useState(false);
  return (
   <>
   <View style={styles.container}>
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
                navigation.navigate("ProfileChauffeur"),
                setSelection1(true)
            }
            }
                type={selection1 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection1  ? '#FFF' : undefined}
                fgColor={selection1 ? '#e91e63' : undefined}  />
                <ButtonCh 
                
                   text="Informations" 
                   onPress={() => {
                    navigation.navigate("InformationChauffeur")
                    setSelection2}}
                type={selection2 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection2? '#FFF' : undefined}
                fgColor={selection2 ? '#e91e63' : undefined}  />
                <ButtonCh 
              text="Préférences" 
              onPress={() => {
                navigation.navigate("PreferenceChauffeur")
                setSelection3}}
                type={ selection3 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection3  ? '#FFF' : undefined}
                fgColor={selection3 ? '#e91e63' : undefined}  />   
              </View> 
   <View style={styles.con1}>
        <Image
        source={require('../../assets/chauffeur.png')} 
        style={styles.iamge}
      />
      <Text style={styles.text}>Adam ben slimen</Text>
      <Text style={{fontSize:13,position:'relative', marginTop:10}}>3.9/5</Text>
      <AntDesign name="star" size={15} color="#e91e63" style={styles.icone}  />
      <FontAwesome name="phone" size={24} color="#e91e63"style={{flexDirection:'row',top:60,position:'relative',marginRight:8}}/>
      <FontAwesome name="envelope" size={24} color="#e91e63"style={{flexDirection:'row',top:60,position:'relative'}} />
      </View>
      <Text style={{color:"#000",fontSize:20,textAlign:'justify', marginLeft:10,marginBottom:20,marginTop:20}}>Informations personnels</Text>
      <View style={styles.con}>
        <Text style={{ marginTop:20, fontSize:15}}>Numéro de tél.</Text>
        <Text style={{ marginTop:20, fontSize:15 ,color:"#D4D3DC"}}>+33123456789</Text>
      </View>
      <View style={styles.con}>
        <Text style={{ marginTop:20, fontSize:15,marginRight:25}}>Email</Text>
        <Text style={{ marginTop:20, fontSize:15 ,color:"#D4D3DC",marginLeft:50}}>Adam123@gmail.com</Text>
      </View>
      <View style={styles.con}>
        <Text style={{ marginTop:20, fontSize:15,marginRight:40}}>Véhicule</Text>
        <Text style={{ marginTop:20, fontSize:15 ,color:"#D4D3DC",marginLeft:50}}>Fiat tipo 2016</Text>
      </View>
   </View>
   </>
  )
}

export default InformationChauffeur
