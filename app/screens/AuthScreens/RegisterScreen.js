import {
    Button,
    Container,
    Content,
    Form,
    Input,
    Item,
    Label,
    Text
} from "native-base";
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

class RegisterScreen extends Component {
    render() {
        return (
            <ScrollView>
                <Container>
                    <Content contentContainerStyle={styles.contentCustom}>
                        <Image
                            source={require("../../assets/seekJob_Logo.png")}
                            style={{
                                height: 150,
                                width: 150,
                                alignSelf: "center"
                            }}
                        />
                        <Form>
                            <Item stackedLabel style={styles.textInputCustom}>
                                <Label style={{color:"#fff"}}>Username</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel style={styles.textInputCustom}>
                                <Label style={{color:"#fff"}}>Email</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel style={styles.textInputCustom}>
                                <Label style={{color:"#fff"}}>Password</Label>
                                <Input />
                            </Item>
                            <Button
                                block
                                style={styles.buttonCustom}
                                onPress={() =>
                                    this.props.navigation.navigate("Main")
                                }
                            >
                                <Text style={{ color: "#F1C40F" }}>
                                    Sign In
                                </Text>
                            </Button>
                            <Form style={styles.formCustom}>
                                <Label style={styles.labelCustom}>
                                    Have An Account ?
                                </Label>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("Login");
                                    }}
                                >
                                    <Text>Sign Up</Text>
                                </TouchableOpacity>
                            </Form>
                        </Form>
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentCustom: {
        backgroundColor: "#D6C348",
        justifyContent: "center",
        flex: 1,
        paddingRight: 16,
        paddingLeft: 16
    },
    h1Custom: {
        textAlign: "center",
        fontSize: 30
    },
    buttonCustom: {
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        backgroundColor: "#34495E"
    },
    textInputCustom: {
        marginRight: 15
    },
    formCustom: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 8
    },
    labelCustom: {
        marginRight: 1
    }
});

export default RegisterScreen;
