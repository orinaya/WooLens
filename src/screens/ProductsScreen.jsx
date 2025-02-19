import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

const WOO_API_URL = 'https://artizanantes.com/wp-json/wc/v3'
function ProductScreen() {
  // const [setProducts] = useState()
  const getProducts = async () => {
    try {
      const url = new URL('/products', WOO_API_URL)
      const response = await fetch(url.toString())
      const data = await response.json()

      // setProducts(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

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
          <Text>Produits</Text>
          {/* <Text>{products}</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen
