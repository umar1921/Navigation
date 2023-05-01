import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ImageGallery from "../screens/ImageGallery";
import ShowImage from "../screens/ShowImage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackNaviator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Gallery" component={ImageGallery} />
    </Stack.Navigator>
  );
};
const ImageStackNaviator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ImageGallery" component={ImageGallery} />
      <Stack.Screen name="Show Image" component={ShowImage} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#ff0000"
        inactiveColor="#3e2465"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3740FE",
          },
          headerTintColor: "#ff0000",
        }}
      >
        <Tab.Screen
          name="LogIn"
          component={LoginScreen}
          options={{
            title: "Log In",
            tabBarIcon: ({ color }) => (
              <AntDesign name="login" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Product"
          component={HomeStackNaviator}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          screenOptions={{ headerShown: false }}
          name="Gallery"
          component={ImageStackNaviator}
          options={{
            title: "Gallery",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-gallery-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <AntDesign name="profile" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
