// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, KeyboardAvoidingView, Text, View, Platform } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from "./screens/MapScreen";
import EatScreen from "./screens/EatScreen";

import 'intl';
import 'intl/locale-data/jsonp/en';




export default function App({ }) {
  const Stack = createStackNavigator();

  return (

    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}

          >

            <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen name="Home" component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="MapScreen" component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="EatScreen" component={EatScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>



        </SafeAreaProvider>
      </NavigationContainer>
    </Provider >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
