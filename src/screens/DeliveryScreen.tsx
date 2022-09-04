import React from 'react';
import {Image, ProgressBarAndroid, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from "./typesNavigation";
import Constants from "expo-constants";
import {XMarkIcon} from "react-native-heroicons/solid";
import * as Progress from 'react-native-progress';
import {useAppSelector} from "../../store/store";
import MapView, {Marker} from 'react-native-maps';

type DeliveryScreenPropsType = {}

export const DeliveryScreen = ({}: DeliveryScreenPropsType) => {
    const navigation = useAppNavigation()
    const restaurant = useAppSelector(state => state.restaurantReducer.restaurant);

    return (
        <View className="flex-1 bg-[#00CCBB]">
            <SafeAreaView style={{paddingTop: Constants.statusBarHeight, flex: 1, zIndex: 10}}>
                <View className="flex-row items-center justify-between p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <XMarkIcon size={30} color={"white"}/>
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order help</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-gray-400 text-lg">Estimated Arrival</Text>
                            <Text className="font-bold text-4xl">50 Minutes</Text>
                        </View>
                        <Image source={{uri: "https://links.papareact.com/fls"}} className="w-20 h-20"/>
                    </View>
                    <Progress.Bar color="#00CCBB" indeterminate={true}/>
                    <Text className="mt-3 text-gray-500">Your order at {restaurant.title} is being prepared</Text>
                </View>
            </SafeAreaView>
            {
                restaurant.lat && restaurant.long &&
                <MapView
                    initialRegion={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    className="flex-1 -z-50"
                    mapType="mutedStandard"
                >
                    <Marker coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                            title={restaurant.title ? restaurant.title : ""}
                            description={restaurant.description ? restaurant.description : ""}
                            identifier="origin"
                            pinColor="#00CCBB"
                    />
                </MapView>
            }
            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
              <Image className="w-12 h-12 rounded-full p-4 ml-5 bg-gray-300" source={{uri: "https://links.papareact.com/wru"}}  />
                <View className="flex-1">
                    <Text className="text-lg">Donald Tramp</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00CCBB] font-bold mr-5 text-lg">Call</Text>
            </SafeAreaView>
        </View>
    );
};


