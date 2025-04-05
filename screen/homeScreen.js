import React, { use } from "react";
import { View, Text, Image, StyleSheet, ViewBase, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import donk from "../assets/donk.png";
import imgsale from "../assets/burgerSale.png";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
    const nav = useNavigation();


    return (
        <View style={{backgroundColor: "#fff"}}>
            <LinearGradient
                colors={['#E6E6E600', '#FEFFBF']}
                style={styles.gradient}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    paddingTop: 80
                }}>
                    <Image source={donk} style={styles.avatar} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{color: "grey", fontSize: 20}}>   Your Location</Text>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}><Ionicons name="location" style={{color: "blue"}}/> Ha Noi, Viet Nam</Text>
                    </View>

                    <Ionicons name="notifications-outline" size={30} />
                </View>

            </LinearGradient>
            <View style={styles.search}>
                <Text style={{fontSize: 15, paddingRight: 130, color: "#fff"}}>< Ionicons name="search-outline" size={"18"}/>  Search Your Food</Text>
                <Ionicons name="filter-circle" size={"20"} color={"#fff"}/>
            </View>
            <View style={styles.order}>
                <View style={{
                    alignItems: "center",
                    height: 100,
                    width: 100,
                    textAlign: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    backgroundColor: "#29D697",
                }}><Ionicons name="pizza-outline" size={"30"} color={"#fff"}/><Text style={{color: "#fff"}}>PIZZA</Text></View>
                <View style={styles.orderItem}><Ionicons name="fast-food-outline" size={"30"}/><Text>BURGER</Text></View>
                <View style={styles.orderItem}><Ionicons name="cafe-outline" size={"30"}/><Text >DRINK</Text></View>
                <View style={styles.orderItem}><Ionicons name="fast-food-sharp" size={"30"}/><Text>RICE</Text></View>
            </View>
            <TouchableOpacity onPress={() => nav.navigate("Cart")}>
                <View>
                    <Image source={imgsale} style={styles.imgSale}/>    
                </View>
            </TouchableOpacity>
            <View style={styles.dotwrap}>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 30,
                    width: 20,
                    height: 50,
                }}>•</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.text}>
                    <Text style={{fontSize: 20}}>Popular Items</Text>
                    <Text style={{fontSize: 20, color: "gray"}}>VIEW ALL</Text>
                </View>
                <View style={styles.Popular}>
                    <View style={styles.popularItem}><Image source={burger} style={styles.imgPopular}/><Text style={styles.popularText}>BURGER</Text></View>
                    <View style={styles.popularItem}><Image source={pizza} style={styles.imgPopular}/><Text style={styles.popularText}>PIZZA</Text></View>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
        height: 200,
        borderRadius: 50,
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    search: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: '#4A43EC',
        borderRadius: 30,
        width: "85%",
        alignSelf: "center",
        position: "relative",
        marginTop:  -30,
    },
    order: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: "row",
        position: "relative",
        gap: 10

    },
    orderItem: {
        alignItems: "center",
        height: 100,
        width: 100,
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
    },
    imgSale: {
        position: "relative",
        width: 350,
        height: 150,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 20,
    },
    dotwrap: {
        flexDirection: "row",
        alignSelf: "center", 
    },
    dot: {
        fontWeight: "bold",
        fontSize: 30,
        width: 20,
        height: 50,
        color: "grey"
    },  
    footer: {
        flexDirection: "column",
        marginTop: -20
    },  
    text:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        fontWeight: "bold",
    },
    Popular:{
        flexDirection: "row",
        justifyContent: "space-around",
    },
    popularItem:{
        flexDirection: "column",
    
    },
    imgPopular: {
        width: 170,
        height: 150,
        borderRadius: 10,
    },
    popularText:{
        padding: 10,
        fontSize: 20
    }

}

)