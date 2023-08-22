import React from 'react';
import { Image, Linking, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}>Dikshant Dak</Text>
            <Text style={[styles.paraStyle, styles.aboutPara]}>I am a full stack developer</Text>

            <View>
                <Image
                    style={styles.imgStyle}
                    source={require("../../assets/about.jpeg")}
                />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About Me</Text>
                <Text style={styles.paraStyle}>
                    I am a fourth-year B.Tech student with a strong background in web development, particularly in React.js and Next.js. I have also delved into backend technologies like Node.js and have experience working with both SQL and MongoDB databases.
                </Text>
            </View>

            <Text style={styles.mainHeader}>Follow me on Social Network</Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL(
                        "https://www.instagram.com/dikshant_dak/"
                    )}
                >
                    <Image
                        style={styles.iconStyle}
                        source={{uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL(
                        "https://github.com/dikshant-dak"
                    )}
                >
                    <Image
                        style={styles.iconStyle}
                        source={{uri: "https://cdn-icons-png.flaticon.com/128/2504/2504911.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL(
                        "https://www.linkedin.com/in/dikshant-dak/"
                    )}
                >
                    <Image
                        style={styles.iconStyle}
                        source={{uri: "https://cdn-icons-png.flaticon.com/128/2504/2504923.png"}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        // lineHeight: 30,
        fontFamily: "JosefinSans_500Medium",
    },

    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
        lineHeight: 20,
        fontFamily: "JosefinSans_500Medium",
    },

    aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
    },

    aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 11,
        // lineHeight: 30,
        alignSelf: "center",
        fontFamily: "JosefinSans_500Medium",
    },

    aboutPara: {
        color: "#7d7d7d",
        textTransform: "uppercase",
    },

    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly", 
        marginBottom: 80,
    },

    iconStyle: {
        width: "100%",
        height: 40,
        aspectRatio: 1,
    },

})

export default About;