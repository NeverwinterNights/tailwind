import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from "../../store/store";
import {useAppNavigation} from "../screens/typesNavigation";
import Currency from "react-currency-formatter";

type BasketPropsType = {}

export const Basket = ({}: BasketPropsType) => {
    const items = useAppSelector(state => state.basketReducer.items);
    const selectTotal = useAppSelector(state => state.basketReducer.items).reduce((total, item) => total += item.price, 0);
    const navigation = useAppNavigation()

    if (items.length===0) return null

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity onPress={()=> navigation.navigate("BasketScreen")} className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
                <Text className="font-extrabold text-white text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
                <Text className="text-center flex-1 text-white text-lg font-extrabold">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={selectTotal} currency={"USD"}/>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

