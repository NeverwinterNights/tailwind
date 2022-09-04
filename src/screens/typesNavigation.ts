import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RestaurantCardPropsType} from "../components/RestaurantCard";
import {NativeStackScreenProps} from "@react-navigation/native-stack";


export type RootStackParamList = {
    HomeScreen: undefined
    RestaurantScreen: { data: RestaurantCardPropsType }
    BasketScreen: undefined
    PreparingOrderScreen: undefined
    DeliveryScreen: undefined
}


export type RestaurantScreenPropsType = NativeStackScreenProps<RootStackParamList, 'RestaurantScreen'>

export type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()
