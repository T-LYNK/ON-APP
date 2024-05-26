import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'black', }}>
        <Image className="mt-7" source={{ uri: 'https://on-panel.vercel.app/images/default-blue.png' }} style={{ paddingTop: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100, width: 100, height: 100,  }} />

      <Text style={{ padding: 20, fontWeight: 'bold', fontSize: 28, color: 'white', }}>UserName</Text>
      <View className="flex-1 bg-white px-20 pt-20" style={{ width: 390, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
      <Text style={{justifyContent: 'center', fontSize: 28, alignItems: 'center',}}>Profile Screen</Text>
      </View>
    </View>
  )
}