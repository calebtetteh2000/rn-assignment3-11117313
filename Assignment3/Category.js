import { StyleSheet, Text, View, Image, FlatList} from 'react-native';

const DATA = [
    {id: 1, title: 'Exercise'},
    {id: 2, title: 'Study'},
    {id: 3, title: 'Code'},
    {id: 4, title: 'Meditation'},
    {id: 5, title: 'Journaling'},
    {id: 6, title: 'Gratitude'},
    {id: 7, title: 'Self Care'},
    {id: 8, title: 'Socializing'},
];

const categoryItems = ({item}) => {
    return(
    <View style={styles.categoryBox}>
        <Text style={styles.categoryText1}>{item.title}</Text>
        <Text>12 Tasks</Text>
        <View style={styles.img}>
            <Image source={require("./assets/img1.png")} style={styles.imgStyle} resizeMode='contain' />
        </View>
    </View>
);
};

export default function Category() {

    return(
        <View style={styles.container}>
            <Text style={styles.category}>Categories</Text>
            <FlatList
            contentContainerStyle={styles.heightL}
            data={DATA}
            renderItem={categoryItems}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        marginTop: 1,
    },
    categoryBox: {
        backgroundColor: "white",
        marginRight: 20,
        width: 190,
        height: 190,
        borderRadius: 20,
        padding: 20,
    },
    category: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        borderRadius: 20,
        marginTop: -5,
        width: "77%",
    },
    heightL:{
        paddingVertical: 10,
    },
    categoryText1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    img:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imgStyle:{
        width: "80%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    }
});
