import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch } from 'react-redux'
import CustomButton from '../components/CustomButton'

const StartScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/bg.jpg')}  style={styles.image}>
      <LinearGradient
        // Background Linear Gradient
        start={ {x: 0, y: 0.3} }
        colors={['transparent', '#fff']}
        style={styles.background}
      />
        <View style={styles.content}>
        <Text style={styles.title}>Discover best place to vacation</Text>
        <Text style={styles.description}>Travel around the world with just a tap and enjoy your holiday</Text>
        <View style={styles.button}>
            <CustomButton 
              title='Get started'
              onPress={() => navigation.replace('Auth')}
            />
        </View>
        <View style={styles.altContainer}>
            <Text>Already have an account?</Text>
            <View style={styles.loginTextBox}>
              <Text onPress={() => navigation.replace('Auth')} style={styles.loginText}>Sign in</Text>
            </View>
        </View>
      </View>
      </ImageBackground>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    background: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      height: '100%'
    },
    content: {
        alignItems: 'center',
        marginBottom: 30
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 20,
        width: '60%',
        textAlign: 'center'
    },
    description: {
        color: '#a9a9a9',
        fontSize: 14,
        fontWeight: '600',
        width: '70%',
        textAlign: 'center',
        marginBottom: 20
    },
    button: {
        // alignItems: 'stretch',
        width: '80%',
        marginBottom: 10
    },
    altContainer: {
      flexDirection: 'row',
    },
    loginTextBox: {
      marginLeft: 5
    },
    loginText: {
      color: 'blue',
    }
})

export default StartScreen