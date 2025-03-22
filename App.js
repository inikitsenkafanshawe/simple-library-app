import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BookScreen from "./src/screens/BookScreen";
import MyBooksScreen from "./src/screens/MyBooksScreen";
import { BooksProvider } from "./src/context/BooksContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BooksProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#1E88E5" },
            headerTintColor: "#FFF",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="MyBooks" component={MyBooksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BooksProvider>
  );
}
