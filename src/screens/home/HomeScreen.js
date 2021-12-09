import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { Button, Text } from "react-native"
import CartScreen from "../cart/CartScreen"
import ProductListScreen from "../product/ProductListScreen"
import ProfileScreen from "../profile/ProfileScreen"
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


const HomeScreen = ({ navigation }) => {

    return (

        <Text>Home Screen</Text>
    )
}

export default HomeScreen