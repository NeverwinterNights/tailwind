import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type DishRowPropsType = {
    id: string
    name: string
    description: string
    price: number
    image: string
}

export const DishRow = ({id, name, description, price, image}: DishRowPropsType) => {
    return (
        <View>

        </View>
    );
};

