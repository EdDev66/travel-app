import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'; 

const ProfileBar = () => {
  return (
    <View style={styles.container}>
       <EvilIcons name="user" size={60} color="black" />
        <View style={styles.items}>
       <Text style={styles.user}>John Smith</Text>
       <Text style={styles.subtitle}>Where do you want to go?</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    items: {
        flexDirection: 'column'
    },
    user: {
        fontSize: 22,
        fontWeight: '600'
    },
    subtitle: {
        color: '#bfc1c3'
    }
})

export default ProfileBar