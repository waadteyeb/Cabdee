import React,{useState} from 'react'
import { Image,StyleSheet , View , Text , Modal,TouchableOpacity,ScrollView , TextInput,Pressable} from 'react-native';
import { Button } from 'react-native';
import Icon from 'react-native-ico-material-design';
import {ButtonCh} from '../Chauffeur/ButtonCh';

import { Ionicons } from '@expo/vector-icons'; 

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
        borderRadius:10,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        marginLeft:15,
        marginTop:10,
        marginBottom:10
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
        width:'95%',
        borderRadius:20,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        marginLeft:10,
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
        alignItems:'center'
      },
        VBox:{
          position:'absolute',
          alignItems:'center',
          backgroundColor:"#fff"
       },
        Box:{
          flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:40,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          marginLeft:15,
          justifyContent:'flex-end'
        },
        IconBehave:{
          padding:14
        },
        btconnect:{
          marginLeft:10,
          backgroundColor:"#e91e63",
          color:'#fff',
          fontSize:15,
          borderRadius:15,
          textAlign:'center',
          marginTop:10,
          marginBottom:10,
          justifyContent:'center',
          alignItems:"center"
        },
        btconnect1:{
          marginLeft:10,
          backgroundColor:"#fff",
          color:'#e91e63',
          borderColor:"#e91e63",
          borderWidth:1.5,
          fontSize:15,
          borderRadius:15,
          textAlign:'center',
          marginTop:10,
          marginBottom:10,
          justifyContent:'center',
          alignItems:"center"
        },
        cn:{
          marginTop:10,
          flex:1,
          backgroundColor:'#fff',
          borderRadius:40,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          width:"90%",
          marginBottom:10,
          justifyContent:"space-evenly"
        }
    })

const ParametrePai = ({ navigation }) => {
  const [selection1, setSelection1] = useState(false);
  const [selection2, setSelection2] = useState(false);
  const [selection3, setSelection3] = useState(true);
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
        <Text style={{fontSize:25,margin:10}}>Méthodes de paiements:</Text>
        <View style={styles.cn}>
          <ScrollView>
        <View style={styles.con1}>
        <TouchableOpacity>
        <Image
        source={require('../../assets/carte-de-credit.png')} 
        style={{width:115,height:115, alignItems:"center",justifyContent:'center',marginLeft:15}}
      />
      </TouchableOpacity>
      <Text style={{fontSize:20,margin:10,marginTop:30}}>Principal</Text>
        </View>
        <View style={styles.con1}>
        <TouchableOpacity>
        <Image
        source={require('../../assets/carte.png')} 
        style={{width:115,height:115, alignItems:"center",justifyContent:'center',marginLeft:15}}
      />
      
      </TouchableOpacity>
      <Text style={{fontSize:20,marginTop:50}}>Ajouter une carte</Text>
      <TouchableOpacity>
      <Ionicons name="add-outline" size={40} color="#ce6a6b" />
      </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    <View style={styles.cn}>
    <Image
        source={require('../../assets/paypal.png')} 
        style={{width:180,height:100, alignItems:"center",justifyContent:'center',marginLeft:15}}
      />
      <Text style={{fontSize:20, marginLeft:30}}>Connecter votre compte PayPal</Text>
      <Text style={{fontSize:15, marginLeft:30,color:"#D4D3DC",marginBottom:20,marginTop:10}}>Pour utiliser PayPal afin 
      d'émettre des payement sécuriser, veuillez vous connecter au créer gratuitement un compte PayPal.
      </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
      <View style={styles.btconnect}>
          <Button
          fontSize= "15"
          title='CÈER UN COMPTE'
          color='#fff'
          textAlign='center'
          onPress={()=>navigation.navigate("ParametrePai") }
          />
          </View>
          <View style={styles.btconnect1}>
          <Button
          title='SE CONNECTER'
          color='#e91e63'
          textAlign='center'
          onPress={()=>navigation.navigate("ParametrePai") }
          />
          </View>
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

export default ParametrePai
