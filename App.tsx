import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/pages/Profile';
import Careers from './src/pages/Careers';
import Etc from './src/pages/Etc';

import ProfileDetails from './src/pages/ProfileDetails';

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
      <ProfileStack.Screen name="ProfileDetails" component={ProfileDetails} />
    </ProfileStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Careers"
          component={Careers}
          options={{title: '경력사항'}}
        />
        <Tab.Screen name="Etc" component={Etc} options={{title: '기타..'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
