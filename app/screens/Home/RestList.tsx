import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { SHADOWS } from '../../constants/theme';
import { useFonts } from 'expo-font';

interface IRestList {
    restaurants?: any;
    item?: any;
}

const RestList = ({ restaurants }: IRestList): JSX.Element | null => {
    const [loaded] = useFonts({
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf')
    });
    if (!loaded) {
        return null;
    }
    const renderItem = ({ item }: IRestList) => {
        return (
            <TouchableOpacity style={styles.card}>
                <View>
                    <Image source={item.photo} resizeMode='cover' style={styles.cardImg} />
                    <View style={styles.cardTime}>
                        <Text style={styles.cardTimeTitle}>{item.duration}</Text>
                    </View>
                </View>
                <Text style={styles.cardName}>{item.name}</Text>
                <View style={styles.rating}>
                    <Image source={icons.star} style={styles.cardRating} />
                    <Text style={styles.cardRatingTitle}>{item.rating}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
            data={restaurants}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={styles.wrap}
        />
    );
};

const styles = StyleSheet.create({
    wrap: {
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30
    },
    card: {
        marginBottom: SIZES.padding * 2,
        ...SHADOWS.light
    },
    cardImg: {
        width: '100%',
        height: 200,
        borderRadius: SIZES.radius
    },
    cardTime: {
        position: 'absolute',
        bottom: -1,
        height: 50,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.white,
        borderTopEndRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTimeTitle: {
        ...FONTS.h4
    },
    cardName: {
        ...FONTS.body2,
        marginTop: 15
    },
    rating: {
        marginTop: SIZES.padding,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardRating: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        marginRight: 10
    },
    cardRatingTitle: {
        ...FONTS.body3
    }
});

export default RestList;
