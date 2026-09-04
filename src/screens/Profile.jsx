import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="search" onPress={()=> navigation.navigate('search')} />
      <Button title="home" onPress={()=> navigation.navigate('home')} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})