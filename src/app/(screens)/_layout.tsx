import "../../global.css";
import React from "react";
import { Stack } from "expo-router";
import { View, Text } from "react-native";
import Auth from "./auth";
import Register from "./register";
import Request from "./request/category";
import Seach from "./request/seach";
import editprofile from "./settings/editprofile";


export default function Layout() {
  return (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }}  />
          <Stack.Screen name="request" options={{ headerShown: false }} />
          <Stack.Screen name="seach" options={{ headerShown: false }}  />
          <Stack.Screen name="editprofile" options={{ headerShown: false }} />
        </Stack>
  );
};

