import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator
function MainNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component='Home' />
    </Stack.Navigator>
  )
}

export default MainNavigator
