import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import AddProductsNavigator from './AddProductsNavigator'
import ProfileNavigator from './ProfileNavigator'
import ProductsNavigator from './ProductsNavigator'

const Tab = createBottomTabNavigator()

function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Products' component={ProductsNavigator} />
      <Tab.Screen name='Camera' component={AddProductsNavigator} />
      <Tab.Screen name='Profile' component={ProfileNavigator} />
    </Tab.Navigator>
  )
}

export default TabsNavigator
