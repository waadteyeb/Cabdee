import React,{useState} from 'react'
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Image,StyleSheet , View , Text , Modal,TouchableOpacity,ScrollView } from 'react-native';
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
      },
      modal:{
        backgroundColor:'#fff',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        margin:10
    },
    })
const PreferenceChauffeur = ({ navigation }) => {
  const [selection1, setSelection1] = useState(false);
  const [selection2, setSelection2] = useState(false);
  const [selection3, setSelection3] = useState(true);
  const [isModalVisible,setisModelVisible]=useState(false);
  const [isModalVisible1,setisModelVisible1]=useState(false);
  const close = ()=>setisModelVisible(false);
  const close1 = ()=>setisModelVisible1(false);
    const [isChecked, setChecked] = useState(true);
    const [isChecked2, setChecked2] = useState(true);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);
  return (
  <>
  <ScrollView>
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
      <Text style={{color:"#000",fontSize:20,textAlign:'justify', marginLeft:10,marginBottom:20,marginTop:20}}>Préférence</Text>
      <Text style={{color:'#D4D3DC',fontSize:15, marginLeft:10,marginBottom:20,marginTop:2}}>
        Les préférences varients d'un chauffeur a un autre.
      </Text>
      <View style={styles.con2}>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Séige bébé</Text>
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
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Chaise roulante</Text>
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
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Chien d'aveugle</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          disabled
          style={styles.checkbox}
          value={isChecked3}
          onValueChange={setChecked3}
          color={isChecked3 ? "#e91e63" : undefined}
        />
      </View>
      </View>
      </View>
      </View>
      <View style={styles.con}>
        <Text style={{ marginTop:20, fontSize:15}}>Horaires d'indisponisibilité</Text>
        <Text style={{ marginTop:20, fontSize:15 ,color:"#D4D3DC"}}>00h a 9h</Text>
      </View>
      <View style={styles.con}>
        <Text style={{ marginTop:20, fontSize:15}}>Délais min.Avant réservation</Text>
        <Text style={{ marginTop:20, fontSize:15 ,color:"#D4D3DC"}}>30 min</Text>
        <TouchableOpacity
         onPress={()=>setisModelVisible(true)}
>
      
      <Text style={{fontSize:15,color:"#e91e63", textAlign:"center",top:20}}>En savoir plus</Text>
      
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
            <View style={styles.modal}>
                <Text style={{textAlign:'center',fontSize:30,marginTop:20}}>Délais min. Avant réservation </Text>
                <Text style={{textAlign:'center',fontSize:15,marginTop:10,marginBottom:10,color:"#D4D3DC"}}>Vous ne pouvez pas réserver de courses dans la demi-heure précédant de départ de votre réservation </Text>
            </View>
        </TouchableOpacity>

      </Modal>
      </View>
      <View style={styles.con}>
        <Text style={{ marginTop:10, fontSize:15}}>Délais max. Avant annulation</Text>
        <Text style={{ marginTop:20, fontSize:15 ,color:"#D4D3DC"}}>12h</Text>
        <TouchableOpacity
         onPress={()=>setisModelVisible1(true)}
>
      
      <Text style={{fontSize:15,color:"#e91e63", textAlign:"center",top:20}}>En savoir plus</Text>
      
      </TouchableOpacity>
      <Modal
      
      transparent={true}
      animationType='fade'
      visible={isModalVisible1}
      onRequestClose={()=>close1()}
      >
        <TouchableOpacity
        onPressOut={()=>close1()}
        activeOpacity={1}
        style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.60)'}}
        >
            <View style={styles.modal}>
                <Text style={{textAlign:'center',fontSize:30,marginTop:20}}>Délais max. Avant annulation </Text>
                <Text style={{textAlign:'center',fontSize:15,marginTop:10,marginBottom:10,color:"#D4D3DC"}}>Le délais maximal pour annuler votre trajet est indiqué. Une fois ce délai dépassé , l'annulation est bloquée dans l'application, mais vous pouvais toujour contacter votre chauffeur pour annuler le trajet. </Text>
            </View>
        </TouchableOpacity>

      </Modal>
      </View>
      <Text style={{color:"#000",fontSize:20,textAlign:'justify', marginLeft:10,marginBottom:20,marginTop:20}}>Moyenne de paiements acceptes</Text>
      <View style={styles.con2}>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Espece</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked4}
          onValueChange={setChecked4}
          color={isChecked4 ? "#e91e63" : undefined}
        />
      </View>
      </View>
     </View>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>TPE</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked5}
          onValueChange={setChecked5}
          color={isChecked5 ? "#e91e63" : undefined}
        />
      </View>
      </View>
      </View>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Paiement en ligne</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked6}
          onValueChange={setChecked6}
          color={isChecked6 ? "#e91e63" : undefined}
        />
      </View>
      </View>
      </View>
      </View>
   </View>
   </ScrollView>
   </>
  )
}

export default PreferenceChauffeur;
