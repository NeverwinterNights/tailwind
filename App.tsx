import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {TailwindProvider} from "tailwindcss-react-native";
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from "./src/screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export default function App() {
    const Stack = createNativeStackNavigator()


    return (
        <TailwindProvider>
            <NavigationContainer>
                <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen}
                                      options={{headerTitleAlign: "center", headerShown: false}}/>
                </Stack.Navigator>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </TailwindProvider>
    );
}

