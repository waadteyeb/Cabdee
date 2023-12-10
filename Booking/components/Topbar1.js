import { InformationChauffeur, PreferenceChauffeur, ProfileChauffeur } from "../screens/index"



const ProfileTabScreen = ({ navigation }) => {
  return (
    <ProfileTabNavigator.Navigator tabBarOptions={{
        activeTintColor: Colors.COLOR_WHITE,
        labelStyle: {
            textTransform: "uppercase",
        },
        inactiveTintColor: Colors.COLOR_SUPER_DARK_GREY,
        indicatorStyle: {
            height: null,
            top: '10%',
            bottom: '10%',
            width: '45%',
            left: '2.5%',
            borderRadius: 100,
            backgroundColor: Colors.PRIMARY_TWO,
        },
        style: {
            alignSelf: "center",
            width: '50%',
            borderRadius: 100,
            borderColor: "blue",
            backgroundColor: "white"
        },
        tabStyle: {
            borderRadius: 100,
        },
    }}swipeEnabled={true}>
      <ProfileTabNavigator.Screen name="ProfileChauffeur" component={ProfileChauffeur} />
      <ProfileTabNavigator.Screen name="InformationChauffeur" component={InformationChauffeur} />
      <ProfileTabNavigator.Screen name="PreferenceChauffeur" component={PreferenceChauffeur} />
    </ProfileTabNavigator.Navigator>
  );
}
export default ProfileTabScreen;