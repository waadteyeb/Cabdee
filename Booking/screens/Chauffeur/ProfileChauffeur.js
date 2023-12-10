import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Image,StyleSheet , View , Text , Modal,TouchableOpacity,ScrollView , TextInput,Pressable} from 'react-native';
import { Button } from 'react-native';
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
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'90%',
        justifyContent:'space-evenly',
        borderRadius:20,
        borderColor:'#fff',
        borderWidth:0.5,
        marginLeft:15,
        marginTop:10
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
        width:'45%',
        justifyContent:'space-evenly',
        borderRadius:20,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        marginLeft:15,
        marginTop:10,
        padding:20
    },
    touchableOpacity:{
        backgroundColor:"#fff",
        paddingHorizontal:50,
    },
    modal:{
        backgroundColor:'#fff',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        borderColor:"#D4D3DC",
        borderWidth:0.5,
        margin:10
    },bt:{
        backgroundColor:"#e91e63",
        borderRadius:40,
        borderColor:"#e91e63",
        height:22,
        textAlign:'center'
    }
    })
const ProfileChauffeur = ({ navigation }) => {
    const [selection1, setSelection1] = useState(true);
    const [selection2, setSelection2] = useState(false);
    const [selection3, setSelection3] = useState(false);
    const [isModalVisible,setisModelVisible]=useState(false);
    const [isModalVisible1,setisModelVisible1]=useState(false);
    const close = ()=>setisModelVisible(false);
    const close1 = ()=>setisModelVisible1(false);
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
      <View style={styles.con2}>
      <View style={styles.cont2}>
      <TouchableOpacity
      onPress={()=>setisModelVisible1(true)}>
      <AntDesign name="eye" size={25} color="#e91e63"style={{position:'relative',bottom:10,left:100}}/>
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
                <Text style={{fontSize:30 , textAlign:"right"}}>Avis client</Text>
                
                    <View style={styles.con1}>
                    <Text style={{color:"#e91e63",fontSize:15}}>sarah mahfoudh</Text>
                    <AntDesign name="star" size={10} color="#e91e63" style={{flexDirection:'row',position:"relative",top:4}} />
                    <AntDesign name="star" size={10} color="#e91e63" style={{flexDirection:'row',position:"relative",top:4}} />
                    <AntDesign name="star" size={10} color="#e91e63" style={{flexDirection:'row',position:"relative",top:4}} />
                    <AntDesign name="staro" size={10} color="#e91e63"style={{flexDirection:'row',position:"relative",top:4}}  />                
                    <AntDesign name="staro" size={10} color="#e91e63"style={{flexDirection:'row',position:"relative",top:4}}  />  
                    </View>
                    <View style={styles.con1}>
                        <TextInput placeholder='Laisser un commantaire' style={{}}></TextInput>
                        <View 
                        style={{ backgroundColor:"#e91e63",
                        borderRadius:40,
                        borderColor:"#e91e63",
                        height:22,
                        textAlign:'center',
                        marginTop:5,
                        marginBottom:5
                        }}>
                        <Button 
                        
                        title='Envoyer'
                        color='#fff'
                        />
                        </View>
                        </View>
                        <View style={styles.con}>
                            <Text style={{color:"#e91e63",fontSize:15,marginRight:120,marginTop:5}}>Adlen fatnassi</Text>
                            <Text style={{fontSize:13,position:'relative', marginTop:10}}>4.9/5</Text>
                            <AntDesign name="star" size={15} color="#e91e63" style={styles.icone}  />
                        </View>
                        <View style={styles.con1}>
                            <Text style={{color:'#D4D3DC',fontSize:15,padding:10}}>C'est trés bien passer </Text>
                        </View>
            </View>
        </TouchableOpacity>

      </Modal>
      <Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>Avis clients</Text>
      <Text  style={{color:"#000",fontSize:25,textAlign:'center'}}>01</Text>
      </View>
      <View style={styles.cont2}>
      <Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>Vos trajets</Text>
      <Text  style={{color:"#000",fontSize:25,textAlign:'center'}}>11</Text>
      </View>
      </View>
      <Text style={{color:"#000",fontSize:20,textAlign:'justify', marginLeft:10,marginBottom:10,marginTop:10}}>À Propos</Text>
      <View style={styles.con1}>
        <Text style={{color:'#D4D3DC',fontSize:15,padding:10}}>
            je suis un chauffeur je suis un chauffeur je suis un chauffeur je suis un chauffeur je suis un chauffeur je suis un chauffeur je suis un chauffeur je suis un chauffeur je suis un chauffeur 
            je suis un chauffeur 
        </Text>
        
      </View>
      <Text style={{color:"#000",fontSize:20,textAlign:'justify', marginLeft:10,marginBottom:10,marginTop:10}}>Identifiants du chauffeur</Text>
      <View style={styles.con2}>
      <View style={styles.cont2}>
      <TouchableOpacity>
      <MaterialIcons name="file-copy" size={25} color="#e91e63"style={{position:'relative',bottom:20,left:100}} />
     </TouchableOpacity>
      <Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>ID</Text>
      <Text  style={{color:"#000",fontSize:19}}>#ID225MLK0</Text>
      </View>
      <View style={styles.cont2}>
    <TouchableOpacity
         onPress={()=>setisModelVisible(true)}
>
      <AntDesign name="eye" size={25} color="#e91e63"style={{position:'relative',bottom:20,left:100}}/>
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
                <Text style={{textAlign:'center',fontSize:30,marginTop:20 }}>Code QR</Text>
                <FontAwesome name="qrcode" size={200} color="#e91e63" />
            </View>
        </TouchableOpacity>

      </Modal>
      <Text style={{color:'#D4D3DC',fontSize:15,textAlign:'center'}}>Code QR</Text>
      <FontAwesome name="qrcode" size={40} color="black" style={{position:'relative',top:10,left:50}}/>
      </View>
      </View>
      <View style={styles.con1}>
      <TouchableOpacity>
      <MaterialIcons name="file-copy" size={25} color="#e91e63"style={{position:"absolute",bottom:30,left:280}} />
     </TouchableOpacity>
        <Text style={{color:'#000',fontSize:20,padding:10,marginTop:15}}>
            Lient du partage de profile
        </Text>
      </View>
      <View>
        <Text style={{color:"#fff",fontSize:30}}>.</Text>
      </View>
    </View>
    </ScrollView>
    
    </>
  )
}

export default ProfileChauffeur;
