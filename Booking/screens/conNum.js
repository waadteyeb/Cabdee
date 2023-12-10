import React, { useRef,useState } from 'react';
import {View,Text,StyleSheet,ScrollView,TextInput,TouchableOpacity,Button,Pressable} from 'react-native';

const ConNum= ({ navigation })=>{
const firstInput = useRef();
 const secondInput = useRef();
 const thirdInput = useRef();
 const fourthInput = useRef();
 const fithInput = useRef();
 const sixInput = useRef();
 const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '',5:'',6:''});


 return( 
    <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={style.scroll}>
     <View style={style.container_ip}>
      <Text style={style.Titel}>Confirmer votre numéro</Text>
    
      <Text style={style.text}>Nous vous avons envoyé un numéro de vérification OTP sur votre numéro de téléphone</Text>
    
      <Text style={style.label}>Code de vérification OTP : </Text>
      <View style={style.otpContainer}>
            <View style={style.otpBox}>
              <TextInput
                style={style.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={text => {
                  setOtp({...otp, 1: text});
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View style={style.otpBox}>
              <TextInput
                style={style.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={text => {
                  setOtp({...otp, 2: text});
                  text ? thirdInput.current.focus() : firstInput.current.focus();
                }}
              />
            </View>
            <View style={style.otpBox}>
              <TextInput
                style={style.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={text => {
                  setOtp({...otp, 3: text});
                  text ? fourthInput.current.focus() : secondInput.current.focus();
                }}
              />
            </View>
            <View style={style.otpBox}>
              <TextInput
                style={style.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={text => {
                  setOtp({...otp, 4: text});
                  text ? fithInput.current.focus() : thirdInput.current.focus();
                }}
              />
            </View>
            <View style={style.otpBox}>
              <TextInput
                style={style.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fithInput}
                onChangeText={text => {
                  setOtp({...otp, 5: text});
                  text ? sixInput.current.focus() : fourthInput.current.focus();
                }}
              />
            </View>
            <View style={style.otpBox}>
              <TextInput
                style={style.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={sixInput}
                onChangeText={text => {
                  setOtp({...otp, 6: text});
                  !text && fithInput.current.focus();
                }}
              />   
            </View>
          </View>   
          <Text style={style.text_link}>Vous n'avez pas reçu de code ?</Text> 
          
          <TouchableOpacity
            onPress={() => console.log(otp)}>
        <Text style={style.link}>Vous pouvez en renvoyez un dans 55s</Text>
      </TouchableOpacity> 
      <View style={style.btconnect}>
          <Button
          title='Valider'
          color='#fff'
          textAlign='center'
          />
          </View>
          <View style={style.cnt}>
          <Text style={style.text_linkV}> On créant un compte , vous acceptez nos
          <Pressable
           onPress={() => navigation.navigate("Login")}
           >
                <Text style={style.linkV} > condition générales d'utilisation </Text>
             </Pressable>
             et notre
             <Pressable
           onPress={() => navigation.navigate("Login")}
           >
                <Text style={style.linkV} > politique de confidentialité</Text>
             </Pressable> 
          </Text>
          </View>
     </View>
     </ScrollView>
     );
    }
    
    const style=StyleSheet.create({
      cnt:{
       alignItems:'center',
       justifyContent: 'center',
      },
      scroll:{
        marginTop:30,
        flex:1,
        justifyContent: 'space-between', 
      },
       btconnect:{
        backgroundColor:'#9370db',
        width:350,
        height:50,
        color:'#fff',
        fontSize:20,
        borderRadius:15,
        textAlign:'center',
        marginTop:120,
        marginLeft:10,
      },
      container_ip: {
        flex: 2,
        
        alignItems:'flex-start',
        backgroundColor: '#fff',
        heigh:'100%',
        width:'100%',
       
      },
      Titel:{
        marginLeft:10,
        color:'#000000',
        fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
       
      },
      text:{
        color:'#A6A6A6',
        textAlign: 'left',
        marginTop:5,
        marginBottom:40,
        marginLeft : 10,
        fontSize:15
      },
      text_link:{
        color:'#A6A6A6',
        textAlign: 'left',
        marginLeft : 10,
        marginTop:30,
        fontSize:15
      },
      text_linkV:{
        alignItems:'center',
      justifyContent: 'center',
      color:'#A6A6A6',
      textAlign: 'center',
      marginLeft : 10,
      marginBottom:30,
      fontSize:12
      },
      label: {
        fontSize: 20,
        color: 'black',
        marginVertical: 5,
        textAlign:'left', 
        marginLeft:10,
        marginBottom:10
      },
      
      link:{
        color:'#9C98D1',
        fontSize:15,
        marginLeft:10,
        marginTop:10
      },
      linkV:{
        alignItems:'center',
      justifyContent: 'center',
      fontSize : 12,
      color:'#9370db',
      textAlign:'center'
      },
    otpContainer: {
        marginHorizontal: 3,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
      otpBox: {
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor:'#D4D3DC',
        margin:3,
        width:55,
        height:55
      },
      otpText: {
        fontSize: 25,
        color: 'black',
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
      },
   
      
      test:{
        flexDirection: 'row', 
        width:100,
        height:7,
        backgroundColor:'#9370db',
        margin:10
      }
    })
    export default ConNum ;