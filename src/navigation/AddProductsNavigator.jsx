import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CameraScreen from '../screens/CameraScreen'

const Stack = createNativeStackNavigator()
function AddProductsNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Add products' component={CameraScreen} />
    </Stack.Navigator>
  )
}

export default AddProductsNavigator
