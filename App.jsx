import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="home" screenOptions={{
      
    }}>
      <Tab.Screen name="home" component={Home} options={{tabBarIcon:()=>(
         <Icon name="home" size={30} color="#900" />

      )}} />
      <Tab.Screen name="profile" component={Profile}  options={{tabBarIcon:()=>(
        <Ionicons name="person-outline" color="#900" size={30} />

      )}}/>
      <Tab.Screen name="search" component={Search}  options={{tabBarIcon:()=>(
         <Icon name="search1" size={30} color="#900" />

      )}}/>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <TabNavigator />
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
