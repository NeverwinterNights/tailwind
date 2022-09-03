import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RestaurantScreenPropsType, useAppNavigation} from "./typesNavigation";
import {ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon} from "react-native-heroicons/solid";
import {MapPinIcon} from "react-native-heroicons/outline";
import {DishRow} from "../components/DishRow";
import {Basket} from "../components/Basket";
import {useAppDispatch} from "../../store/store";
import {setRestaurantAC} from "../../store/restaurantReducer";


export const RestaurantScreen = ({route}: RestaurantScreenPropsType) => {
    const {data} = route.params
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(setRestaurantAC(data))
    }, [])

    return (
        <>
            <Basket/>
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-56 p-4 bg-gray-300" source={{uri: data.imgUri}}/>
                    <TouchableOpacity onPress={navigation.goBack}
                                      className='absolute top-14 left-5 rounded-full p-2 bg-gray-100'>
                        <ArrowLeftIcon size={20} color={"#00CCBB"}/>
                    </TouchableOpacity>
                </View>
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{data.title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon size={22} opacity={0.5} color={"green"}/>
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{data.rating}</Text> · {data.genre}</Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color={"grey"} size={22} opacity={0.4}/>
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-500">Nearby</Text> · {data.address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{data.description}</Text>
                    </View>
                    <TouchableOpacity className={"flex-row items-center space-x-2 p-4 border-y border-gray-300"}>
                        <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20}/>
                        <Text className="pl-2 flex-1  font-bold">Have a food allergies?</Text>
                        <ChevronRightIcon color={"#00CCBB"}/>
                    </TouchableOpacity>
                </View>
                <View className="pb-36">
                    <Text className="px-4 text-xl pt-6 mb-3 font-bold">Menu</Text>
                    {data.dishes.map((dish) =>
                        <DishRow
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            description={dish.description}
                            price={dish.price}
                            image={dish.image}
                        />)}
                </View>
            </ScrollView>
        </>
    );
};

