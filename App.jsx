import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flex: 1,
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    backgroundColor: 'white',

    alignItems: 'center',
  },
});
