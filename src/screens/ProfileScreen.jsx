import { SafeAreaView, ScrollView, Text, View } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import React from 'react'

function ProfileScreen () {
  // const navigation = useNavigation()
  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      margin: 'auto',
      width: '100%',
      padding: '60',
      height: '100%'
    }}
    >
      <ScrollView contentInsetAdjustmentBehavior='scrollableAxes'>
        <View>
          <Text>Profil</Text>
          {/* <Button title='Aller au profil' onPress={() => navigation.navigate('Home')} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
