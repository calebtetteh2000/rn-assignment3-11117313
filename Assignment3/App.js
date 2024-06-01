import { StyleSheet, View, ScrollView,} from 'react-native';
import Header1 from "./Header1";
import Category from "./Category";
import Ongoingtask from "./Ongoingtask";

export default function App() {
  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Header1/>
          <Category/>
          <Ongoingtask/>
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
