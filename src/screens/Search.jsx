import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = ({navigation}) => {
  return (
    <View>
      <Text>Search</Text>
      <Button title="home" onPress={()=> navigation.navigate('home')} />
      <Button title="profile" onPress={()=> navigation.navigate('profile')} />

    </View>
  )
}

export default Search

const styles = StyleSheet.create({})