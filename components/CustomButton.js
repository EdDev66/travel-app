import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable 
        style={({pressed}) => [styles.container, pressed && styles.pressed]}
        onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        backgroundColor: '#308ae2'
    },
    title: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18
    },
    pressed: {
      opacity: 0.5
    }
})

export default CustomButton