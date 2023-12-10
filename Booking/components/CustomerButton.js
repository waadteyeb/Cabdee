import { View, Text,StyleSheet,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const CustomerButton = ({onPress,text,type="PRIMARY",bgColor,fgColor,iconName}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,
    styles[`container_${type}`],
    bgColor ?{backgroundColor:bgColor}:{}
    ]}>
       
       <View style={styles.buttonContents}>
        {iconName && <Icon name={iconName} size={20} color={fgColor} style={styles.icon} />}
        <Text style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {}
        ]}>
          {text}
        </Text>
      </View>
      
    </Pressable>
  )
}

const styles=StyleSheet.create({
  container:{
    
    backgroundColor:'#9370db',
    width:100,
    padding:15,
    marginLeft:10,
    marginVertical:5,
    alignItems:'center',
    borderRadius:10,
    
  },

  container_SECONDARY :{
    backgroundColor:'#E6E1F5',
    borderColor:'#9370db',
    borderWidth:2,
  },
    

  
  container_PRIMARY:{
    backgroundColor:'white',
    borderColor:'#9370db',
    borderWidth:2,
    
  },
  container_TERITARY:{
    
    backgroundColor:'#FCFCFC',

  },

  text:{
    fontWeight:'bold',
    color:'#9370db',
  

  },
  text_TERITARY:{
    color:'gray'

  },
  text_SECONDARY:{
    color:'#9370db',
  },
  buttonContents: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  icon: {
    marginRight: 10, 
  }
})

export default CustomerButton;