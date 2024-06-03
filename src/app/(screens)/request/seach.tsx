import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomSheet from 'react-native-simple-bottom-sheet';

export default function seach() {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' , alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ alignSelf:'baseline', display: 'flex' , backgroundColor:"white", marginTop:-500, marginLeft: 60, borderRadius:50, zIndex: 1 }} >
            <Link href={'/request/category'}>
           <MaterialCommunityIcons style={{  elevation:10, zIndex: 1, display: 'flex' }} name='arrow-left' size={50} color="black" position="absolute" top="55%" alignSelf="left" pandding="10" />
           </Link>
           </View>

          <BottomSheet isOpen sliderMinHeight={'155'}>
            <ActivityIndicator size={"large"} color={"blue"}/>
            <Text style={{ fontSize: 28, padding: 20, fontWeight: "bold", textAlign: "center" }}> LOADING ...</Text>
            </BottomSheet>
        </View>
    );
};
