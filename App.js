import { Icon, Root } from "native-base";
import React, { Component } from "react";
import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
	createSwitchNavigator,
    DrawerItems,
    SafeAreaView
} from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { Provider } from "react-redux";
import store from "./app/redux/store";
import LoginScreen from "./app/screens/AuthScreens/LoginScreen";
import RegisterScreen from "./app/screens/AuthScreens/RegisterScreen";
import Applications from "./app/screens/MainScreens/Application/Applications";
import DetailScreen from "./app/screens/MainScreens/Home/DetailScreen";
import HomeScreen from "./app/screens/MainScreens/Home/HomeScreen";
import ProfileScreen from "./app/screens/MainScreens/Profile/ProfileScreen";
import SavedScreen from "./app/screens/MainScreens/Saved/SavedScreen";
import SearchScreen from "./app/screens/MainScreens/Search/SearchScreen";
import SplashScreen from "./app/screens/SplashScreen/SplashScreen";

const WIDTH = Dimensions.get("window").width;

const AuthScreen = createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        },
        Register: {
            screen: RegisterScreen
        }
    },
    {
        headerMode: "none"
    }
);

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Detail: DetailScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
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
        })
    }
);
const SearchStack = createStackNavigator({ Home: SearchScreen });
const SavedStack = createStackNavigator({ Home: SavedScreen });
const ProfileStack = createStackNavigator({ Home: ProfileScreen });
const ApplicationsStack = createStackNavigator({ Home: Applications });

const MainScreen = createDrawerNavigator(
    {
        HomeStack: {
            screen: HomeStack,
            navigationOptions: () => ({
                drawerLabel: "Home"
            })
        },
        SearchStack: {
            screen: SearchStack,
            navigationOptions: () => ({
                drawerLabel: "Search"
            })
        },
        SavedStack: {
            screen: SavedStack,
            navigationOptions: () => ({
                drawerLabel: "Saved"
            })
        },
        ProfileStack: {
            screen: ProfileStack,
            navigationOptions: () => ({
                drawerLabel: "Profile"
            })
        },
        ApplicationsStack: {
            screen: ApplicationsStack,
            navigationOptions: () => ({
                drawerLabel: "Application"
            })
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            drawerIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = FontAwesome5;
                let iconName;
                switch (routeName) {
                    case "HomeStack":
                        iconName = "home";
                        break;
                    case "SearchStack":
                        iconName = "search";
                        break;
                    case "SavedStack":
                        iconName = "star";
                        break;
                    case "ProfileStack":
                        iconName = "user";
                        break;
                    case "ApplicationsStack":
                        iconName = "newspaper";
                        break;
                }
                return (
                    <IconComponent
                        name={iconName}
                        size={20}
                        color={tintColor}
                    />
                );
            }
        }),
        drawerWidth: WIDTH * 0.6,
        initialRouteName: "HomeStack",
        contentOptions: {
            activeTintColor: "#F1C40F",
            inactiveTintColor: "gray"
        },
        drawerBackgroundColor: "#34495E",
        drawerLockMode: "locked-closed",
        contentComponent: props => (
            <ScrollView>
                <SafeAreaView
                    style={{ flex: 1 }}
                    forceInset={{ top: "always", horizontal: "never" }}
                >
                    <Image
                        source={require("./app/assets/user.png")}
                        style={{
                            marginTop: 8,
                            height: 100,
                            width: 100,
                            alignSelf: "center"
                        }}
                        borderRadius={30}
                        resizeMode="cover"
                    />
                    <DrawerItems {...props} />
                </SafeAreaView>
            </ScrollView>
        )
    }
);

// const SwitchScreen = createSwitchNavigator(
//     {
//         Splash: SplashScreen,
//         Auth: AuthScreen,
//         Main: MainScreen
//     },
//     {
//         initialRouteName: "Splash"
//     }
// );
const SwitchScreen = createAnimatedSwitchNavigator(
    {
        Splash: SplashScreen,
        Auth: AuthScreen,
        Main: MainScreen
    },
    {
        initialRouteName: "Splash",
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="fade"
                    durationMs={400}
                    interpolation="linear"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        )
    }
);

const AppContainer = createAppContainer(SwitchScreen);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppContainer />
                </Root>
            </Provider>
        );
    }
}
