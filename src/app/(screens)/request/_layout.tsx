import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Stack } from "expo-router";
import seach from "./seach";
import category from "./category";


export default function Layout() {
  return (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="category" options={{ headerShown: false }}  />
          <Stack.Screen name="confirm" options={{ headerShown: true }} />
          <Stack.Screen name="seach" options={{ headerShown: false }}  />
          <Stack.Screen name="drive" options={{ headerShown: true }} />
          <Stack.Screen name="delivery" options={{ headerShown: true }} />
        </Stack>
  );
};

