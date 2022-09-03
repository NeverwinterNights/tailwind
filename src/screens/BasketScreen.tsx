import React, {useMemo, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from "../../store/store";
import Constants from "expo-constants";
import {XCircleIcon} from "react-native-heroicons/solid";
import {useAppNavigation} from "./typesNavigation";
import {DishRowPropsType} from "../components/DishRow";
import Currency from "react-currency-formatter";
import {removeFromBasketAC} from "../../store/basketReducer";

type BasketScreenPropsType = {}


type ResultsType = {
    [key: string]: DishRowPropsType[]
}


export const BasketScreen = ({}: BasketScreenPropsType) => {
    const restaurant = useAppSelector(state => state.restaurantReducer.restaurant);
    const items = useAppSelector(state => state.basketReducer.items);
    const dispatch = useAppDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<ResultsType>({});
    const navigation = useAppNavigation()
    const total = useAppSelector(state => state.basketReducer.items).reduce((total, item) => total += item.price, 0);


    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            // if (results[item.id]) {
            //     results[item.id].push(item)
            // } else {
            //     results[item.id] = [item]
            // }
            return results
        }, {} as ResultsType)

        setGroupedItemsInBasket(groupedItems)

    }, [items]);


    return (
        <SafeAreaView style={{paddingTop: Constants.statusBarHeight, flex: 1, backgroundColor: "white"}}>
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity className="rounded-full absolute top-3 right-3 bg-gray-100"
                                      onPress={navigation.goBack}>
                        <XCircleIcon size={50} color={"#00CCBB"}/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 my-5 bg-white">
                    <Image className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                           source={{uri: "https://links.papareact.com/wru"}}/>
                    <Text className="flex-1">Deliver in 70 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {
                        Object.entries(groupedItemsInBasket).map(([key, items]) =>
                            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                                <Text className="text-[#00CCBB]">{items.length} x</Text>
                                <Image source={{uri: items[0]?.image}} className="h-12 w-12 rounded-full"/>
                                <Text className="flex-1">{items[0]?.name}</Text>
                                <Text className="text-gray-600"><Currency quantity={items[0]?.price} currency={"USD"}/></Text>
                                <TouchableOpacity>
                                    <Text onPress={() => dispatch(removeFromBasketAC({id: key}))}
                                          className="text-[#00CCBB] text-xs">Remove from basket</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </ScrollView>
                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400"><Currency quantity={total} currency={"USD"}/></Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery cost</Text>
                        <Text className="text-gray-400"><Currency quantity={11.99} currency={"USD"}/></Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text >Order total</Text>
                        <Text className="font-extrabold"><Currency quantity={total+11.99} currency={"USD"}/></Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-4">
                        <Text className="text-center text-lg font-bold text-white">Place Order</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {}
});
