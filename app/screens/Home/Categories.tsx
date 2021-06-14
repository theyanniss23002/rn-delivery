import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { useFonts } from 'expo-font';
import { homeData } from './homeData';
import { SHADOWS } from '../../constants/theme';

interface ICategories {
    item?: any;
    selectedCategory?: any;
    setSelectedCategory?: any;
    restaurants?: any;
    setRestaurants?: any;
    category?: any;
    categoryData?: any;
    id?: number;
    categories?: any;
}

const Categories = ({
    selectedCategory,
    setSelectedCategory,
    restaurants,
    setRestaurants
}: ICategories): JSX.Element | null => {
    const [categories, setCategories] = useState(homeData.categoryData || null);

    const [loaded] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf')
    });
    if (!loaded) {
        return null;
    }

    const handleCurrentCategory = (category: ICategories) => {
        const restaurantsList = restaurants.filter((item: ICategories) => item.categories.includes(category.id));
        setRestaurants(restaurantsList);
        setSelectedCategory(category);
    };

    const renderItem = ({ item }: ICategories) => {
        return (
            <TouchableOpacity
                style={selectedCategory?.id == item.id ? styles.flatButtonActive : styles.flatButton}
                onPress={() => handleCurrentCategory(item)}
            >
                <View style={styles.circle}>
                    <Image source={item.icon} resizeMode='contain' style={{ width: 30, height: 30 }} />
                </View>
                <Text style={selectedCategory?.id == item.id ? styles.nameActive : styles.name}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <Text style={styles.title}>Main</Text>
            <Text style={styles.title}>Categories</Text>
            <FlatList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={styles.flatList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        ...FONTS.h1,
        paddingHorizontal: SIZES.padding * 2,
        paddingVertical: 5
    },
    flatList: {
        paddingVertical: SIZES.padding * 2,
        paddingLeft: SIZES.padding * 2
    },
    flatButton: {
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.padding,
        ...SHADOWS.light
    },
    flatButtonActive: {
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.padding
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        ...SHADOWS.normal
    },
    name: {
        marginTop: SIZES.padding,
        color: COLORS.black,
        fontFamily: 'Roboto-Regular'
    },
    nameActive: {
        marginTop: SIZES.padding,
        color: COLORS.white,
        fontFamily: 'Roboto-Regular'
    }
});

export default Categories;
