import { View, Text,StyleSheet,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const ButtonCh = ({onPress,text,type="PRIMARY",bgColor,fgColor,iconName}) => {
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
    backgroundColor:'#fff',
    borderColor:'#fff',
    borderWidth:2,
  },
  container_PRIMARY:{
    backgroundColor:'#EEEEEE',
    borderColor:'#EEEEEE',
    borderWidth:2,
  },
  container_TERITARY:{
    backgroundColor:'#FCFCFC',
  },
  text:{
    fontWeight:'bold',
    color:'#D4D3DC',
  },
  text_TERITARY:{
    color:'gray'
  },
  text_SECONDARY:{
    color:'#e91e63',
  },
  buttonContents: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  icon: {
    marginRight: 10, 
  }
})

export default ButtonCh;