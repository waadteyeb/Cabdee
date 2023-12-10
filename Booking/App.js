import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  InfPer, Login , Signup , InfCnx ,
   ConNum, Acceuil,ListChauffeur ,
   Disposition,Trajet,ProfileChauffeur,InformationChauffeur,PreferenceChauffeur,ParametrePai,ParametrePer
  } 
   from './screens/index';
import Parametre from './screens/profile/Parametre';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
      name='Login'
      component={Login}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='Signup'
      component={ Signup }
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='InfPer'
      component={ InfPer }
      options={{headerShown:false}}
      />
       <Stack.Screen 
      name='InfCnx'
      component={ InfCnx}
      options={{headerShown:false}}
      />
       <Stack.Screen 
      name='ConNum'
      component={ ConNum}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='Acceuil'
      component={ Acceuil}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='ListChauffeur'
      component={ ListChauffeur}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='Disposition'
      component={ Disposition}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='Trajet'
      component={Trajet}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='ProfileChauffeur'
      component={ProfileChauffeur}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='InformationChauffeur'
      component={InformationChauffeur}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='PreferenceChauffeur'
      component={PreferenceChauffeur}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='ParametrePer'
      component={ParametrePer}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='ParametrePai'
      component={ParametrePai}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='Parametre'
      component={Parametre}
      options={{headerShown:false}}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

