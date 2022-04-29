import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/pages/Profile';
import Careers from './src/pages/Careers';
import Etc from './src/pages/Etc';
import ProfileDetails from './src/pages/ProfileDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: '#fff'},
};

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{title: ''}}
      />
    </ProfileStack.Navigator>
  );
}

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'ProfileStackScreen') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Careers') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
            } else {
              iconName = focused ? 'ios-globe' : 'ios-globe-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="ProfileStackScreen"
          component={ProfileStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Careers"
          component={Careers}
          options={{title: '경력사항'}}
        />
        <Tab.Screen name="Etc" component={Etc} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
