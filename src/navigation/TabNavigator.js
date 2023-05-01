import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from './StackNavigator'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='LogIn' component={MainStackNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigator
