import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
import { Intro } from '../pages/Intro';
import { Home } from '../pages/Home';
import { Class } from '../pages/Class';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.black,
      },
    }}
  >
    <stackRoutes.Screen name="Login" component={Login} />
    <stackRoutes.Screen name="Register" component={Register} />
    <stackRoutes.Screen name="Intro" component={Intro} />
    <stackRoutes.Screen name="Home" component={Home} />
    <stackRoutes.Screen name="Class" component={Class} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
