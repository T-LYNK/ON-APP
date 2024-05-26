import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import { Avatar, Button, Card } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useNavigation, Link } from "expo-router";


export default function category() {
  const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: 'black' , alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ alignSelf:'baseline', display: 'flex' , backgroundColor:"white", marginTop:-500, marginLeft: 60, borderRadius:50, zIndex: 1 }} >
           <MaterialCommunityIcons onPress={() => router.back()} style={{  elevation:10, zIndex: 1, display: 'flex' }} name='arrow-left' size={50} color="black" position="absolute" top="55%" alignSelf="left" pandding="10" />
           </View>
          <BottomSheet isOpen sliderMinHeight={'255'}>
          <ScrollView showsHorizontalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular</Text>
            <Card style={{ margin: 10 }}>
            <Card.Content>
            <Text style={{ fontWeight: 'bold', textAlign: 'center'}}>ON MOTO</Text>
            </Card.Content>
            </Card>
            <Card style={{ margin: 10 }}>
            <Card.Content>
            <Ionicons style={{ alignSelf: 'flex-start' }} name="car" size={40} color={'black'} /><Text style={{ fontWeight:'bold', textAlign: 'center', marginTop: -25 , fontSize: 25}}> ON CAR</Text><Text style={{ marginTop: -20, alignSelf:'flex-end', fontSize: 12 , marginRight: 50}}>BRL</Text><Text style={{ marginTop: -25, alignSelf: 'flex-end', fontWeight: 'bold', textAlign: 'center', fontSize: 25}}>9,99</Text>
            </Card.Content>
            </Card>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Delivery</Text>
            <Card style={{  margin: 10 }}>
            <Card.Content>
              <Text style={{ fontWeight: 'bold', textAlign: 'center'}}>ON DELIVERY</Text>
            </Card.Content>
            </Card>
            </ScrollView>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});