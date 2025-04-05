import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import banner from "../assets/banner.png";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.png";
import { LinearGradient } from "expo-linear-gradient";

export default function CartScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#E6E6E600', '#FEFFBF']}
                style={styles.gradientTop}>
                <View style={styles.top}>
                    <Ionicons name="arrow-back" size={"20"} />
                    <Text style={{ fontSize: 20 }}>Shopping Cart</Text>
                    <Ionicons name="trash-bin-outline" size={"20"} />
                </View>
            </LinearGradient>

            <Image source={banner} style={styles.banner} />
            <View style={styles.burgerWrap}>
                <Image source={burger1} style={styles.burgerItem} />
                <Image source={burger2} style={styles.burgerItem} />
                <Image source={burger3} style={styles.burgerItem} />
            </View>
            <LinearGradient
                colors={['#F5F5F5', '#F5F5F5']}
                style={styles.gradientBottom}>
                <View style={styles.text1}>
                    <Text style={styles.name}>BURGER</Text>
                    <Text style={styles.price}>$28</Text>
                </View>
                <View style={styles.text2}>
                    <Text style={styles.rating}><Ionicons name="star" color={"#feca57"} />4.9 (3k+ Rating)</Text>
                    <Text style={styles.count}>+ 02 -</Text>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.location}>
                        <Ionicons name="location-outline" size={"30"} color={"#686868"} />
                        <View>
                            <Text style={styles.locationText}>Delivery Address</Text>
                            <Text style={styles.locationText}>Ha Noi, Viet Nam</Text>
                        </View>
                    </View>
                    <View style={styles.locationIcon}>
                        <Ionicons name="locate-outline" size={'30'} color={'#686868'} />
                    </View>
                </View>
                <View style={styles.payment}>
                    <Text style={styles.paymentText1}><Ionicons name="card-outline" />  Payment Method</Text>
                    <Text style={styles.paymentText2}>Change</Text>
                </View>
                <View style={styles.summaryWrap}>
                    <View style={styles.summary}>
                        <Text style={styles.summaryTitle}>Checkout Summary</Text>
                        <View style={styles.summaryBody}>
                            <View style={styles.summaryItem}>
                                <Text style={styles.summaryItemText}>Subtotal</Text>
                                <Text style={styles.summaryPriceText}>$56</Text>
                            </View>
                            <View style={styles.summaryItem}>
                                <Text style={styles.summaryItemText}>Delivery Fee</Text>
                                <Text style={styles.summaryPriceText}>$6.20</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>Payable Total</Text>
                        <Text style={styles.totalPriceText}>$62.20</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Confirm Order</Text>
                    </View>
                </TouchableOpacity>


            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    gradientTop: {
        height: 180,
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        zIndex: 1,
        position: "relative",
    },

    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
        padding: 10,
    },
    banner: {
        width: "90%",
        height: 214,
        alignSelf: "center",
        position: "absolute",
        zIndex: 2,
        borderRadius: 20,
        top: 100,
    },

    burgerWrap: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",
        position: "absolute",
        top: 230,
        gap: 10
    },

    burgerItem: {
        width: 100,
        height: 80,
        borderRadius: 12,
        zIndex: 4,
    },

    gradientBottom: {
        top: 100,
        height: 700,
        width: "90%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignSelf: "center",
        zIndex: 3,
    },
    text1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        top: 30
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    price: {
        fontSize: 30,
        color: "#7D78F1",
    },

    text2: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    rating: {
        fontSize: 15,
        color: "#686868",
    },
    count: {
        fontSize: 20,
        color: "#686868",
    },
    locationWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: -20
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: '#C0EADB',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 10,
    },
    locationIcon: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#A9A6FF',
        borderRadius: 10,
    },
    locationText: {
        fontSize: 15,
        color: "#686868",
    },
    payment: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: -20
    },
    paymentText1: {
        fontSize: 20,
        color: "#686868",
    },
    paymentText2: {
        fontSize: 20,
        color: "#4A43EC",
        padding: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#4A43EC",
    },
    summaryWrap: {
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 20,
    },
    summary: {
        flexDirection: "column",
    },
    summaryTitle:{
        fontSize: 20,
        fontWeight: "bold",
    },
    summaryItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",   
        paddingTop: 10     
    },
    total: {
        fontSize: 20,
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,

    },
    summaryItemText: {
        fontSize: 15,
        color: "#686868",
    },
    summaryPriceText: {
        fontSize: 15,
    fontWeight: "bold",
    },

    totalText: {
        fontSize: 15,
        fontWeight: "bold",
    },
    totalPriceText:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#7D78F1",
    },
    button: {
        backgroundColor: "#4A43EC",
        padding: 15,
        borderRadius: 20,
        width: "80%",
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
    },




})
