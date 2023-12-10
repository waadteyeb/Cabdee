import 'react-native-gesture-handler';
import { View, Text,Image,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList, createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../Screens/SignUpScreen';
import InfoPersonnal from '../Screens/InfoPersonnal';
import ProgressBar from '../components/ProgressBar/ProgressBar'
import InfoConnexion from '../Screens/InfoConnexion';
import InfoFacture from '../Screens/InfoFacture';
import ConfirmNum from '../Screens/ConfirmNum';
import VerifIdentity from '../Screens/VerifIdentity';
import VerifVTC from '../Screens/VerifVTC';
import VerifVehicule from '../Screens/VerifVehicule';
import SignIn from '../Screens/SignIn';
import SignInScreen from '../Screens/SignInScreen';
import Profile from '../Screens/Profile';
import VerifCompte from '../Screens/VerifCompte';
import ForgetPassword from '../Screens/ForgetPassword';
import Trafication from '../Screens/Trafication';
import Vehicule from '../Screens/Vehicule';
import GetStarted from '../Screens/GetStarted';
import HomeScreen from '../Screens/HomeScreen';
import Settings from '../Screens/Settings';
import Facturation from '../Screens/Facturation';
import Information from '../Screens/Information';
import Preferences from '../Screens/Preferences';
import Abonnement from '../Screens/Abonnement';
import EssentielScreen from '../Screens/EssentielScreen';
import PremiumScreen from '../Screens/PremiumScreen';
import UnlimitedScreen from '../Screens/UnlimitedScreen';
import { useUserData } from '../UserDataContext';



const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Tab = createBottomTabNavigator();
const Tab1 = createMaterialTopTabNavigator();
const Tab2 = createMaterialTopTabNavigator()

const navigation = () => {
  const { name, email, pic } = useUserData();
  const totalSteps = 6; 
  const currentStep1 = 1; 
  const currentStep2 = 2;
  const currentStep3 = 3;
  const currentStep4 = 4;
  const currentStep5 = 5;
  const currentStep6 = 6;


  const Abonn = () => {
    
  
    return (
      <Stack1.Navigator>
        <Stack1.Screen
          name="AbonnementMain"
          component={Abonnement}
          options={{headerShown:false}}
        />
        <Stack1.Screen
          name="Essentiel"
          component={EssentielScreen}
          
        />
        <Stack1.Screen
          name="Premium"
          component={PremiumScreen}
        />
        <Stack1.Screen
          name="Unlimited"
          component={UnlimitedScreen}
        />
         <Stack1.Screen
          name="InfoFacture"
          component={InfoFacture}
          options={{headerShown:false}}
        />

      </Stack1.Navigator>
    );
  };
 

  
  const Root = () => (
    <Drawer.Navigator
    drawerPosition="left"
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1
              }}
            >
              <Image
                source={{ uri: pic }}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 65
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  color: "#111"
                }}
              >{email}</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#111"
                }}
              >Chauffeur Almee</Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 307,
        },
        headerStyle: {
          backgroundColor: "#A36CB6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#111",
        },
       
      }}
    >
      <Drawer.Screen
        name="tab"
        options={{
          drawerLabel: "Acceuil",
          title: "Acceuil",
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={20} color="#A36CB6" />
          ),
        }}
        component={MainTabs}
      />
       <Drawer.Screen
        name="Courses"
        options={{
          drawerLabel: "Mes courses",
          title: "Mes courses",
          drawerIcon: () => (
            <SimpleLineIcons name="direction" size={20} color="#A36CB6" />
          ),
        }}
        component={HomeScreen}
      />
         <Drawer.Screen
        name="Notification"
        options={{
          drawerLabel: "Mes notifications",
          title: "Mes notifications",
          drawerIcon: () => (
            <SimpleLineIcons name="bell" size={20} color="#A36CB6" />
          ),
        }}
        component={HomeScreen}
      />
       <Drawer.Screen
        name="AbonnementFacturations"
        options={{
          drawerLabel: "Abonnement&Facturations",
          title: "Abonnement & Facturations",
          drawerIcon: () => (
            <SimpleLineIcons name="wallet" size={20} color="#A36CB6" />
          ),
        }}
        component={Abo}
      />
       <Drawer.Screen
        name="Paimenet"
        options={{
          drawerLabel: "Paiemenet",
          title: "Paiment",
          drawerIcon: () => (
            <SimpleLineIcons name="credit-card" size={20} color="#A36CB6" />
          ),
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Parameters"
        options={{
          drawerLabel: "Paramétres",
          title: "Paramétres",
          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#A36CB6" />
          ),
        }}
        component={Main}
      />
    </Drawer.Navigator>
  );

 

  const MainTabs = () => {
    return (
      <Tab.Navigator  initialRouteName="HomeScreen"
       screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          let rn=route.name;
          if(rn==="Acceuil"){
            iconName=focused ? 'home':'home-outline'
          }
          else if (rn === "Paramétres") {
            iconName = focused ? 'settings' : 'settings-outline';
          }
  
          return <Ionicons  name={iconName} size={size} color={color} />;
  
        },
        tabBarActiveTintColor: '#A36CB6',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 },
      })} >
        <Tab.Screen name="Acceuil" component={HomeScreen} options={{ headerShown: false }} />
      
        <Tab.Screen name="Paramétres" component={Main} options={{ headerShown: false }}/>
      </Tab.Navigator>
      
    );
  };

  const Main=()=>{
    return (
      <Tab1.Navigator
        initialRouteName="Settings"
        screenOptions={{
          tabBarActiveTintColor: '#A36CB6',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIndicatorStyle: { backgroundColor: '#A36CB6' }, // Mauve color
        }}
      >
        <Tab1.Screen
          name="Paramétre"
          component={Settings}
          options={{ tabBarLabel: 'Profil' }}
        />
        <Tab1.Screen
          name="Informations"
          component={Information}
          options={{ tabBarLabel: 'Informations' }}
        />
         <Tab1.Screen
          name="Preferences"
          component={Preferences}
          options={{ tabBarLabel: 'Préférences' }}
        />
        
      </Tab1.Navigator>
    );
  }

  const Abo=()=>{
    return (
      <Tab2.Navigator
        initialRouteName="Abonn"
        screenOptions={{
          tabBarActiveTintColor: '#A36CB6',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIndicatorStyle: { backgroundColor: '#A36CB6' }, // Mauve color
        }}
      >
        <Tab2.Screen
          name="Abonnement"
          component={Abonn}
          options={{ tabBarLabel: 'Abonnement' }}
        />
        <Tab2.Screen
          name="Facturation"
          component={Facturation}
          options={{ tabBarLabel: 'Facturation',title:"Cette année" }}
        />
       
        
      </Tab2.Navigator>
    );
  }

  return (
    
  <NavigationContainer>   
    <Stack.Navigator initialRouteName="GetStarted" >
    <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}/>
    <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
    <Stack.Screen name="EssentielScreen" component={EssentielScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
    <Stack.Screen name="Information" component={Information} options={{headerShown:false}} />
    <Stack.Screen name="Abo" component={Abo} options={{headerShown:false}} />
    <Stack.Screen name="Pref" component={Preferences} options={{headerShown:false}} />
    <Stack.Screen name="Acceuil" component={HomeScreen} options={{headerShown:false}} />
    <Stack.Screen name="Paramétres" component={Settings} options={{headerShown:false}} />
    <Stack.Screen name="Root" component={Root} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
            <Stack.Screen name="InfoPersonnal" component={InfoPersonnal} 
                  options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep1} totalSteps={totalSteps} />
                  ),
              }} />
          
                
          
      <Stack.Screen name="InfoConnexion" component={InfoConnexion} 
         options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep2} totalSteps={totalSteps} />
                  ),
              }}
      />
      <Stack.Screen name="ConfirmNum" component={ConfirmNum} 
        options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep3} totalSteps={totalSteps} />
                  ),
              }}
      />
      <Stack.Screen name="VerifIdentity" component={VerifIdentity} options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep4} totalSteps={totalSteps} />
                  ),
              }} />
      <Stack.Screen name="VerifVTC" component={VerifVTC}
       options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep5} totalSteps={totalSteps} />
                  ),
              }}

       />
      <Stack.Screen name="VerifVehicule" component={VerifVehicule}
       options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={totalSteps} totalSteps={totalSteps} />
                  ),
              }}

       />
     <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
     <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
     <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown:false}}/>
     <Stack.Screen name="VerifCompte" component={VerifCompte} options={{headerShown:false}}/>
     <Stack.Screen name="Profile" component={Profile} options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep1} totalSteps={currentStep3} />
                  ),
              }} />

      <Stack.Screen name="Trafication" component={Trafication} options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep2} totalSteps={currentStep3} />
                  ),
              }} />
   <Stack.Screen name="Vehicule" component={Vehicule} options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep3} totalSteps={currentStep3} />
                  ),
              }} />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default navigation;