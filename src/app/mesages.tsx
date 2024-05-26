import { View, Text } from 'react-native'
import React from 'react' 
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

 export default function mesages() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'black', }}>
      <Text style={{ color: 'white', justifyContent: 'center', fontSize: 28, alignItems: 'center',}} >mesages</Text>
    </View>
  )
}