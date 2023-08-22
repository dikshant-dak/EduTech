import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Menu from '../components/Menu';

import {
    useFonts,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Home = (props) => {

    let [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        <AppLoading />;
    }

    const description = "We are Excellent Education, a learning platform that provides high-quality, affordable, and flexible education to anyone with an internet connection.";

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>Learn with an Ambition</Text>
            <View style={styles.homeTop}>
                <Image
                    style={styles.headerImage}
                    resizeMode="contain"
                    source={require("../../assets/img2.jpg")}
                />
                <Text style={styles.mainHeader}>Welcome to</Text>
                <Text style={[styles.mainHeader, {fontSize: 28, color: "#4c5dab", marginTop: 0,},]}>{props.appName}</Text>
                <Text style={styles.paraStyle}>{description}</Text>
            </View>

            <View style={styles.menuStyle}>
                <View style={styles.lineStyle}  ></View>
                <Menu />
                <View style={[styles.lineStyle, {marginVertical: 10,},]}  ></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
    },

    headingText: {
        marginTop: 45,
        textAlign: "center",
        fontSize: 22,
        textTransform: "uppercase",
        color: "#4c5dab",
        // fontFamily: "JosefinSans_400Regular",
    },

    homeTop: {
        // height: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'stretch',
        marginTop: 10,
        borderRadius: 20,
    },

    mainHeader: {
        fontSize: 26,
        color: "#344055",
        marginTop: 10,
        textTransform: "uppercase",
        // fontFamily: "JosefinSans_400Regular",
    },

    paraStyle: {
        textAlign: "left",
        fontSize: 19,
        color: "#7d7d7d",
        marginTop: 15,
        paddingBottom: 50,
        lineHeight: 26,
        // marginBottom: 120,
        // fontFamily: "JosefinSans_400Regular",
    },

    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
});


export default Home;