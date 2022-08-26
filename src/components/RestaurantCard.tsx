import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StarIcon} from "react-native-heroicons/solid";
import {MapPinIcon} from "react-native-heroicons/outline";

type RestaurantCardPropsType = {
    id: string
    imgUri: string
    title: string
    rating: number
    genre: string
    address: string
    description: string
    dishes: []
    long: number
    lat: number
}

export const RestaurantCard = ({
                                   id,
                                   imgUri,
                                   title,
                                   rating,
                                   genre,
                                   address,
                                   description,
                                   dishes,
                                   long,
                                   lat,
                               }: RestaurantCardPropsType) => {
    return (
        <TouchableOpacity className={"bg-white mr-3 shadow"}>
            <Image source={{uri: imgUri}} className="h-36 w-64 rounded-sm"/>
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color={"green"} opacity={0.5} size={22}/>
                    <Text className="text-xs text-gray-500"><Text className="text-green-500">{rating}</Text> · {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                   <MapPinIcon color={"grey"} size={22} opacity={0.4}/>
                    <Text className=" text-grey-500 text-xs">Nearby · {address}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
};

