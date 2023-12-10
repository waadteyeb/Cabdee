import {useState , React} from 'react';
import { StyleSheet, Text, View , TextInput,Button,ScrollView} from 'react-native';
import CustomerButton from '../components/CustomerButton';
import axios from 'axios';
const styles = StyleSheet.create({
    scroll:{
      marginTop:30,
      flex:1,
      justifyContent: 'space-between', 
    },
    container_ip: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      heigh:'100%',
      width:'100%'
    },
    Titel:{
        color:'#000000',
        fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
       
      },
      label:{
        fontSize:18,
        color:'#000000',
        marginTop:10,
        marginBottom:10
      },
      input:{
        marginBottom:10,
        borderWidth: 1,
        width:340,
        height:50,
        borderRadius:15,
        textAlign:'center',
        borderColor:'#D4D3DC',
      },
      btconnect:{
        backgroundColor:'#9370db',
        width:350,
        height:50,
        color:'#fff',
        fontSize:20,
        borderRadius:15,
        textAlign:'center',
        marginTop:25,
        marginBottom:5
      },
      t:{
      color:'#D4D3DC',
      fontSize:15,
      marginBottom:20,
      },
      tl:{
        fontSize : 15 ,
      },
      bl:{
        
        fontSize : 15,
        color:'#9370db',
      },
      scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between', // Align content vertically at the ends
      },
      cb:{
        flexDirection: 'row', 
      },
      test:{
        flexDirection: 'row', 
        width:100,
        height:7,
        backgroundColor:'#9370db',
        margin:10
      }
})
const InfPer = ({ navigation }) =>{
  const [selection, setSelection] = useState('');
  const [namecl,setnamecl]=useState('');
  const [lastnamecl,setLastnamecl]=useState('');
  const [birthdatecl,setBirthdatecl]=useState('');
  const [adresscl,setAdresscl]=useState('');
  const handleSignup = async (data) => {
    try {
      const response = await axios.post(
        "http://exp://192.168.0.165:8081/api/client/register",
        [
          NameCL=data.namecl,
          LastNameCl=data.lastnamecl,
          BirthDateCL=data.birthdaycl,
          AdressCL = data.adresscl,
        ],
      );
      console.log(response.data);
       navigation.navigate("InfCnx");
    } catch (error) {
      console.error('Error signing up: ', error);
      // Handle error
    }
  };
  

    return(
    <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>     
    <View style={styles.container_ip}>
        <Text style={styles.Titel}>Informations personnels</Text>
        <View>
          <Text style={styles.label}>Nom</Text>
          <TextInput
          value={namecl} 
          onChangeText={setnamecl}
          style={styles.input}
          placeholder="Votre nom"
          >
          </TextInput>
          
          <Text style={styles.label}>Prénom</Text>
          <TextInput
          value={lastnamecl} 
          onChangeText={setLastnamecl}
          style={styles.input}
          placeholder="Votre prénom"
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
          <Text style={styles.label}>Gender</Text>
          <View style={styles.cb}>
          <CustomerButton 
              
              text="Homme" 
              onPress={() => setSelection(1)}
                type={selection === 1 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection === 1  ? '#E6E1F5' : undefined}
                fgColor={selection === 1 ? '#9370db' : undefined}  />
                <CustomerButton 
                
                   text="Femme" 
                   onPress={() => setSelection(2)}
                type={selection === 2 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection === 2 ? '#E6E1F5' : undefined}
                fgColor={selection === 2 ? '#9370db' : undefined}  />
                <CustomerButton 
              text="Autre" 
              onPress={() => setSelection(3)}
                type={ selection === 3 ? 'SECONDARY' : 'PRIMARY'}
                bgColor={selection === 3  ? '#E6E1F5' : undefined}
                fgColor={selection === 3 ? '#9370db' : undefined}  />
              </View> 
              <Text style={styles.label}>Adresse (facultatif)</Text>
          <TextInput
          value={adresscl}
          onChangeText={setAdresscl}
          style={styles.input}
          placeholder="Votre adresse"
          >
          </TextInput> 
          </View>
          <View style={styles.btconnect}>
          <Button
          title='Suivant'
          color='#fff'
          textAlign='center'
          onPress={handleSignup}
          />
          </View>
        </View>
        </ScrollView>
    )
}

export default InfPer ;