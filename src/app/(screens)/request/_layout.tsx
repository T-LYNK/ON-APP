import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenStack } from "react-native-screens";

const Stack = createStackNavigator();

export default function Layout() {
  return (
        <Stack.Navigator initialRouteName="category" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="category" options={{ headerShown: true }}  />
          <Stack.Screen name="confirm" options={{ headerShown: true }} />
          <Stack.Screen name="seach" options={{ headerShown: true }} />
          <Stack.Screen name="drive" options={{ headerShown: true }} />
          <Stack.Screen name="delivery" options={{ headerShown: true }} />
        </Stack.Navigator>
  );
};

