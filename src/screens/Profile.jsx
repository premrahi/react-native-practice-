import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation , route}) => {
  const {id , name} = route.params ;
  return (
    <View>
      <Text>Profile</Text>
      <Text>id: {id}</Text>
      <Text>name: {name}</Text>
      <Button title="search" onPress={()=> navigation.navigate('search')} />
      <Button title="home" onPress={()=> navigation.navigate('home')} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})