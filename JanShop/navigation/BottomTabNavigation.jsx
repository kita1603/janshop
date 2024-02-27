import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import { Home, Profile, Search } from '../screens';
import {COLORS} from "../constants/index";
import * as Font from 'expo-font';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70, 
    },
};

const loadIoniconsFont = async () => {
  await Font.loadAsync({
    Ionicons: Ionicons.font,
  });
};

const BottomTabNavigation = () => {
    useEffect(() => {
      loadIoniconsFont();
    }, []);

    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons 
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
        />

         <Tab.Screen 
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons 
                name={focused ? "search-sharp" : "search-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
        />

         <Tab.Screen 
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons 
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
             />
            );
          },
        }}
        />
      </Tab.Navigator>
    );
};

export default BottomTabNavigation;