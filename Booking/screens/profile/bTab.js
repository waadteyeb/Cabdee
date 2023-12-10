import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

function Acceuil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function ListChauffeur() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mes chauffeur</Text>
    </View>
  );
}

function Trajet() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mes trajets</Text>
    </View>
  );
}
function Disposition() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mise a disposition</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Acceuil"
      screenOptions={{
        tabBarActiveTintColor: '#9370db',
      }}
    >
      <Tab.Screen
        name="Acceuil"
        component={Acceuil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="location" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListChauffeur"
        component={ListChauffeur}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trajet"
        component={Trajet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="route"  color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Disposition"
        component={Disposition}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="date-range" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}