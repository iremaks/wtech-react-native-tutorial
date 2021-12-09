import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './src/screens/product/ProductListScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import AppTabNavigator from './src/screens/navigator/AppTabNavigator';
import ProductDetail from './src/screens/product/ProductDetailScreen';




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='AppTabNavigator'>

        <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name='Product' component={ProductListScreen} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}




