import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
//import story from "../screens/story";
import StoryScreen from "../screens/StoryScreen";
import Games from "../components/Games";
import Friends from "../components/Friends";
import LibraryScreen from "../screens/LibraryScreen";
// import Posts from "../components/Posts";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Post" component={StoryScreen} options={{ headerShown: true }}/>
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="Friends" component={Friends} />
      <Stack.Screen name="MyGame" component={LibraryScreen}/>
      {/* <Stack.Screen name="Posts" component={Posts} options={{ headerShown: true }}/> */}

    </Stack.Navigator>
  );
}
