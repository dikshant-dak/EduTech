import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import UserData from './src/screens/UserData';
import Course from './src/screens/Course';
import About from './src/screens/About';
import Contact from './src/screens/Contact';

import {
    useFonts,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const App = () => {
    const Stack = createNativeStackNavigator();

    let [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="Home" options={{ headerShown: false, }}>
                    {(props) => <Home {...props} appName={"EduTech Learning"} />}
                </Stack.Screen>

                <Stack.Screen name="Course" component={Course}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitle: "Courses",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen name="Student" component={UserData}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitle: "Students Data",
                        headerTitleAlign: "center",
                    }} />
                <Stack.Screen name="About" component={About}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen name="Contact" component={Contact}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitleAlign: "center",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;