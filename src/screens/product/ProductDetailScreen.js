import React from "react"
import { Text } from "react-native"




const ProductDetail = ({ navigation, route }) => {
    const { productItem } = route.params
    return (<Text>Product Detail Screen - {productItem.id} - {productItem.unitPrice}</Text>)
  
  }
  
  export default ProductDetail