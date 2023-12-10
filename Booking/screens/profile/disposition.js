import React , { useState, useEffect }from 'react';
import { StyleSheet , View , Text , Button,Pressable, TextInput, TouchableOpacity,Modal} from 'react-native';
import Icon from 'react-native-ico-material-design';
import { BarCodeScanner } from 'expo-barcode-scanner';
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
        marginLeft:10,
    },
    btb:{
      backgroundColor:'#fff',
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
    VBox:{
      position:'absolute',
      alignItems:'center',
   },
    IconBehave:{
      padding:14
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
  },code:{
    flexDirection:"row",
    borderWidth: 1,
     width:'75%',
     height:200,
    borderRadius:15,
    textAlign:'center',
   borderColor:'#D4D3DC',
   margin:30
  }
})

const Disposition = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isModalVisible,setisModelVisible]=useState(false);
  const close = ()=>setisModelVisible(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
    <View style={styles.container_ip}>
        <Text style={styles.Titel}>Mise a disposition </Text>
        <View>
         <Text style={styles.tv}>Ajouter un chauffeur:</Text>
         <View style={{flexDirection:"row",borderWidth: 1,
             width:340,
            height:40,
              borderRadius:15,
              textAlign:'center',
                borderColor:'#D4D3DC',}}>
            <TextInput style={{marginTop:10,
              marginLeft:10,
              marginBottom:10,
              textAlign:'center',
            }}
           placeholder="Rechercher un ID ou scanner un QR code"
             >
         </TextInput>
         
        <TouchableOpacity onPress={()=>setisModelVisible(true)}>
            <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" style={{position:"relative",top:8,left:20}}/>
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
          <View style={styles.code}>
            <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
         />
                {scanned &&<Button title={'Tap to Scan Again'} color="#fff" onPress={() => setScanned(false)}
                style={{backgroundColor:"#fff", margin:10}}
                 />}
                </View>
            </View>
        </TouchableOpacity>
        </Modal>
     </View>
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
         <Pressable onPress={() => navigation.navigate("Trajet")}>
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

export default Disposition;

