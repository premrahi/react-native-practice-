import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyUsers = [
  {
    id: 1,
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    photoUrl: 'https://picsum.photos/seed/1/200/200',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    photoUrl: 'https://picsum.photos/seed/2/200/200',
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    email: 'rohan.mehta@example.com',
    photoUrl: 'https://picsum.photos/seed/3/200/200',
  },
  {
    id: 4,
    name: 'Ananya Iyer',
    email: 'ananya.iyer@example.com',
    photoUrl: 'https://picsum.photos/seed/4/200/200',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    photoUrl: 'https://picsum.photos/seed/5/200/200',
  },
  {
    id: 6,
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    photoUrl: 'https://picsum.photos/seed/6/200/200',
  },
  {
    id: 7,
    name: 'Arjun Kapoor',
    email: 'arjun.kapoor@example.com',
    photoUrl: 'https://picsum.photos/seed/7/200/200',
  },
  {
    id: 8,
    name: 'Ishita Nair',
    email: 'ishita.nair@example.com',
    photoUrl: 'https://picsum.photos/seed/8/200/200',
  },
  {
    id: 9,
    name: 'Kabir Malhotra',
    email: 'kabir.malhotra@example.com',
    photoUrl: 'https://picsum.photos/seed/9/200/200',
  },
  {
    id: 10,
    name: 'Diya Joshi',
    email: 'diya.joshi@example.com',
    photoUrl: 'https://picsum.photos/seed/10/200/200',
  },
  {
    id: 11,
    name: 'Aditya Kumar',
    email: 'aditya.kumar@example.com',
    photoUrl: 'https://picsum.photos/seed/11/200/200',
  },
  {
    id: 12,
    name: 'Kavya Rao',
    email: 'kavya.rao@example.com',
    photoUrl: 'https://picsum.photos/seed/12/200/200',
  },
  {
    id: 13,
    name: 'Siddharth Verma',
    email: 'siddharth.verma@example.com',
    photoUrl: 'https://picsum.photos/seed/13/200/200',
  },
  {
    id: 14,
    name: 'Meera Pillai',
    email: 'meera.pillai@example.com',
    photoUrl: 'https://picsum.photos/seed/14/200/200',
  },
  {
    id: 15,
    name: 'Rahul Gupta',
    email: 'rahul.gupta@example.com',
    photoUrl: 'https://picsum.photos/seed/15/200/200',
  },
  {
    id: 16,
    name: 'Tanvi Desai',
    email: 'tanvi.desai@example.com',
    photoUrl: 'https://picsum.photos/seed/16/200/200',
  },
  {
    id: 17,
    name: 'Nikhil Chopra',
    email: 'nikhil.chopra@example.com',
    photoUrl: 'https://picsum.photos/seed/17/200/200',
  },
  {
    id: 18,
    name: 'Riya Bhatt',
    email: 'riya.bhatt@example.com',
    photoUrl: 'https://picsum.photos/seed/18/200/200',
  },
  {
    id: 19,
    name: 'Aryan Saxena',
    email: 'aryan.saxena@example.com',
    photoUrl: 'https://picsum.photos/seed/19/200/200',
  },
  {
    id: 20,
    name: 'Pooja Agarwal',
    email: 'pooja.agarwal@example.com',
    photoUrl: 'https://picsum.photos/seed/20/200/200',
  },
  {
    id: 21,
    name: 'Dev Choudhary',
    email: 'dev.choudhary@example.com',
    photoUrl: 'https://picsum.photos/seed/21/200/200',
  },
  {
    id: 22,
    name: 'Aisha Khan',
    email: 'aisha.khan@example.com',
    photoUrl: 'https://picsum.photos/seed/22/200/200',
  },
  {
    id: 23,
    name: 'Karan Bansal',
    email: 'karan.bansal@example.com',
    photoUrl: 'https://picsum.photos/seed/23/200/200',
  },
  {
    id: 24,
    name: 'Naina Trivedi',
    email: 'naina.trivedi@example.com',
    photoUrl: 'https://picsum.photos/seed/24/200/200',
  },
  {
    id: 25,
    name: 'Yash Thakur',
    email: 'yash.thakur@example.com',
    photoUrl: 'https://picsum.photos/seed/25/200/200',
  },
  {
    id: 26,
    name: 'Simran Kaur',
    email: 'simran.kaur@example.com',
    photoUrl: 'https://picsum.photos/seed/26/200/200',
  },
  {
    id: 27,
    name: 'Manav Bose',
    email: 'manav.bose@example.com',
    photoUrl: 'https://picsum.photos/seed/27/200/200',
  },
  {
    id: 28,
    name: 'Ritika Sinha',
    email: 'ritika.sinha@example.com',
    photoUrl: 'https://picsum.photos/seed/28/200/200',
  },
  {
    id: 29,
    name: 'Om Prakash',
    email: 'om.prakash@example.com',
    photoUrl: 'https://picsum.photos/seed/29/200/200',
  },
  {
    id: 30,
    name: 'Zara Ahmed',
    email: 'zara.ahmed@example.com',
    photoUrl: 'https://picsum.photos/seed/30/200/200',
  },
];

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
     
      <FlatList
        data={dummyUsers}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.photoUrl }} style={styles.cardImg} />
            <Text style={[styles.text, { color: textColor }]}>{item.name}</Text>
            {/* <Text style={[styles.text, { color: textColor }]}>
              {item.email}
            </Text> */}
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        // columnWrapperStyle={{ gap: 10 }}
        // numColumns={2}
        horizontal
      />
      
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    justifyContent:'center'
  },
  card: {
    marginTop:10,
    width: 100,
    height: 70,
    borderRadius: 10,
    // backgroundColor: '#dadada',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    height: 70,
    borderWidth:2,
    borderColor:"crimson",
    width: 70,
    padding: 2,
    borderRadius: 50,
  },
});
