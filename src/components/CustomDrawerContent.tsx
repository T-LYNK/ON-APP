import { DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Image, View, Text } from 'react-native';
import { useRouter, useNavigation, Link } from 'expo-router';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


export default function CustomDrawerContent(props) {
    const router = useRouter();
    const navigation = useNavigation();
    const { top, bottom } = useSafeAreaInsets();
    return (
        <View style={{ flex: 1 }}>
        <DrawerContentScrollView  {...props} scrollEnabled={false} >
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <Image source={{ uri: 'https://on-panel.vercel.app/images/default-blue.png' }} style={{ paddingTop: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100, width: 80, height: 80,  }} />
            <Text style={{ padding: 0,  alignSelf: 'center', fontWeight: 'bold', fontSize: 25, paddingTop: 0, color: 'black' }}>
            UserName
            </Text>
            </View>
           <DrawerItemList {...props} /> 
        </DrawerContentScrollView>
        <View style={{ borderTopColor: '#dde3fe', borderTopWidth: 1, padding: 20, paddingBottom: 20 + bottom }}>
            <Link href={"/(screens)/auth"} style={{ fontSize:25, fontWeight:"bold" }}><Ionicons name="power" size={25} /> Logout </Link>
        </View>
        </View>
    );
}