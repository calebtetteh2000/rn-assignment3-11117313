import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.topLeftText}>Hello , Devs</Text>
      <Text style={styles.topLeftText2}>14 Tasks today</Text>
      <View style={styles.roundBox}></View>
      <Image style={styles.topRightImage}source={{uri: 'https://s3-alpha-sig.figma.com/img/6e58/fa0e/a1ae0913e0ff2083486500681569cc7c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VLVDvaGuCx6vGTChWkWcIJugXEq8UIrtevsqtW06YhxBerCT3vJD~eFNYdQEfXsQ0dLa9m9Pl5qg3Z9gH9HSG-89qmiwf6yf59lCcCzoA3SFkv50OehBO2~~pVKtmYfZCml8nHshbEwCaoi0iUpvhasIVf5HVChNoljKsWPSE7CWM0u-NCSNvwN06ji8fAj5ea2ZzF9KEs9irbUWFxJWcJ0YTz5Y-CCCWNDHqPhWK-vPBa74HIXd7QNfnYxKfej8GMeVIi4AcvmufXJBzV1AfJ28O1YM6kwDZlA09YAG7bRFqd3OAmr2NdF8mn-RfbL8DhCUU6frTOMNAZj16Y1c0A__'}}/>
      <TextInput style={styles.searchBox} placeholder='    Search'  onChangeText={text => setSearchText(text)}/>
      <Text style={styles.categoryText}>Categories</Text>
      <View style={styles.categoryBox}></View>
      <Text style={styles.categoryText2}>Excercise</Text>
      <View style={styles.categoryBox2}></View>
    </View>
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
  topLeftText: {
    fontSize: 30,
    fontWeight: '700',
    position: 'absolute',
    top: 60,
    left: 10,
  },
  topLeftText2: {
    fontSize: 15,
    position: 'absolute',
    top: 100,
    left: 10,
  },
  topRightImage: {
    position: 'absolute',
    top: 60,
    right: 15,
    width: 50,
    height: 52,
    borderRadius: 26,
  },
  roundBox: {
    position: 'absolute',
    top: 60,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  searchBox: {
    position: 'absolute',
    top: 134,
    left: 10,
    width: 280,
    height: 48,
    borderWidth: 1,
    backgroundColor: '#FBF9F7',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryText:{
    position: 'absolute', 
    top: 213,
    left: 20,
    width: 130,
    height: 24,
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 24,
  },
  categoryBox:{
    position: 'absolute',
    top: 249,
    left: 20,
    width: 186,
    height: 192,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
  },
  categoryBox2:{
    position: 'absolute',
    top: 249,
    left: 230,
    width: 186,
    height: 192,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
  },
});
