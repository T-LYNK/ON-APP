import "../global.css";
import { Drawer } from "expo-router/drawer";
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName="index" screenOptions={{ drawerActiveBackgroundColor: 'blue', drawerActiveTintColor: 'white',  drawerPosition: 'left', headerShown: true, drawerStyle:{ width:250 } }} drawerContent={CustomDrawerContent}  >
      <Drawer.Screen name="index" key={1} options={{ drawerLabel: 'Home', headerShown: false , drawerIcon: ({ size, color }) => (<Ionicons name="home" size={size} color={color} />) }} />
      <Drawer.Screen name="Arrows" options={{ drawerLabel: 'Calls', headerTitle: 'Calls', drawerIcon: ({ size, color }) => (<Ionicons name="car" size={size} color={color} />) }} />
      <Drawer.Screen name="mesages" options={{ drawerLabel: 'Mesages', headerTitle: 'Mesages', drawerIcon: ({ size, color }) => (<Ionicons name="mail" size={size} color={color} />)  }} />
      <Drawer.Screen name="notifications" options={{ drawerLabel: 'Notifications', headerTitle: 'Notifications', drawerIcon: ({ size, color }) => (<Ionicons name="notifications" size={size} color={color} />) }} />
      <Drawer.Screen name="Profile" options={{ drawerLabel: 'Profile', headerTitle: 'Profile', drawerIcon: ({ size, color }) => (<Ionicons name="person" size={size} color={color} />)  }} />
      <Drawer.Screen name="Help"  options={{ drawerLabel: 'Help', drawerIcon: ({ size, color }) => (<Ionicons name="help" size={size} color={color} />) }} />
      <Drawer.Screen name="settings" options={{drawerLabel: 'Settings', headerTitle: 'Settings', drawerIcon: ({ size, color }) => (<Ionicons name="settings" size={size} color={color} />) }} />
      <Drawer.Screen name="(screens)" options={{ headerShown: false, drawerLabel(props) {
        false
      }  }} />
    </Drawer>
    </GestureHandlerRootView>
    );
};

