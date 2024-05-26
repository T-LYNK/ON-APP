import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function settings() {
  const items = [
      {
        name: 'Edit Account'
      },
      {
        name : 'Edit Password'
      },
  ];
  const support = [
      {
        name : 'Help'
      },
      {
        name: 'Tell a friend'
      },
  ];

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'black', }}>
       <View style={{ padding: 10, alignSelf: 'flex-start', marginHorizontal: 100 }}>
            <Image source={{ uri: 'https://on-panel.vercel.app/images/default-blue.png' }} style={{ paddingTop: 10, justifyContent: 'flex-end', alignItems: 'flex-end', borderRadius: 100, width: 40, height: 40,  }} />
            <Text style={{ position:'absolute', padding: 50,  alignSelf: 'flex-start', margin: 10, fontWeight: 'bold', fontSize: 18, paddingTop: 0, color: 'white' }}>
            UserName
            </Text>
            </View>
      <ScrollView contentInsetAdjustmentBehavior='automatic' contentContainerStyle={{ paddingBottom: 40 }}>
        <View>
          <FlatList data={items} scrollEnabled={false} renderItem={( { item }) => (
            <View style={{ alignItems:'baseline', flexDirection: 'column', width: 350, margin:10, padding:5, backgroundColor: 'gray', borderRadius: 10 }}> 
              <Text style={{ fontSize:20, fontWeight: 'bold', justifyContent: 'flex-start', paddingHorizontal: 10, textAlign: 'left' , color: 'white'}}>{item.name}</Text>
              <Ionicons style={{ position: 'absolute', justifyContent: 'flex-start', margin: -3, alignSelf:'flex-end' }} name='chevron-forward' size={25} color={'white'} />
            </View>
          )}/>
        </View>
      </ScrollView>
    </View>
  )
}