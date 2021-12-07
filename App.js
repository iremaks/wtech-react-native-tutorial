import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {



  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Product'>



        <Stack.Screen name='Product' component={ProductsScreen} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Detail" component={DetailScreen} />



      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 15,
    margin: 2,
    backgroundColor: 'tomato'
  }
});



const ProductsScreen = ({ navigation }) => {

  const [products, setProducts] = useState([]);


  useEffect(() => {


    fetch('https://northwind.vercel.app/api/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data);
      })

  }, [])


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { id: item.id, price: item.unitPrice })}>

      <Text style={{ padding: 6, backgroundColor: 'aqua', margin: 3 }}>{item.name}</Text>

    </TouchableOpacity>

  )

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
    >

    </FlatList>
  )


}


const ProductDetail = ({ navigation, route }) => {


  const { id, price } = route.params

  return (<Text>Product Detail Screen - {id} - {price}</Text>)

}


const HomeScreen = ({ navigation }) => {
  return (

    <>
      <Text>Home Screen</Text>
      <Button title='Go to detail screen' onPress={() => navigation.navigate('Detail')}></Button>
    </>




  )
}


const DetailScreen = ({ navigation }) => {
  return (<Text>Detail Screen</Text>)
}



//BrowserRouter => Routes => Route