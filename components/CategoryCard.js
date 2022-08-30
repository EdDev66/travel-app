import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const CategoryCard = ({ name, image, onPress }) => {
  return (
    <Pressable
        onPress={onPress} 
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) =>[styles.container, pressed && styles.pressed]}
    >
      <Image style={styles.image} source={image}/>
      <View style={styles.title}>
        <Text style={styles.cardName}>{name}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 5
    },
    image: {
        width: '100%',
        height: '70%'
    },
    title: {
        alignItems: 'center'
    },
    cardName: {
      textTransform: 'capitalize',
      fontWeight: '500'
    },
    pressed: {
      opacity: 0.7
    }
})

export default CategoryCard