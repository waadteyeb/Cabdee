
import React,{useState} from 'react'
import Checkbox from 'expo-checkbox';
import {ButtonCh} from '../Chauffeur/ButtonCh';
import { Image,StyleSheet , View , Text , Modal,TouchableOpacity,ScrollView , TextInput,Pressable} from 'react-native';
import { Button } from 'react-native';
import Icon from 'react-native-ico-material-design';

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
        borderRadius:10,
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
          width:340,
          height:50,
          color:'#fff',
          fontSize:20,
          borderRadius:15,
          textAlign:'center',
          marginTop:25,
          marginBottom:5,
          justifyContent:'flex-end',
          marginTop:90
        },
    })
const ParametrePer = ({ navigation }) => {
  const [selection1, setSelection1] = useState(false);
  const [selection2, setSelection2] = useState(true);
  const [selection3, setSelection3] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);
    const [isChecked7, setChecked7] = useState(false);
    const [isChecked8, setChecked8] = useState(false);
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
    <Text style={{fontSize:25,margin:10}}>Notification:</Text>
   <View style={styles.con1}>
    <Text style={{fontSize:13,margin:10}}>
        Quand une course est annuler    
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#e91e63" : undefined}
        />

    </Text>
      </View>
      <View style={styles.con1}>
    <Text style={{fontSize:13,margin:10}}>
        Quand une course est en attente
        
        <Checkbox
          style={styles.checkbox}
          value={isChecked2}
          onValueChange={setChecked2}
          color={isChecked2 ? "#e91e63" : undefined}
        />
      
    </Text>
      </View>
      <View style={styles.con1}>
    <Text style={{fontSize:13,margin:10}}>
        Quand la position du chauffeur est dusponible
        
        <Checkbox
          style={styles.checkbox}
          value={isChecked3}
          onValueChange={setChecked3}
          color={isChecked3 ? "#e91e63" : undefined}
        />
    </Text>
      </View>

      <View style={styles.con1}>
    <Text style={{fontSize:13,margin:10}}>
        Quand un chauffeur n'est plus opérationnel
        
        <Checkbox
          style={styles.checkbox}
          value={isChecked4}
          onValueChange={setChecked4}
          color={isChecked4 ? "#e91e63" : undefined}
        />
    </Text>
      </View>

      <View style={styles.con1}>
    <Text style={{fontSize:13,margin:10}}>
        Notifications promotionnelles
        
        <Checkbox
          style={styles.checkbox}
          value={isChecked5}
          onValueChange={setChecked5}
          color={isChecked5 ? "#e91e63" : undefined}
        />
    </Text>
      </View>

  <Text style={{fontSize:25,margin:10}}>Mes impératifs:</Text>
      <View style={styles.con2}>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Véhicule PMR</Text>
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
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Chaise roulante</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked7}
          onValueChange={setChecked7}
          color={isChecked7 ? "#e91e63" : undefined}
        />
      </View>
      </View>
      </View>
      <View style={styles.cont2}>
      <Text  style={{color:"#000",fontSize:16}}>Chein d'aveugle</Text>
      <View style={styles.cont}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked8}
          onValueChange={setChecked8}
          color={isChecked8 ? "#e91e63" : undefined}
        />
      </View>
      </View>
      </View>
      </View>
      <View style={styles.btconnect}>
          <Button
          title='Valider'
          color='#fff'
          textAlign='center'
          onPress={()=>navigation.navigate("ParametrePai") }
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

export default ParametrePer
