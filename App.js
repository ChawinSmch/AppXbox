import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTap from "./navigations/BottomTap";

export default function App() {
  return ( 
    <NavigationContainer>
    {/* <Mainscreen /> */}
    <BottomTap/>
    </NavigationContainer>
  );
}
