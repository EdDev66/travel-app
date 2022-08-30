import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 


const ProfileOption = ({ title, icon }) => {
  return (
    <Pressable 
        android_ripple={{ color: '#ccc' }}
        style={({pressed}) => pressed && styles.pressed}
        onPress={() => console.log('pressed')}
    >
      <View style={styles.row}>
        <View style={styles.rowItem}>
          <MaterialIcons name={icon} size={28} color="black" />
          <Text style={styles.optionText}>{title}</Text>
        </View>
        <MaterialIcons name="navigate-next" size={28} color="black" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 10
  },
  pressed: {
    opacity: 0.7
  },
  rowItem: {
    flexDirection: 'row',
  },
  optionText: {
    fontSize: 22,
    marginLeft: 10
  }
})

export default ProfileOption