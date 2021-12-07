import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



export default function App() {

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Product'>



    //     <Stack.Screen name='Product' component={ProductsScreen} />
    //     <Stack.Screen name='ProductDetail' component={ProductDetail} />

    //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
    //     <Stack.Screen name="Detail" component={DetailScreen} />



    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>

      <Tab.Navigator>


        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Anasayfa',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )
        }} />



        <Tab.Screen name="Product" component={ProductsScreen} options={{

          tabBarLabel: 'Ürünler',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="gift-outline" color={color} size={size} />
          ),

        }} />

        <Tab.Screen name="Cart" component={ProfileScreen} options={{

          tabBarLabel: 'Sepet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
          tabBarBadge: 3 

        }} />



        <Tab.Screen name="Notification" component={CartScreen} options={{

          tabBarLabel: 'Bildirimler',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),

        }} />


        <Tab.Screen name="Profil" component={CartScreen} options={{

          tabBarLabel: 'Sepet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),

        }} />


      </Tab.Navigator>

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



const CartScreen = ({ navigation }) => {
  return (<Text>Cart</Text>)
}

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
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productItem: item })}>

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


  const { productItem } = route.params

  return (<Text>Product Detail Screen - {productItem.id} - {productItem.unitPrice}</Text>)

}


const HomeScreen = ({ navigation }) => {
  return (

    <>
      <Text>Home Screen</Text>
      <Button title='Go to detail screen' onPress={() => navigation.navigate('Detail')}></Button>
    </>
  )
}


const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <Text>Profile Screen</Text>
    </>
  )
}


const DetailScreen = ({ navigation }) => {
  return (<Text>Detail Screen</Text>)
}



//BrowserRouter => Routes => Route