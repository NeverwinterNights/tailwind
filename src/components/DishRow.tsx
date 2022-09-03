import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Currency from 'react-currency-formatter';
import {MinusCircleIcon} from "react-native-heroicons/solid";
import {PlusCircleIcon} from "react-native-heroicons/mini";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {addToBasketAC, removeFromBasketAC} from "../../store/basketReducer";

export type DishRowPropsType = {
    id: string
    name: string
    description: string
    price: number
    image: string
}

export const DishRow = ({id, name, description, price, image}: DishRowPropsType) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.basketReducer.items).filter((item) => item.id === id);

    const addToBasketClickHandler = () => {

        dispatch(addToBasketAC({value:{id, name, description, price, image}}))
    }
    const removeToBasketClickHandler = () => {
        dispatch(removeFromBasketAC({id}))
    }

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            <Currency quantity={price} currency="USD"/>
                        </Text>
                    </View>
                    <View>
                        <Image style={{borderWidth: 1, borderColor: "#F3F3F4"}} source={{uri: image}}
                               className="h-20 w-20 bg-gray-300 p-4"/>
                    </View>
                </View>
            </TouchableOpacity>
            {( isPressed || items.length>=1) &&
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity onPress={removeToBasketClickHandler}>
                            <MinusCircleIcon  color={items.length>0 ? "#00CCBB": "gray"} size={40}/>
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addToBasketClickHandler}>
                            <PlusCircleIcon color={"#00CCBB"} size={40}/>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    );
};

// color={items.length>0 ? "#00CC0B" : "gray"}
