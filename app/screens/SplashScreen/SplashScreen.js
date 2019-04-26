import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => {
                        setTimeout(() => {
                            this.props.navigation.navigate("Auth");
                        }, 2000);
                    }}
                />
                <Image
                    source={require("../../assets/seekJob_Logo.png")}
                    style={{ height: 150, width: 150 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D6C348"
    }
});

export default SplashScreen;
