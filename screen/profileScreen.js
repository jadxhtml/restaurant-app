import React from "react";
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import donk from "../assets/donk.png";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#E6E6E600', '#FEFFBF']}
                style={styles.gradient}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back" style={{marginLeft: 20, fontSize: 30}}/>
                    <Text style={{marginLeft: 120, fontSize: 20, fontWeight: "bold"}}>Profile</Text>
                </View>
                
            </LinearGradient>
            <View style={styles.avatarContainer}>
                <Image source={donk} style={styles.avatar} />   
            </View>
            <Ionicons name="pencil-outline" style={styles.editIcon}/>
            <LinearGradient 
                colors={['#FEFFBF', '#E6E6E600']}
                style={styles.gradientBottom}> 
                <Text style={styles.name}>Danil "donk" Kryshkovets</Text>
                <Text style={styles.email}>donk666@gmail.com</Text>
                <View style={styles.optionContainer}>
                    <View style={styles.optionItems}><Text style={styles.optionText}><Ionicons name="home-outline" size={"20"}/>    Home</Text><Ionicons name="arrow-forward-sharp" size={"20"}/></View>
                    <View style={styles.optionItems}><Text style={styles.optionText}><Ionicons name="card-outline" size={"20"}/>    My Card</Text><Ionicons name="arrow-forward-sharp" size={"20"}/></View>
                    <View style={styles.optionItems}><Text style={styles.optionText}><Ionicons name="moon-outline" size={"20"}/>    Dark Mode</Text><Ionicons name="radio-button-off-outline" size={"20"}/></View>
                    <View style={styles.optionItems}><Text style={styles.optionText}><Ionicons name="location-outline" size={"20"}/>    Truck Your Order</Text><Ionicons name="arrow-forward-sharp" size={"20"}/></View>
                    <View style={styles.optionItems}><Text style={styles.optionText}><Ionicons name="settings-outline" size={"20"}/>    Settings</Text><Ionicons name="arrow-forward-sharp" size={"20"}/></View>
                    <View style={styles.optionItems}><Text style={styles.optionText}><Ionicons name="help-outline" size={"20"}/>    Help Center</Text><Ionicons name="arrow-forward-sharp" size={"20"}/></View>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Log Out <Ionicons name="log-out-outline" size={"20"}/></Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        </View>  
    )
}
const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "#fff",    
    },

    gradient: {
        height: 250,
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        zIndex: 1,
        position: "relative",
    },
    gradientBottom: {
        height: 550,
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: 30,
        zIndex: 0,  
        position: "relative",   
    },
    header: {
        position: "relative",
        flexDirection: "row",
        marginTop: 70,
        
    },
    avatarContainer: {
        position: "absolute",
        zIndex: 3,
        borderRadius: 50,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 210,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editIcon: {
        fontSize: 15,
        position: "absolute",
        zIndex: 5,
        top: 280,
        left: 220,
        borderRadius: 50,
        padding: 5,
        backgroundColor: "#4A43EC",
        color: "#fff",  
    },
    name: {
        position: "absolute",
        alignSelf: "center",
        top: 40,
        fontSize: 20,
        fontWeight: "bold",
    },
    email: {
        position: "absolute",
        alignSelf: "center",
        top: 65,
        fontSize: 12,
        color: "#686868",
    },
    optionContainer: {
        flexDirection: "column",
        marginTop: 80,

    },
    optionItems: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    optionText: {
        fontSize: 20,        
    },
    button: {
        backgroundColor: "#4A43EC",
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 50,
        marginTop:20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        
    },


})