import { Button, Container, Footer, Icon, Text } from "native-base";
import React, { Component } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Detail from "../../../components/Detail";

class DetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{ marginLeft: 16 }}
            >
                <Icon
                    type="FontAwesome5"
                    name="arrow-left"
                    style={{ color: "#F1C40F" }}
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => {}} style={{ marginRight: 16 }}>
                <Icon
                    type="FontAwesome5"
                    name="star"
                    style={{ color: "gray" }}
                />
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <Container>
                <FlatList
                    data={[
                        {
                            key: "a",
                            jobName: "AutoID Technologies",
                            location: "Jakarta Pusat, Medan, Surabaya",
                            salary: "IDR 5.000.000 - 6.000.000",
                            requirements: "Min 1 Tahun",
                            description:
                                "Kandidat harus memiliki setidaknya SMA di bidang apapun.Setidaknya memiliki 1 tahun pengalaman dalam bidang yang sesuai untuk posisi ini.kemampuan yang harus dimiliki: Communication skill, Jaringan Internet, ecommerce.Lebih disukai pegawai khusus dalam IT/komputer/Sistem database atau setara"
                        }
                    ]}
                    renderItem={({ item }) => (
                        <Detail
                            jobName={item.jobName}
                            location={item.location}
                            salary={item.salary}
                            requirements={item.requirements}
                            description={item.description}
                        />
                    )}
                />
                <Footer style={styles.footerCustom}>
                    <Button style={styles.buttonCustom}>
                        <Text style={styles.textCustom}>Apply</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonCustom: {
        backgroundColor: "#F1C40F",
        flex: 1,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    footerCustom: {
        backgroundColor: "#34495E"
    },
    textCustom: {
        color: "#34495E"
    }
});

export default DetailScreen;
