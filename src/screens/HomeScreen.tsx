import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Constants from 'expo-constants';
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from "react-native-heroicons/outline";
import {Categories} from "../components/Categories";
import {FeatureRow} from "../components/FeatureRow";

type HomeScreenPropsType = {}

export const HomeScreen = ({}: HomeScreenPropsType) => {


    return (
        <SafeAreaView style={styles.container} className={"pt-5"}>
            {/*Header*/}
            <View className={"flex-row pb-3 items-center mx-4 space-x-2"}>
                <Image className={"h-7 w-7 bg-gray-300 p-4 rounded-full"}
                       source={{uri: "https://assets.prophotos.ru/data/articles/0002/2622/195312/thumb_1260.jpg"}}/>
                <View className={"flex-1"}>
                    <Text className={"font-bold text-gray-400 text-x5"}>Deliver Now</Text>
                    <Text className={"font-bold text-xl"}>Current Location
                        <ChevronDownIcon size={20} color={"#00CCBB"}/>
                    </Text>
                </View>
                <UserIcon size={35} color={"#00CCBB"}/>
            </View>
            {/*Search*/}
            <View className="flex-row items-center mx-4 space-x-2 pb-2">
                <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon size="22" color="grey"/>
                    <TextInput className="decoration-black" placeholder="Type something"/>
                </View>
                <AdjustmentsVerticalIcon size={20} color={"#00CCBB"}/>
            </View>
            {/*Body*/}
            <ScrollView>
                {/*Categories*/}
                <Categories/>
                {/*Feature*/}
                <FeatureRow id="1" title={"Offers near You"} description={"Great offers near you"}/>
                <FeatureRow id="1" title={"Feature"} description={"Paid place from your investors"}/>
                <FeatureRow id="2" title={"Great Discounts"} description={"Paid place from your investors"}/>
                <FeatureRow id="3" title={"Good Offers"} description={"Paid place from your investors"}/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    }
});
