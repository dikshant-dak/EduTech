import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Course")} >
                <Image
                    style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/?size=512&id=7ax9M8ukZIPl&format=png" }}
                />
                <Text>Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Student")} >
                <Image
                    style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/?size=1x&id=nbsqAaIAMGig&format=png" }}
                />
                <Text>Students</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("About")} >
                <Image
                    style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/?size=1x&id=bj13Jknx0vUV&format=png" }}
                />
                <Text>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Contact")} >
                <Image
                    style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/?size=1x&id=104074&format=png" }}
                />
                <Text>Contact Us</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    textStyle: {
        textTransform: "uppercase",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
        // marginBottom: 100,
    },
})

export default Menu;
