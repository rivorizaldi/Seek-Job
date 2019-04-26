import {
    Body,
    Card,
    CardItem,
    Content,
    Icon,
    Left,
    Right,
    Text
} from "native-base";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

class JobItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.detailNavigate}>
                <Content>
                    <Card>
                        <CardItem
                            header
                            style={{
                                flexDirection: "column",
                                alignItems: "flex-start",
                                paddingBottom: 0
                            }}
                        >
                            <Text
                                style={{ color: "#34495E", fontWeight: "bold" }}
                            >
                                Senior IT Programmer
                            </Text>
                            <Text style={{ fontWeight: "normal" }}>
                                PT EMKL Saranabhakti Timur
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Body style={{ flexDirection: "row" }}>
                                <Icon
                                    type="FontAwesome5"
                                    name="map-marked-alt"
                                    style={{ color: "#34495E", fontSize: 18 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: "gray",
                                        paddingTop: 3,
                                        paddingLeft: 2
                                    }}
                                >
                                    Surabaya (Jawa Timur) - Jl. Raya Satelite
                                    ...{" "}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer style={{ paddingTop: 0 }}>
                            <Left>
                                <Icon
                                    type="FontAwesome5"
                                    name="money-bill"
                                    style={{
                                        color: "#3BB72F",
                                        fontSize: 18,
                                        width: 25
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: "#3BB72F",
                                        marginLeft: 0
                                    }}
                                >
                                    IDR 5.000.000 - 6.000.000
                                </Text>
                            </Left>
                            <Right>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: "gray"
                                    }}
                                >
                                    1 Jam Yang Lalu
                                </Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </TouchableOpacity>
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

export default JobItem;
