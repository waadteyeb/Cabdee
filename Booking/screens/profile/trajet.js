import React,{useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 

import { ScrollView,SafeAreaView,Image,StyleSheet,Text,TouchableOpacity, View ,Pressable,Modal,Button} from 'react-native';
import Icon from 'react-native-ico-material-design';
import { AntDesign } from '@expo/vector-icons';
import ButtonCh from '../Chauffeur/ButtonCh'
import Checkbox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
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
            marginLeft:10,
        },
        btb:{
          backgroundColor:'#fff',
        },
        block:{
        backgroundColor:'#EEEEEE',
        width:'90%',
        borderRadius:15,
        margin:10,
        flexDirection: 'row',
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
        }, modal:{
          flexDirection:'column',
          backgroundColor:'#fff',
          width:'95%',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:20,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10
        },con:{
          flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10
        },tt:{
          flexDirection:'column'
        },con2:{
          flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          marginLeft:15,
          marginRight:25,
      },cont2:{
        flex:1,
        backgroundColor:'#fff',
        width:'20%',
        justifyContent:'space-evenly',
        borderRadius:20,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
       
        marginTop:5,
      
        marginBottom:5
    }, cont3:{
      flexDirection:"column",
      backgroundColor:'#fff',
      width:'70%',
      justifyContent:'space-evenly',
      borderRadius:20,
      borderColor:"#D4D3DC",
      borderWidth:0.5,
      margin:10,
      marginTop:5,
      marginBottom:5
  },   cont: {
    flex: 0.5,
  },checkbox: {
    marginTop:7,
    left:30,
    top:10,
    width:15,
    height:15,
    top:5
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  }, containerB: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },reserv:{
    backgroundColor:'#e91e63',
    width:350,
    justifyContent:'center',
    alignItems:'center',
    height:50,
    borderRadius:10
  }
    })
