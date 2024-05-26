import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useNavigation, Link } from "expo-router";
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { partition } from "lodash";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center"}} >
            <View>
                <Image style={{ width : 150, height: 100, resizeMode: "contain"}}
                source={{uri: "https://on-panel.vercel.app/images/logotipo-black.png",}}/>
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center"}} >
                  <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42",}} >
                    Log in to your Account
                  </Text>  
                </View>
                <View style={{ marginTop: 70 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 50, marginTop: 30 }} >
                    <TextInput style={{ borderRadius:50, fontWeight: "bold", textAlign: "center", color: "gray", width: 300, fontSize: email ? 30 : 30 }}
                    placeholder="Email" 
                    /> 
                    </View>
                <View style={{ marginTop: 10 }} >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 50, marginTop: 30 }} >
                <TextInput textContentType="password" secureTextEntry={true} style={{ borderRadius:50, fontWeight: "bold", textAlign: "center", color: "gray", width: 300, fontSize: password ? 30 : 30 }} placeholder="Password"/>
                </View>
                </View>

                </View>
              <View style={{ marginTop: 80 }} >
                <Pressable style={{ width: 200, backgroundColor: "blue", borderRadius: 50, marginLeft: "auto", marginRight: "auto", padding: 15 }} > 
                <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }} >
                <Link href={"/"}>Login</Link>
                </Text>
                    </Pressable>
                <View>
                  <Text onPress={() => navigation.navigate({ name : 'register'})} style={{ marginTop: 30, fontSize: 18, textAlign: "center" }}>First time using Register</Text>
                </View>
              </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    
};

export default Auth;

const styles = StyleSheet.create({});