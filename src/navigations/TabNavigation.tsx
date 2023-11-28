import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import FeedScreen from "../screens/FeedScreen";
import Settings from "../screens/Settings";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import LocationsNearbtScreen from "../screens/LocationsNearbyScreen";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="feed" color={color} size={size} />
          ),
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Tab.Screen
        name="LocationsNearby"
        component={LocationsNearbtScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="location" color={color} size={size} />
          ),
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      />
    </Tab.Navigator>
  );
}
