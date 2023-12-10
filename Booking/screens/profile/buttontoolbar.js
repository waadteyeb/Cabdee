import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import locatiser from '../../assets/localiser.png';

const Tab = createBottomTabNavigator();
const Bottomtab =()=>{
    return (
        <Tab.Navigator
        initialRouteName="Acceuil"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Acceuil"
          component={Acceuil}
          options={{
            tabBarLabel: 'Acceuil',
            tabBarIcon: ({ color, size }) => (
              <Image source={locatiser} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}
export default Bottomtab;
