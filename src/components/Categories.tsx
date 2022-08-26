import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CategoryCard} from "./CategoryCard";

type CategoriesPropsType = {}

export const Categories = ({}: CategoriesPropsType) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}>
            <CategoryCard  image={"https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"} title={"Burger"}/>
            <CategoryCard  image={"https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"} title={"Soupe"}/>
            <CategoryCard  image={"https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"} title={"Bread"}/>
            <CategoryCard  image={"https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"} title={"Beer"}/>
            <CategoryCard  image={"https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"} title={"Beer"}/>
            <CategoryCard  image={"https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"} title={"Beer"}/>
            <CategoryCard  image={"https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"} title={"Beer"}/>
        </ScrollView>
    );
};

