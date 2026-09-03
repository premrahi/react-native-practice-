import { backIn } from 'motion';
import {  StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
const App = () => {
  const theme = useColorScheme() ;
  const isDarkMode = theme === 'dark' ;

  const backgroundColor = isDarkMode ? "black" : "white" ;
  const textColor = isDarkMode ? "white" : "black" ;


  return (
    <SafeAreaView style={[styles.container , {backgroundColor : backgroundColor}]} >
      <Text style={[ styles.text , {color :textColor}]}  >App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    padding:4,
    flex:1,
    height:"100%",
    width:"100%",
    justifyContent:"center" ,
    alignItems:"center"
  },
  text:{
    fontSize:32,
    fontWeight:"bold"
  }
})