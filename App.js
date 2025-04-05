import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from './screen/homeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from './screen/profileScreen';
import CartScreen from './screen/cartScreen';

const Stack = createNativeStackNavigator();;
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={{ headerShown: false}}>
        <tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }}/>
        <tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} /> }}/>
      </tab.Navigator>
    </NavigationContainer>    
  );
}

