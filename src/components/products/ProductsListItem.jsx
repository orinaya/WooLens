import { Image, Text, TouchableOpacity, View } from 'react-native'
import { productsListItemStyle as styles } from './ProductsListStyle'
function ProductListItem ({ product }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image src={product?.images[0].src} width={140} height={140} />
        <View style={styles.textContainer}>
          <Text>{product.name}</Text>
          <Text>{product.short_description}</Text>
          <Text>{Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductListItem
