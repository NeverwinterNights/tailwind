import {HomeScreen} from "./HomeScreen";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RestaurantCardPropsType} from "../components/RestaurantCard";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    HomeScreen: undefined
    RestaurantScreen: { data: RestaurantCardPropsType }
}



export type RestaurantScreenPropsType = NativeStackScreenProps<RootStackParamList, 'RestaurantScreen'>

export type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()
