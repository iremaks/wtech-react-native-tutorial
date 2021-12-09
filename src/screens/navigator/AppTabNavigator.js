import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { Button, Text } from "react-native"
import CartScreen from "../cart/CartScreen"
import ProductListScreen from "../product/ProductListScreen"
import ProfileScreen from "../profile/ProfileScreen"
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../home/HomeScreen"

const Tab = createBottomTabNavigator();

const AppTabNavigator = ({ navigation }) => {

    return (

        <Tab.Navigator>


            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Anasayfa',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                )
            }} /> 



            <Tab.Screen name="Product" component={ProductListScreen} options={{

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

    )
}

export default AppTabNavigator