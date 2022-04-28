import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Profile from './src/pages/Profile';
import Careers from './src/pages/Careers';
import Etc from './src/pages/Etc';

const Tab = createBottomTabNavigator();
const navigationTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: '#fff'},
};

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{title: '내 프로필'}}
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
