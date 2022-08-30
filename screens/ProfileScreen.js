import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ProfileOption from '../components/ProfileOption'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image source={require('../img/avatar.jpg')} style={styles.avatar}/>
        <Text style={styles.profileName}>John Smith</Text>
      </View>
      <View style={styles.divider}></View>
      <ProfileOption title='Settings' icon='settings'/>
      <ProfileOption title='Security' icon='lock-outline'/>
      <ProfileOption title='FAQs' icon='question-answer'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  profileName: {
    fontSize: 22
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 15
  }
})

export default ProfileScreen