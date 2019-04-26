import { Body, Card, CardItem, Content, Icon, Text } from "native-base";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class Detail extends Component {
    render() {
        return (
            <Content>
                <Card>
                    <CardItem header bordered>
                        <Body style={{ justifyContent: "center" }}>
                            <Text style={styles.welcome}>
                                {this.props.jobName}
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                                <Icon
                                    type="FontAwesome5"
                                    name="info-circle"
                                    style={{ color: "#34495E", fontSize: 18 }}
                                />
                                <Text style={styles.welcome}>
                                    {this.props.location}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Icon
                                    type="FontAwesome5"
                                    name="info-circle"
                                    style={{ color: "#34495E", fontSize: 18 }}
                                />
                                <Text style={styles.welcome}>
                                    {this.props.salary}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Icon
                                    type="FontAwesome5"
                                    name="info-circle"
                                    style={{ color: "#34495E", fontSize: 18 }}
                                />
                                <Text style={styles.welcome}>
                                    {this.props.requirements}
                                </Text>
                            </View>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>Job Description</Text>
                            <Text>{this.props.description}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

export default Detail;
