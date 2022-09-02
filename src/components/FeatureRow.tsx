import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ArrowRightIcon} from "react-native-heroicons/outline";
import {RestaurantCard} from "./RestaurantCard";
import {dishes} from "../data/dummyData";

type FeatureRowPropsType = {
    title: string
    description: string
    id: string
}




export const FeatureRow = ({id, title, description}: FeatureRowPropsType) => {
    return (
        <View>
            <View className="flex-row items-center mt-4 justify-between px-4">
                <Text className="text-lg font-bold">{title}</Text>
                <ArrowRightIcon size={25} color={"#00CCBB"}/>
            </View>
            <Text className="px-4 text-xs text-gray-500">{description}</Text>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}}
                        showsHorizontalScrollIndicator={false} className="pt-4">
                {/*Restaurant Cards*/}
                <RestaurantCard id="213" imgUri="https://img.gazeta.ru/files3/33/8135033/eda1-pic905-895x505-299.jpg"
                                title="Borch Restaurant" rating={4.5} genre="France" address="45 street" description="Tasty borch"
                                dishes={dishes} long={3453} lat={434345}/>
                <RestaurantCard id="213" imgUri="https://img.gazeta.ru/files3/33/8135033/eda1-pic905-895x505-299.jpg"
                                title="Vegeterian Green Restaurant" rating={4.5} genre="Monaco" address="45 street" description="Tasty borch"
                                dishes={dishes} long={3453} lat={434345}/>
                <RestaurantCard id="213" imgUri="https://img.gazeta.ru/files3/33/8135033/eda1-pic905-895x505-299.jpg"
                                title="Meeeat Restaurant" rating={4.5} genre="Spain" address="45 street" description="Tasty borch"
                                dishes={dishes} long={3453} lat={434345}/>
            </ScrollView>
        </View>
    );
};

