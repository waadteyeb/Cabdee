import  React ,{useState ,useCallback, useRef} from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../profile/BottomSheet';
import {SafeAreaView,Image,StatusBar,StyleSheet,Text,TouchableOpacity, View ,Pressable,Modal,Button, TextInput, ScrollView} from 'react-native';
import { ButtonPopup } from './ButtonPop';
import MapView from 'react-native-maps';
import Icon from 'react-native-ico-material-design';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
    },
    text:{
        fontSize:20,
        color:"#D4D3DC",
        textAlign:"center",
        marginTop:10
    },texttoolbar:{
        flexDirection:"row",
        fontSize:20,
        color:"#D4D3DC",
        marginTop:10
    },
    pressshow:{
      color:'#000',
      width:350,
      height:50,
      backgroundColor:'#fff',
      margin:10,
      borderRadius:10,
      textAlign:'center',
    },
    toolbar:{
      width:350,
      height:50,
      backgroundColor:'#fff',
      margin:10,
      borderRadius:10,
      textAlign:'center'
    },
    VBox:{
      marginTop:10,
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
  },
  IconBehave:{
    padding:14
  },iamge:{
    width:50,
    height:50,
    marginTop:5,
    marginBottom:5,
    
},
con:{
  flexDirection:'row',
  backgroundColor:'#fff',
  width:'90%',
  justifyContent:'space-evenly',
  borderRadius:10,
  borderColor:"#D4D3DC",
  borderWidth:0.5,
  margin:5
},tt:{
  flexDirection:'column'
}, modal:{
  flexDirection:'column',
  backgroundColor:'#fff',
  width:'80%',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  borderColor:"#D4D3DC",
  borderWidth:0.5,
  margin:10
}, modal1:{
  flexDirection:'column',
  backgroundColor:'#fff',
  width:'60%',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  borderColor:"#D4D3DC",
  borderWidth:0.5,
  margin:10
},
con2:{
    flexDirection:'row',
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'space-evenly',
    marginLeft:15,
    marginRight:25,
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
    marginTop:5,
    padding:10,
    top:10,
    marginBottom:15
},  cont: {
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

const Acceuil= ({ navigation }) => {
  const ref = useRef(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  const [isChecked, setChecked] = useState(true);
  const [isChecked2, setChecked2] = useState(true);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isModalVisible,setisModelVisible]=useState(false);
  const close = ()=>setisModelVisible(false);
   const [isModalVisible1,setisModelVisible1]=useState(false);
  const close1 = ()=>setisModelVisible1(false); 
  const [isModalVisible2,setisModelVisible2]=useState(false);
  const close2 = ()=>setisModelVisible2(false);
  let popupRef=React.createRef()
  const onShowPopup = ()=>{
    popupRef.show()
   }
  const onClosePopup =()=> {
    popupRef.close()
  }
  return (
    <>
    <StatusBar barStyle="dark-content"/>
      <MapView
      style={StyleSheet.absoluteFill}
      initialRegion={{
        latitude: 46.232192999999995,
        longitude: 2.209666999999996,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
      
      <SafeAreaView style={styles.container}>
        
      <TouchableOpacity 
             style={styles.pressshow} onPress={onShowPopup}>
            <Text style={styles.text}>Ou allons-nous ?</Text>
        </TouchableOpacity>
        <ButtonPopup
        ref={(target) => popupRef = target}
        onTouchOutside={onClosePopup}
        title='Pas de chauffeur ?'
        >
        </ButtonPopup>

        <GestureHandlerRootView style={{ flex: 1 }}>
      
      <View style={styles.containerB}>
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={true}
          >
          <View style={{ width:'%90',marginTop:10,position:'absolute',alignItems:'center', backgroundColor: 'white' }}>
            <Text style={{fontSize:25,right:70,marginBottom:5}}>Informations</Text>
            <View s style={styles.con}>
            <View style={styles.tt}>
            <MaterialCommunityIcons name="record-circle" size={24} color="#e91e63"style={{left:5}} />
            <Text style={{fontSize:20,bottom: 8,left:15}}>|</Text>
            <Text style={{fontSize:20,bottom:15,left:15}}>|</Text>
            <Text style={{fontSize:20,bottom:22,left:15}}>|</Text>
            <Text style={{fontSize:20,bottom:29,left:15}}>|</Text>
            <Text style={{fontSize:20,bottom:36,left:15}}>|</Text>
            <MaterialCommunityIcons name="record-circle" size={24} color="#e91e63"style={{bottom:39,left:5}} />
            </View>
            <View style={styles.tt}>
            <Text style={{fontSize:13,color:"#D4D3DC", left:5}}>Départ</Text>
            <Text style={{fontSize:11,left:5}}>31 Avenue Albert Sarraut 93290 Tremblay</Text>
            <View style={styles.tt}>
              <View style={{flexDirection:"row",margin:20}}>
                <Text style={{color:"#D4D3DC"}}>___________</Text>
                <MaterialCommunityIcons name="swap-vertical-circle-outline" size={27} color="#D4D3DC" />
                <Text style={{color:"#D4D3DC"}}>___________</Text>
              </View>
            </View>
            <Text style={{fontSize:13,color:"#D4D3DC", left:5}}>Arrivée</Text>
            <Text style={{fontSize:11,left:5}}>CDG, Aéroport Chales De Gaule</Text>
            </View>
            </View>
            <View style={styles.con2}>
      
            <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Jour</Text>
      <Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>11/06/2023</Text>
      </View>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Heure</Text>
      <Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>20:30</Text>
      </View>
      </View>
      <View style={styles.con2}>
      
      <View style={styles.cont2}>
<Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Passagers</Text>
<Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>02</Text>
</View>
<View style={styles.cont2}>
<Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Bagages</Text>
<Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>02</Text>
</View>
<View style={styles.cont2}>
<Text  style={{color:"#000",fontSize:15,textAlign:'center'}}>Société</Text>
<Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>Sanofi</Text>
</View>
</View>
<View style={styles.con2}>
      <View style={styles.cont2}>
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
      <View style={styles.cont2}>
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
      <View style={styles.cont2}>
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
      <View s style={styles.con}>
      <TextInput style={{marginTop:10,
              marginLeft:10,
              marginBottom:10,
              textAlign:'center',
            }}
           placeholder="Commentaires : Autres besoins"
             >
         </TextInput>
      </View>
      <View style={styles.con}>
        <Text style={{fontSize:15,marginBottom:15,marginTop:15}}>Moyenne de paiements</Text>
        <Text style={{fontSize:13,marginBottom:15,marginTop:15,color:"#D4D3DC",left:20}}>Carte bancaire</Text>
        <AntDesign name="down" size={18} color="#D4D3DC" style={{top:15}} />
      </View>
      <View style={styles.con}>
      
      <View style={styles.tt}>
<Text  style={{color:'#D4D3DC',fontSize:13,textAlign:'center',marginBottom:5,marginTop:5}}>Arrivée à</Text>
<Text style={{color:'#000',fontSize:13,textAlign:'center',marginBottom:5,marginTop:5}}>21:00</Text>
</View>
<Text style={{color:'#D4D3DC',fontSize:30,marginBottom:5,marginTop:5}}>|</Text>
<View style={styles.tt}>
<Text  style={{color:'#D4D3DC',fontSize:13,textAlign:'center',marginBottom:5,marginTop:5}}>Distance</Text>
<Text style={{color:'#000',fontSize:13,textAlign:'center',marginBottom:5,marginTop:5}}>27.8 km</Text>
</View>
<Text style={{color:'#D4D3DC',fontSize:30,marginBottom:5,marginTop:5}}>|</Text>
<View style={styles.tt}>
<Text  style={{color:'#D4D3DC',fontSize:13,textAlign:'center',marginBottom:5,marginTop:5}}>Prix</Text>
<Text style={{color:'#000',fontSize:13,textAlign:'center',marginBottom:5,marginTop:5}}>€43,32</Text>
</View>
</View>
<View style={styles.reserv}>
          <Button
          title='Réserver'
          color='#fff'
          textAlign='center'
          />
          </View>
          </View>
          </ScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>

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

    </SafeAreaView>
    <SafeAreaView style={styles.VBox}>
        <View style={styles.con}>
        <Image
        source={require('../../assets/chauffeur.png')} 
        style={styles.iamge}
      />
      
      <View style={styles.tt}>
        <Text style={{fontSize:15,color:'#D4D3DC',marginTop:5,position:"relative"}}>Fiat tipo 2016</Text>
        <Text style={{fontSize:23}}>Adam ben slimen</Text>
      </View>
      <TouchableOpacity onPress={()=>setisModelVisible(true)}>
      <Ionicons name="list-circle-sharp" size={45} color="#e91e63"  style={{position:"relative",top:5}}/>
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
            <Text style={{fontSize:25}}>Votre chauffeur</Text>
            <View style={styles.con}>
        <Image
        source={require('../../assets/chauffeur.png')} 
        style={styles.iamge}
      />
      <View style={styles.tt}>
        <Text style={{fontSize:20,marginTop:15,marginLeft:10}}>Adam ben slimen</Text>
      </View>
      <View style={styles.tt}>
      <Text style={{fontSize:10,position:'relative', marginTop:10,left:15}}>3.9/5</Text>
      <AntDesign name="star" size={10} color="#e91e63" style={{position:"relative",left:40,bottom:10}}  />
      </View>
      <View style={{flexDirection:"row"}}>
      <FontAwesome name="phone" size={15} color="#e91e63"style={{flexDirection:'row',position:'relative',top:40,right:5}}/>
      </View>
      <View style={{flexDirection:"row"}}>
      <FontAwesome name="envelope" size={15} color="#e91e63"style={{flexDirection:'row',position:'relative',top:40,right:5}} />
      </View>
      </View>
      <Text style={{fontSize:20,right:70,marginTop:5}}>Informations</Text>
      <View style={styles.con}>
        <Text style={{fontSize:15,marginBottom:15,marginTop:15}}>Véhicule</Text>
        <Text style={{fontSize:15,marginBottom:15,marginTop:15,color:"#D4D3DC"}}>Fiat tipo 2016</Text>
      </View>
      <Text style={{fontSize:20,right:70,marginTop:5}}>Préférences </Text>
      <Text style={{fontSize:12,marginBottom:5,marginTop:5,color:"#D4D3DC"}}>Les préférences varient d'un chauffeur à un autre</Text>
      <View style={styles.con2}>
      <View style={styles.cont2}>
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
      <View style={styles.cont2}>
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
      <View style={styles.cont2}>
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
      <View style={styles.con}>
        <Text style={{fontSize:13,marginBottom:15,marginTop:15}}>Horaires d'indisponisibilité </Text>
        <Text style={{fontSize:13,marginBottom:15,marginTop:15,color:"#D4D3DC"}}>De 00h à 9h</Text>
      </View>
      <View style={styles.con}>
        <Text style={{fontSize:13,marginBottom:15,marginTop:15,left:10}}>Délais min.Avant reservation</Text>
        <Text style={{fontSize:13,marginBottom:15,marginTop:15,color:"#D4D3DC",left:50}}>30 min</Text>
        <TouchableOpacity
         onPress={()=>setisModelVisible1(true)}>
      <Text style={{fontSize:13,marginBottom:15,marginTop:15,color:"#e91e63",top:15,right:180}}>En savoir plus</Text>
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
            <View style={styles.modal1}>
                <Text style={{textAlign:'center',fontSize:20,marginTop:10}}>Délais min. Avant réservation </Text>
                <Text style={{textAlign:'center',fontSize:12,marginTop:10,marginBottom:10,color:"#D4D3DC"}}>Vous ne pouvez pas réserver de courses dans la demi-heure précédant de départ de votre réservation </Text>
            </View>
        </TouchableOpacity>

      </Modal>
      </View>
      <View style={styles.con}>
        <Text style={{fontSize:13,marginBottom:15,marginTop:15,left:10}}>Délais max. Avant annulation</Text>
        <Text style={{fontSize:13,marginBottom:15,marginTop:15,color:"#D4D3DC",left:50}}>12h</Text>
        <TouchableOpacity
         onPress={()=>setisModelVisible2(true)}
>
      
      <Text style={{fontSize:13,marginBottom:15,marginTop:15,color:"#e91e63",top:15,right:180}}>En savoir plus</Text>
      
      </TouchableOpacity>
      <Modal
      
      transparent={true}
      animationType='fade'
      visible={isModalVisible2}
      onRequestClose={()=>close2()}
      >
        <TouchableOpacity
        onPressOut={()=>close2()}
        activeOpacity={1}
        style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.60)'}}
        >
            <View style={styles.modal1}>
                <Text style={{textAlign:'center',fontSize:20,marginTop:10}}>Délais max. Avant annulation </Text>
                <Text style={{textAlign:'center',fontSize:12,marginTop:10,marginBottom:10,color:"#D4D3DC"}}>Le délais maximal pour annuler votre trajet est indiqué. Une fois ce délai dépassé , l'annulation est bloquée dans l'application, mais vous pouvais toujour contacter votre chauffeur pour annuler le trajet. </Text>
            </View>
        </TouchableOpacity>

      </Modal>
      </View>
      <Text style={{fontSize:20,marginTop:5}}>Moyens de paiements accéptes</Text>
      <View style={styles.con2}>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:13}}>Espece</Text>
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
      <Text  style={{color:"#000",fontSize:13}}>TPE</Text>
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
      <Text  style={{color:"#000",fontSize:13}}>Paiement en ligne</Text>
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
      <View style={{margin:5}}></View>
          </View>
        </TouchableOpacity>
      </Modal>
        </View>
      </SafeAreaView> 
    </>
   )
  }
export default Acceuil;