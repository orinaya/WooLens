import { Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/wc-api'
import ProductList from '../components/products/ProductsList'
import { productsStyle as styles } from '../components/products/ProductsListStyle'
import { useNavigation } from '@react-navigation/native'
function ProductScreen () {
  const navigation = useNavigation()
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await getAllProducts()
        if (data) {
          setProducts(data)
        }
      }
      getData()
    } catch (error) {
      setProducts(null)
    }
  }, [])

  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      margin: 'auto',
      width: '100%',
      padding: '20',
      height: '100%'
    }}
    >
      <ScrollView contentInsetAdjustmentBehavior='scrollableAxes'>
        <View>
          <Text>Produits</Text>
          <ProductList products={products} />

        </View>

      </ScrollView>
      <TouchableOpacity style={styles.buttonView}>
        <Button
          onPress={() =>
            navigation.navigate('Form', { screen: 'FormScreen' })}
          style={styles.button}
          title='Add product '
          accessibilityLabel='Learn more about this purple button'
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProductScreen
