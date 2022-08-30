import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 


const Card = ({ name, price, location, image, onPress }) => {
  return (
    <Pressable 
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) =>[styles.container, pressed && styles.pressed]}>
      <Image style={styles.image} source={image}/>
      <View style={styles.titlePrice}>
        <Text style={styles.titlePriceText}>{name}</Text>
        <Text style={[styles.titlePriceText, styles.price]}>${price}</Text>
      </View>
      <View style={styles.location}>
            <View style={styles.groupLocation}>
                <Ionicons name="location-outline" size={18} color="#f37917" />
                <Text style={styles.locationText}>{location}</Text>
            </View>
            <Text style={styles.locationText}>/person</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        width: 240,
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 3,
        overflow: 'hidden',
        elevation: 5
    },
    image: {
        width: '100%',
        height: '75%'
    },
    titlePrice: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    titlePriceText: {
        fontSize: 20
    },
    price: {
        color: '#308ae2'
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    groupLocation: {
        flexDirection: 'row'
    },
    locationText: {
        fontSize: 14,
        paddingHorizontal: 5,
        color: '#bfc1c3'
    },
    pressed: {
        opacity: 0.7
    }
})

export default Card