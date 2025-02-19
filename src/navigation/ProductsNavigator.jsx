import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from '../screens/ProductsScreen'

const Stack = createNativeStackNavigator()
function ProductsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Products' component={ProductScreen} />
    </Stack.Navigator>
  )
}

export default ProductsNavigator
