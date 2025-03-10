import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FormScreen from '../screens/FormScreen'

const Stack = createNativeStackNavigator()
function FormNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Form' component={FormScreen} />
    </Stack.Navigator>
  )
}

export default FormNavigator
