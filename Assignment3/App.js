import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView} from 'react-native';
import Header1 from "./Header1";
import Category from "./Category";

export default function App() {
  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Header1/>
          <Category/>
        </View>
      </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  scroll:{
    backgroundColor: '#F7F0E8',
  },
});
