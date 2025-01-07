import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "./src/screens/SecondScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListsScreen2 from "./src/screens/ListsScreen2";
import ComponentsScreen2 from "./src/screens/ComponentsScreen2";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import FlexBoxScreen from "./src/screens/FlexBoxScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListsScreen2} />
        <Stack.Screen name="Components" component={ComponentsScreen2} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Flex" component={FlexBoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
