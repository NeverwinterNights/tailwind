import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Constants from "expo-constants";
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useAppNavigation} from "./typesNavigation";


type PreparingOrderScreenPropsType = {}

export const PreparingOrderScreen = ({}: PreparingOrderScreenPropsType) => {
    const navigation = useAppNavigation()



    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate("DeliveryScreen")
        },3000)
    },[])

    return (
        <SafeAreaView style={{
            paddingTop: Constants.statusBarHeight, flex: 1, alignItems: "center",
            justifyContent: "center", backgroundColor: "#00CCBB"
        }}>
            <Animatable.Image
                source={require("./../../assets/source.gif")}
                animation={"slideInUp"}
                iterationCount={1}
                className="h-96 w-96"
            />
            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className="text-white my-10 text-lg font-bold text-center"
            >Wait until Restaurant accept your order!</Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {}
});
