import "../../global.css";
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenStack } from "react-native-screens";
import Auth from "./auth";
import Register from "./register";
import Request from "./request/category";

const Stack = createStackNavigator();

export default function Layout() {
  return (
        <Stack.Navigator initialRouteName="auth" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth" options={{ headerShown: false }} component={Auth} />
          <Stack.Screen name="register" options={{ headerShown: false }} component={Register} />
          <Stack.Screen name="request" options={{ headerShown: false }} component={Request} />
        </Stack.Navigator>
  );
};

