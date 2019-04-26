import { Container, Icon } from "native-base";
import React, { Component } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Profile from "../../../components/Profile";

class ProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => {
                    navigation.toggleDrawer();
                }}
                style={{ marginLeft: 16 }}
            >
                <Icon
                    type="FontAwesome5"
                    name="bars"
                    style={{ color: "#F1C40F" }}
                />
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: "#34495E"
        }
    });

    render() {
        return (
            <Container>
                <FlatList
                    // ItemSeparatorComponent={() => (
                    //     <View
                    //         style={{
                    //             backgroundColor: "red",
                    //             height: 0.5
                    //         }}
                    //     />
                    // )}
                    data={[
                        {
                            key: "a",
                            name: "Rivo Rizaldi",
                            address: "Jawa Timur",
                            email: "rivo.rizaldy18@gmail.com",
                            phone: "+6285298826043",
                            experience: "",
                            education: "",
                            skills: "",
                            expectedSalary: 0
                        }
                    ]}
                    renderItem={({ item }) => <Profile />}
                />
            </Container>
        );
    }
}



export default ProfileScreen;
