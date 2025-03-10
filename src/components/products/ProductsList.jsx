import { ScrollView, Text } from 'react-native'
import ProductListItem from './ProductsListItem'
import { productsListStyle as styles } from './ProductsListStyle'
function ProductList ({ products }) {
  if (!products || products.length < 1) return <Text>No data</Text>

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product, index) =>
        <ProductListItem key={index} product={product} />
      )}
    </ScrollView>
  )
}

export default ProductList
