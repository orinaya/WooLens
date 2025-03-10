/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabsNavigator from './navigation/TabsNavigator'
import { NotifierWrapper } from 'react-native-notifier'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#222222'
  }
}
function App () {
  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <NavigationContainer theme={myTheme}>
          <TabsNavigator />
        </NavigationContainer>
      </NotifierWrapper>
    </GestureHandlerRootView>
  )
}

export default App
