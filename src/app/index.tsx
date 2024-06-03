import { useNavigation, useRouter, Link } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { APIProvider, Map, Marker, useMarkerRef } from '@vis.gl/react-google-maps';
import { DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import BottomSheet from 'react-native-simple-bottom-sheet';
import { flow, wrap } from "lodash";
import { AuthProviver } from '@/context/AuthContext';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default function Page () {
  const navigation = useNavigation();
  return (
      <View style={{ elevation: 5 , flexWrap: 'wrap'}} className=" flex flex-1 float-left overflow-x-visible object-left-top">
     <View style={{ flexWrap: "wrap", flexDirection: "row", elevation: 10, position: "relative", display: 'flex' , backgroundColor:"white", marginTop:30, marginLeft: 30, borderRadius:50, zIndex: 1 }} className="flex h-50 max-w-[53px] padding-10 bg-white rounded-full alignSelf-left overflow-visible object-left-top absolute" >
      <MaterialCommunityIcons style={{ elevation:10, zIndex: 1, display: 'flex' }} onPress={() => navigation.toggleDrawer()} name='menu' size={50} color="black" position="absolute" top="35%" alignSelf="left" pandding="10" />
      </View>
      <Content />
      
      </View>
  );
};


function Content() {
  const navigation = useNavigation();
  return (
    <View className="flex-1" style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, flex: 1 }}>
      <View style={{ marginTop: -30, width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
      <ActivityIndicator style={{ marginTop: 100 }} size={"large"}/>
        </View>
      
         <BottomSheet isOpen >
            <View style={{ marginTop: 1, alignItems: "center" }}>
              <TextInput placeholderTextColor={'blue'} style={{ width: 300, shadowColor: "blue", shadowRadius: 5, borderColor: "blue", borderStartColor: "blue", borderTopColor: "blue", borderBottomColor: "blue", borderWidth: 1, fontWeight: "bold", height: 50, borderRadius: 50, fontSize: 25, alignItems: "center", textAlign: "center" }} placeholder="Where Go ?" />
              </View>

            <View style={{ marginTop:15, marginBottom: 10, width:100, alignItems: "center", alignContent: "center", alignSelf:"center", backgroundColor:"blue", borderRadius: 50 }} className="gap-4">
              <Pressable style={{ alignItems: 'center' , alignContent: "center" , alignSelf: "center", backgroundColor: "blue", width: 100, height:30, borderRadius: 50 }}>
                <Text style={{ fontSize:18, color: 'white' }}>
                <Link href={"/(screens)/request/category"}> Let's Go </Link>
                </Text>
              </Pressable>
            
            </View>
            </BottomSheet>
    </View>
  );
};

function MainDrawer() {
      return (
        <NavigationContainer ref={Root} independent={false}>
          <AuthProvider>
          <Stack.Navigator>
                <Drawer.Navigator drawerContent={CustomDrawerContent}
                screenOptions={{
                  headerShown: false,
                  drawerStyle:{
                   backgroundColor:'white',
                   width:230
                  }
                  }}
                  >
                    
                </Drawer.Navigator>
                </Stack.Navigator>
                </AuthProvider>
        </NavigationContainer>
      );
};