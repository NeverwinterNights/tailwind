import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Constants from "expo-constants";

type PreparingOrderScreenPropsType = {}

export const PreparingOrderScreen = ({}: PreparingOrderScreenPropsType) => {
    return (
        <SafeAreaView style={{
            paddingTop: Constants.statusBarHeight, flex: 1, alignItems: "center",
            justifyContent: "center", backgroundColor: "#00CCBB"
        }}>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {}
});
