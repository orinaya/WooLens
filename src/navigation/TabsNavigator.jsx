import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import AddProductsNavigator from './AddProductsNavigator'
import ProfileNavigator from './ProfileNavigator'
import ProductsNavigator from './ProductsNavigator'
import TabBar from './Tabbar'

const Tab = createBottomTabNavigator()

function TabsNavigator () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Products' component={ProductsNavigator} />
      <Tab.Screen name='Camera' component={AddProductsNavigator} />
      <Tab.Screen name='Profile' component={ProfileNavigator} />
    </Tab.Navigator>
  )
}

export default TabsNavigator
