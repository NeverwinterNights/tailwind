import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type DishRowPropsType = {
    id: string
    name: string
    description: string
    price: number
    image: string
}

export const DishRow = ({id, name, description, price, image}: DishRowPropsType) => {

    return (
        <TouchableOpacity>
            <View>
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

