import { Container } from "native-base";
import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import JobItem from "../../../components/JobItem";

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <FlatList
                    data={[{ key: "a" }, { key: "b" }]}
                    renderItem={({ item }) => (
                        <JobItem
                            detailNavigate={() =>
                                this.props.navigation.navigate("Detail")
                            }
                        />
                    )}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

export default HomeScreen;
