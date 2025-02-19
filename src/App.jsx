/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabsNavigator from './navigation/TabsNavigator'

function App () {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default App
