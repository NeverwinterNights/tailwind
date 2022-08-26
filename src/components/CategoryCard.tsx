import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type CategoryCardPropsType = {
    image: string
    title: string
}

export const CategoryCard = ({image, title}: CategoryCardPropsType) => {
    return (
        <TouchableOpacity className="mr-2 relative">
            <Image className="w-20 h-20 rounded" source={{uri: image}}/>
            <Text className="absolute left-1 bottom-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    );
};

