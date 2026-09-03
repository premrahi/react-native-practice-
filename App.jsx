import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>JFPJAPsfojsafjsafjjpJFP</Text>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{ width: 200, height: 200 }}
      />

      {/* <Button title="click me"/> */}
      {/* <TouchableOpacity style={{padding:10,backgroundColor:'green'}} onPress={()=>Alert.alert("Button Pressed!!")} >
        <Text>Button</Text>
      </TouchableOpacity> */}

      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Button</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'plum  ',
    padding:2,
    gap:10,
  },
  text: {
    color: 'white',
    fontStyle: 'italic',
  },
  button: {
  backgroundColor: "lightBlue",
  paddingVertical: 10,
  overflow:"hidden",
  paddingHorizontal: 20,
  width: 100,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 10,
  borderWidth: 6,
  borderColor: "white",
  borderRadius: 22, // half of height for a perfect pill
},
  btnText:{
    color:"white",
    fontWeight:"bold",
  }
});
