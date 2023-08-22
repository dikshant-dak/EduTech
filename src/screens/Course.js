import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import CourseApi from '../api/CourseApi';

const Course = ({navigation}) => {

    const courseCard = ({item}) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image style={styles.cardImage} 
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.mainHeader}>
                        {item.title}
                    </Text>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => navigation.navigate("CourseDetails")}
                        >
                            <Text style={styles.buttonText}>Course Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={CourseApi}
            renderItem={courseCard}
        />
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1.1001,
    },

    mainContainer: {
        paddingHorizontal: 20,
    },

    courseContainer: {
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },

    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: 'uppercase',
        paddingBottom: 15,
        // textAlign: 'center',
        fontFamily: "Nunito_600SemiBold",
    },

    description: {
        textAlign: "left",
        fontFamily: "JosefinSans_400Regular",
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 15,
        color: "#7d7d7d",
    },

    buttonContainer: {
        display: "flex",
        justifyContent: "start",
        flexDirection: "row",
        marginBottom: 10,
    },

    buttonStyle: {
        backgroundColor: "#1f1b1b",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "#eee",
        fontSize: 16,
        fontFamily: "JosefinSans_500Medium",
    }

})

export default Course;