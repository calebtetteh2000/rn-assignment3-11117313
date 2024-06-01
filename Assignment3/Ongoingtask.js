import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Otask = [
    {id:1, name: 'Mobile App Development'},
    {id:2, name: 'Web App Development'},
    {id:3, name: 'Game Development'},
    {id:4, name: 'UI/UX Design'},
    {id:5, name: 'Digital Marketing'},
    {id:6, name: 'Graphic Design'},
    {id:7, name: 'Content Writing'},
    {id:8, name: 'Video Editing'},
    {id:9, name: 'Photography'},
    {id:10, name: 'Music Production'},
];

export default function Ongoingtask(){
    return (
        <View style={styles.container}>
            <Text style={styles.largeTxt}>Ongoing Task</Text>
            <View style={styles.taskContainer}>
                {Otask.map(task => (
                    <View key={task.id} style={styles.itemTaskContainer}>
                        <Text style={styles.TaskName}>{task.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    largeTxt: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 6,
    },
    taskContainer: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
    itemTaskContainer: {
        width: 380,
        marginBottom: 20,
        padding: 25,
        backgroundColor: "#fff",
        borderColor: "#E8D1BA",
        borderRadius: 20,
        borderWidth: 1,
        height: 100,
    },
    TaskName: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 19.2,
    },
})