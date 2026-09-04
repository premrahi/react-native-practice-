import { style } from "motion/react-client";
import { useState } from "react";
import {
    Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {dummyUsers} from '../assets/dummydata'
import { NavigationContainer } from "@react-navigation/native";




export const Home = ({navigation}) => {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  const backgroundColor = isDarkMode ? "black" : "white";
  const textColor = isDarkMode ? "white" : "black";

  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  console.log(text);
  const handleClick = () => {
    setSubmittedText(text);
    setText("");
  }

    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: backgroundColor }]}
      >
        <FlatList
          data={dummyUsers}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.photoUrl }} style={styles.cardImg} />
              <Text style={[styles.text, { color: textColor }]}>
                {item.name}
              </Text>
              {/* <Text style={[styles.text, { color: textColor }]}>
              {item.email}
            </Text> */}
            </View>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          // columnWrapperStyle={{ gap: 10 }}
          // numColumns={2}
          horizontal
          style={styles.FlatList}
        />

        <View style={styles.inputBox}>
          <Text style={[styles.text, { color: textColor, fontSize: 28 }]}>
            {" "}
            Welcome to PInstagram!
          </Text>
          <TextInput
            placeholder="Enter Your name"
            style={styles.input}
            value={text}
            multiline
            onChangeText={setText}
          />

          <Pressable
            style={styles.navigateBtn}
            onPress={handleClick}
          >
            <Text style={[styles.text, { color: textColor }]}>Click me</Text>
          </Pressable>

          <Button title="profile" style={styles.navigateBtn} onPress={()=> navigation.navigate('profile')}/>

          {submittedText && (
            <Text style={[styles.text, { color: textColor }]}>
              Result : {submittedText}
            </Text>
          )}
        </View>
      </SafeAreaView>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      padding: 4,
      flex: 1,
      height: "100%",
      width: "100%",
      // justifyContent: 'center',
      alignItems: "center",
    },
    text: {
      fontWeight: "bold",
      justifyContent: "center",
    },
    card: {
      marginTop: 10,
      width: 100,
      height: 70,
      borderRadius: 10,
      // backgroundColor: '#dadada',
      // justifyContent: 'center',
      alignItems: "center",
    },
    cardImg: {
      height: 70,
      borderWidth: 2,
      borderColor: "crimson",
      width: 70,
      padding: 2,
      borderRadius: 50,
    },
    FlatList: {
      flexGrow: 0,
    },
    inputBox: {
      paddingVertical: 10,
      width: "100%",
      paddingHorizontal: 40,
      alignItems: "center",
    },
    input: {
      borderWidth: 1,
      backgroundColor: "#555",
      borderRadius: 6,
      width: "100%",
      paddingVertical: 10,
      marginVertical: 10,
    },
    navigateBtn:{
      borderRadius:5,
      backgroundColor:"green",
      padding:10,
      marginVertical:5 ,
    }
  });
