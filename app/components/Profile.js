import { Body, Card, CardItem, Content, Icon, Text } from "native-base";
import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            imageSource: require("../assets/user.png")
        };
    }

    imagePicker = () => {
        const options = {
            title: "Select Image",
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.showImagePicker(options, response => {
            console.log("Response = ", response);

            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else {
                const source = {
                    uri: response.uri
                };

                this.setState({
                    imageSource: source
                });
            }
        });
    };

    render() {
        return (
            <Content>
                <Card>
                    <CardItem header bordered>
                        <Body style={{ justifyContent: "center" }}>
                            <TouchableOpacity
                                onPress={this.imagePicker}
                                style={{
                                    alignSelf: "center"
                                }}
                            >
                                <Image
                                    source={this.state.imageSource}
                                    style={{
                                        height: 120,
                                        width: 120
                                    }}
                                    borderRadius={80}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                            <Text style={styles.welcome}>
                                {this.props.name}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Icon
                                type="FontAwesome5"
                                name="info-circle"
                                style={{ color: "#34495E", fontSize: 18 }}
                            />
                            <Text>Contact Info</Text>
                            <Text>{this.props.email}</Text>
                            <Text>{this.props.phoneNumber}</Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Icon
                                type="FontAwesome5"
                                name="briefcase"
                                style={{ color: "#34495E", fontSize: 18 }}
                            />
                            <Text>Experience</Text>
                            <Text>Where have you worked ?</Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Icon
                                type="FontAwesome5"
                                name="graduation-cap"
                                style={{ color: "#34495E", fontSize: 18 }}
                            />
                            <Text>Education</Text>
                            <Text>{this.props.email}</Text>
                            <Text>{this.props.education}</Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Icon
                            type="FontAwesome5"
                            name="drafting-compass"
                            style={{ color: "#34495E", fontSize: 18 }}
                        />
                        <Body>
                            <Text>Skills</Text>
                            <Text>{this.props.skills}</Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Icon
                            type="FontAwesome5"
                            name="dollar-sign"
                            style={{ color: "#34495E", fontSize: 18 }}
                        />
                        <Body>
                            <Text>Expected Salary</Text>
                            <Text>{this.props.salary}</Text>
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
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        alignSelf: "center"
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

export default Profile;
