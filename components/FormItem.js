import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const FormItem = ({title, value, placeholder, password, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
            style={styles.input} 
            placeholder={placeholder} 
            value={value}
            onChangeText={onChange}
            secureTextEntry={password ? true : false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        color: '#308ae2',
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d3d3d3',
        height: 50,
        padding: 10,
        backgroundColor: '#f6f6f6',
        elevation: 3
    }
})

export default FormItem