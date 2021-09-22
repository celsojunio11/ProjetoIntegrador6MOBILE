import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';

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
    <stackRoutes.Screen name="Home" component={Home} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
