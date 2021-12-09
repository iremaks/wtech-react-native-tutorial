import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'



const ProductListScreen = ({ navigation }) => {

  const [products, setProducts] = useState([]);


  useEffect(() => {


    fetch('https://northwind.vercel.app/api/products')
      .then(res => res.json())
      .then((data) => {

        setProducts(data);
      })

  }, [])


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productItem: item })}>

      <Text style={{ padding: 6, backgroundColor: 'aqua', margin: 3 }}>{item.name}</Text>

    </TouchableOpacity>

  )

  return (
    <ScrollView>
      {
        products.map((item, key) => {
          return (
            <Card>
              <Card.Title>{item.name} - {item.unitPrice}</Card.Title>
              <Card.Divider />
              <View key={key}>
                {/* <Text>Price: {item.unitPrice}</Text>
                <Text>Stock: {item.unitsInStock}</Text> */}
                <Button
                  title="Add to Cart"
                  type="outline"
                />
              </View>
            </Card>
          );
        })
      }

    </ScrollView>
  )


}

export default ProductListScreen
