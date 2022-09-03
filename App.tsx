import {StatusBar} from 'expo-status-bar';
import {TailwindProvider} from "tailwindcss-react-native";
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from "./src/screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RestaurantScreen} from "./src/screens/RestaurantScreen";
import {RootStackParamList} from "./src/screens/typesNavigation";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BasketScreen} from "./src/screens/BasketScreen";
import {PreparingOrderScreen} from "./src/screens/PreparingOrderScreen";


export default function App() {
    const Stack = createNativeStackNavigator<RootStackParamList>()


    return (
        <TailwindProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="HomeScreen" component={HomeScreen}
                                      options={{headerTitleAlign: "center", headerShown: false}}/>
                        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen}
                                      options={{headerTitleAlign: "center", headerShown: false}}/>
                            <Stack.Screen name="BasketScreen" component={BasketScreen}
                                          options={{headerShown: false, animation: "slide_from_bottom"}}/>
                        <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
                                      options={{headerShown: false, presentation:"fullScreenModal"}}/>
                    </Stack.Navigator>
                    <StatusBar style="auto"/>
                </NavigationContainer>
            </Provider>
        </TailwindProvider>
    );
}

