import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Backgrounds, Buttons, Fonts} from '../components';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: {elevation: 0},
        tabBarItemStyle: {padding: 0},
      }}>
      <Tab.Screen name="Background" component={Backgrounds} />
      <Tab.Screen name="Button" component={Buttons} />
      <Tab.Screen name="Font" component={Fonts} />
    </Tab.Navigator>
  );
}