const Trajet = ({ navigation }) => {
  const [selection, setSelection] = useState();
  const [isModalVisible,setisModelVisible]=useState(false);
  const close = ()=>setisModelVisible(false);
  const [isChecked, setChecked] = useState(true);
  const [isChecked2, setChecked2] = useState(true);
  const [isChecked3, setChecked3] = useState(false);

  return (
    <>
    <View style={styles.container_ip}>
        <Text style={styles.Titel}>Mes trajets</Text>
        
      
        <View style={{flexDirection:'row',
          backgroundColor:'#EEEEEE',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#EEEEEE",
          borderWidth:0.5,
          margin:10}}
          >
          <ButtonCh 
              
              text="Tous" 
              onPress={() => setSelection(1)}
                type={selection === 1 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection === 1  ? '#FFF' : undefined}
                fgColor={selection === 1 ? '#e91e63' : undefined}  />
                <ButtonCh 
                
                   text="Berline" 
                   onPress={() => setSelection(2)}
                type={selection === 2 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection === 2 ? '#FFF' : undefined}
                fgColor={selection === 2 ? '#e91e63' : undefined}  />
                <ButtonCh 
              text="Citadine" 
              onPress={() => setSelection(3)}
                type={ selection === 3 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection === 3  ? '#FFF' : undefined}
                fgColor={selection === 3 ? '#e91e63' : undefined}  />
                 <ButtonCh 
              text="Van" 
              onPress={() => setSelection(4)}
                type={ selection === 4 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection === 4  ? '#FFF' : undefined}
                fgColor={selection === 4 ? '#e91e63' : undefined}  />
               
              </View> 
               <View style={styles.con}>
        <Text style={{fontSize:15,marginBottom:15,marginTop:15,color:"#D4D3DC",right:50}}>Trier par chauffeurs</Text>
      <TouchableOpacity>
        <AntDesign name="down" size={18} color="#D4D3DC" style={{top:15,left:55}} />
        </TouchableOpacity>
      </View>

        <Text style={{
         marginTop:20,
         color:'#000',
         fontSize:25,
         left:10
        }}>
            Trajets passés:
            </Text>
        <View style={{ flexDirection:"column",
             backgroundColor:'#fff',
             width:'80%',
             justifyContent:'center',
             alignItems:'center',
             borderRadius:20,
             borderColor:"#D4D3DC",
             borderWidth:0.5,
             margin:10}}
        >
          
          <View style={{flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          marginBottom:10,
          marginTop:10,
          marginRight:10,
          marginLeft:15
          }}>
          <Image
        source={require('../../assets/chauffeur.png')} 
        style={{width:50,height:50,marginBottom:5,marginTop:5}}
      />
      <Text style={{fontSize:20}}>Adam ben slimen</Text>
          </View>
          <TouchableOpacity onPress={()=>setisModelVisible(true)}>
          <AntDesign name="eye" size={30} color="#e91e63"style={{position:"relative",left:130,bottom:80}} />
          </TouchableOpacity>
          <Modal
      transparent={true}
      animationType='fade'
      visible={isModalVisible}
      onRequestClose={()=>close()}
      >
         <TouchableOpacity
        onPressOut={()=>close()}
        activeOpacity={1}
        style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.60)'}}
        >
          <ScrollView>
           <View style={styles.modal}>
            <View style={styles.con}>
            <Image
        source={require('../../assets/chauffeur.png')} 
        style={{width:50,height:50,marginBottom:5,marginTop:5}}
      />
      <Text style={{fontSize:20}}>Adam ben slimen</Text>
            </View>
            <Text style={{fontSize:20 , right:30}}>Contact du chauffeur</Text>
            <View style={styles.con}>
              <Text style={{fontSize:15,marginBottom:10,marginTop:10}}>Numéro de tél.</Text>
              <Text style={{fontSize:15 ,color:'#D4D3DC',marginBottom:10,marginTop:10}}>+3365425632</Text>
            </View>
            <Text style={{fontSize:20 , right:30}}>Réservation effectué</Text>
            <View style={styles.tt}>
            <MaterialCommunityIcons name="record-circle" size={20} color="#e91e63"style={{right:5}} />
            <Text style={{fontSize:20,bottom: 8,left:2}}>|</Text>
            <Text style={{fontSize:20,bottom:15,left:2}}>|</Text>
            <Text style={{fontSize:20,bottom:22,left:2}}>|</Text>
            <MaterialCommunityIcons name="record-circle" size={20} color="#e91e63"style={{bottom:30,right:5}} />
            <View style={{flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:120,
          left:10

          }}>
              <Text style={{fontSize:15,marginBottom:5,marginTop:5}}>Départ</Text>
              <Text style={{fontSize:10,color:'#D4D3DC',marginBottom:5,marginTop:5,top:3}}>31 Avenue Albert Sarraut 93290 Tremblay</Text>
            </View>
            </View>
            <View style={{
          flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:120,
          left:10
        }}>
              <Text style={{fontSize:15,marginBottom:5,marginTop:5}}>Arrivée</Text>
              <Text style={{fontSize:10,color:'#D4D3DC',marginBottom:5,marginTop:5,top:3}}>CDG, Aéroport Charles De Gaule</Text>
        </View>
        <View style={{   flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:120,
          left:10
          }}>
          <Text style={{margin:7}}>Jour&Heure</Text>
          <Text style={{color:'#d4d3cd',fontSize:10,top:2,margin:7}}>16 Novembre 2023 à 20h30</Text>
        </View>
        <View style={{
    flexDirection:'row',
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'space-evenly',
    marginLeft:15,
    marginRight:25,
    bottom:130
}}>
      
      <View style={  {flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15}}>
<Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Passagers</Text>
<Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>02</Text>
</View>
<View style={  {flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15}}>
<Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Bagages</Text>
<Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>02</Text>
</View>
<View style={  {flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15}}>
<Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Société</Text>
<Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>Sanofi</Text>
</View>
</View>
<View style={{
    flexDirection:'row',
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'space-evenly',
    marginLeft:15,
    marginRight:25,
    bottom:130
}}>
      <View style={  {flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15}}>
      <Text  style={{color:"#000",fontSize:13,marginBottom:5}}>Séige bébé</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          color={isChecked ? "#e91e63" : undefined}
        />
      </View>
      </View>
     </View>
      <View style={  {flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15}}>
      <Text  style={{color:"#000",fontSize:13,marginBottom:5}}>Chaise roulante</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked2}
          color={isChecked2 ? "#e91e63" : undefined}
        />
      </View>
      </View>
      </View>
      <View style={  {flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15}}>
      <Text  style={{color:"#000",fontSize:13,marginBottom:5}}>Chien d'aveugle</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          disabled
          value={isChecked3}
          onValueChange={setChecked3}
          color={isChecked3 ? "#e91e63" : undefined}
        />
      </View>
      </View>
      </View>
      </View>
      <View style={{ flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:130
          }}>
        <View style={styles.tt}>
          <Text style={{right:60,marginTop:10}}>Commentaires:</Text>
          <Text style={{fontSize:15,color:'#d4d3cd',right:60,marginBottom:10}}>aucun commentaire</Text>
        </View>
      </View>
      <View style={{
    flexDirection:'row',
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'space-evenly',
    marginLeft:15,
    marginRight:25,
    bottom:130
}}>
        <View style={{flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15,
    }}>
         <View style={{flexDirection:"row"}}>
            <Text >Prix:</Text>
            <Text style={{color:'#e91e63'}}>€43,32</Text>
            </View>
        </View>
        <View style={{flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15,
    }}>
         <View style={{flexDirection:"row"}}>
            <Text >Distance:</Text>
            <Text style={{color:'#e91e63'}}>27km</Text>
            </View>
      </View>
      <View style={{flex:1,
    backgroundColor:'#fff',
    width:'35%',
    justifyContent:'space-evenly',
    borderRadius:20,
    borderColor:"#D4D3DC",
    borderWidth:0.5,
    marginLeft:10,
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15,
    }}>
         <FontAwesome5 name="money-bill-wave" size={24} color='#e91e63' />
      </View>
      </View>
      <View style={{flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:140
          }}>
        <Text>Renvoyer une facture</Text>
      <View style={styles.btconnect}>
          <Button
          fontSize= "15"
          title='Envoyer'
          color='#fff'
          textAlign='center'
          />
          </View>
          </View>
           </View>
           </ScrollView>
        </TouchableOpacity>
        </Modal>
          <View style={styles.tt}>
            <MaterialCommunityIcons name="record-circle" size={20} color="#e91e63"style={{right:5}} />
            <Text style={{fontSize:20,bottom: 8,left:2}}>|</Text>
            <Text style={{fontSize:20,bottom:15,left:2}}>|</Text>
            <Text style={{fontSize:20,bottom:22,left:2}}>|</Text>
            <MaterialCommunityIcons name="record-circle" size={20} color="#e91e63"style={{bottom:30,right:5}} />
            <View style={{flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:120,
          left:10

          }}>
              <Text style={{fontSize:15,marginBottom:5,marginTop:5}}>Départ</Text>
              <Text style={{fontSize:10,color:'#D4D3DC',marginBottom:5,marginTop:5,top:3}}>31 Avenue Albert Sarraut 93290 Tremblay</Text>
            </View>
            </View>
            <View style={{
          flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:120,
          left:10
        }}>
              <Text style={{fontSize:15,marginBottom:5,marginTop:5}}>Arrivée</Text>
              <Text style={{fontSize:10,color:'#D4D3DC',marginBottom:5,marginTop:5,top:3}}>CDG, Aéroport Charles De Gaule</Text>
        </View>
        <View style={{
          flexDirection:'row',
          backgroundColor:'#fff',
          width:'90%',
          justifyContent:'space-evenly',
          borderRadius:10,
          borderColor:"#D4D3DC",
          borderWidth:0.5,
          margin:10,
          bottom:120,
          left:10
        }}>
          <View style={styles.cont3}>
          <Text style={{fontSize:15,marginBottom:5,marginTop:5 ,margin:5}}>Jour & Heure</Text>
          <Text style={{fontSize:10,color:'#D4D3DC',marginBottom:5,marginTop:5,top:3}}>16 Novembre 2023 à 20h30</Text>
          </View>
          <View style={styles.cont2}>
          <Text style={{fontSize:15,marginBottom:5,marginTop:5,color:"#e91e63"}}> €43,32</Text>
          </View>
        </View>
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
    </>
  )
}

export default Trajet
