import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, } from "react-native";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useRouter, useNavigation } from "expo-router";


const Auth = () => {
    const [name, setName] = useState("");
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
                    Register to your Account
                  </Text>  
                </View>
                <View style={{ marginTop: 70 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 50, marginTop: 30, }} >
                    <TextInput style={{ borderRadius:50, fontWeight: "bold", textAlign: "center", color: "gray", width: 300, fontSize: name ? 30 : 30, }}
                    placeholder="Name" 
                    /> 
                    </View>
                    
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 50, marginTop: 30, }} >
                    <TextInput style={{ borderRadius:50, fontWeight: "bold", textAlign: "center", color: "gray", width: 300, fontSize: email ? 30 : 30, }}
                    placeholder="Email" 
                    /> 
                    </View>
                <View style={{ marginTop: 0 }} >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 50, marginTop: 30, }} >
                <TextInput textContentType="password" secureTextEntry={true} style={{ borderRadius:50, fontWeight: "bold", textAlign: "center", color: "gray", width: 300, fontSize: password ? 30 : 30, }} placeholder="Password"/>
                </View>
                </View>

                </View>
              <View style={{ marginTop: 80 }} >
                <Pressable onPress={() => navigation.goBack()} style={{ width: 200, backgroundColor: "blue", borderRadius: 50, marginLeft: "auto", marginRight: "auto", padding: 15, }} > 
                <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold", }} >
                Register
                </Text>
                    </Pressable>
                    <View>
                  <Text onPress={() => navigation.navigate({ name : 'auth'})} style={{ marginTop: 30, fontSize: 18, textAlign: "center" }}>Already have an Account ? Login</Text>
                </View>
              </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    
};

export default Auth;

const styles = StyleSheet.create({});