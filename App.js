import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import BottomTab from "./navigations/BottomTab";
import RootStack from "./navigations/RootStack";
import { ThemeProvider } from "./services/Theme";
// import Posts from "./components/Posts";

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer >
    {/* <Mainscreen /> */}
    {/* <BottomTab/> */}
    <RootStack/>
    </NavigationContainer>
    {/* // <Posts/> */}
    </ThemeProvider>
  );
}
