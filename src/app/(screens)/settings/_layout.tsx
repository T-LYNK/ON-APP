import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenStack } from "react-native-screens";

const Stack = createStackNavigator();

export default function Layout() {
  return (
        <Stack.Navigator initialRouteName="editprofile" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="editprofile" options={{ headerShown: true }}  />
          <Stack.Screen name="editpassword" options={{ headerShown: true }} />
        </Stack.Navigator>
  );
};

