import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import BottomTab from "./navigations/BottomTab";
import RootStack from "./navigations/RootStack";
// import Posts from "./components/Posts";

export default function App() {
  return ( 
    <NavigationContainer>
    {/* <Mainscreen /> */}
    {/* <BottomTab/> */}
    <RootStack/>
    </NavigationContainer>
    // <Posts/>
  );
}
