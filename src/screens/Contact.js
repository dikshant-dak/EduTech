import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import Checkbox from 'expo-checkbox';

const Contact = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);

    const submit = () => {
        if(!name && !email && !phone && !message) {
            Alert.alert("Please fill all the fields");
        } else {
            Alert.alert(`Thank you ${name}`);
            navigation.navigate("Home");
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level up your knowledge</Text>
            <Text style={styles.description}>You can reach me anytime on dikshant.dak@gmail.com</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your name</Text>
                <TextInput style={styles.inputStyle} 
                    placeholder={"Name"}
                    value={name}
                    onChangeText={(userdata) => setName(userdata)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your email</Text>
                <TextInput style={styles.inputStyle} 
                    placeholder={"Email"}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your mobile number</Text>
                <TextInput style={styles.inputStyle} 
                    placeholder={"Mobile"}
                    value={phone}
                    onChangeText={(phone) => setPhone(phone)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>How can I help you</Text>
                <TextInput style={[styles.inputStyle, styles.multiLineStyle]} 
                    placeholder={"Tell us about yourself"}
                    value={message}
                    onChangeText={(msg) => setMessage(msg)}
                    numberOfLines={5}
                    multiline={true}
                />
            </View>

            {/* checkbox */}
            <View style={styles.wrapper}>
                <Checkbox 
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#4630eb" : undefined}
                />
                <Text style={styles.wrapperText}>I have read and agreed to terms & conditions</Text>
            </View>

            <TouchableOpacity style={[styles.buttonStyle, {
                backgroundColor: agree ? "#4630eb" : "grey",
            },
            ]}
            disabled={!agree}
            onPress={submit}
            >
            <Text style={styles.buttonText}>Contact Us</Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },

    mainHeader: {
        fontSize: 20,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        fontFamily: "JosefinSans_400Regular",
    },

    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
        fontFamily: "JosefinSans_400Regular",
    },

    inputContainer: {
        marginTop: 20,
        // fontFamily: "JosefinSans_400Regular",
    },

    labels: {
        // fontWeight: 600,
        color: "#7d7d7d",
        paddingBottom: 5,
        lineHeight: 25,
        fontFamily: "Nunito_700Bold",
    },

    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 5,
        fontFamily: "JosefinSans_400Regular",
    },

    multiLineStyle: {
        paddingVertical: 4,
    },

    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },

    buttonText: {
        color: "#eee",
        fontFamily: "JosefinSans_400Regular",
    },

    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        fontFamily: "JosefinSans_400Regular",
    },

    wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d",
        fontFamily: "JosefinSans_400Regular",
    },
})

export default Contact;