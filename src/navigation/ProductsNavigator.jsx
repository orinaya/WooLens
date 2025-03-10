import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from '../screens/ProductsScreen'
import FormScreen from '../screens/FormScreen'

const Stack = createNativeStackNavigator()
function ProductsNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Products' component={ProductScreen} />
      <Stack.Screen name='Form' component={FormScreen} />
    </Stack.Navigator>
  )
}

export default ProductsNavigator
