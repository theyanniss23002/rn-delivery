import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { homeData } from './homeData';
import { useFonts } from 'expo-font';

const Header = (): JSX.Element | null => {
    const [currentLocation, setCurrentLocation] = useState(homeData.initialCurrentLocation);
    const [loaded] = useFonts({
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf')
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity style={styles.location}>
                <Image source={icons.nearby} resizeMode='contain' style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
            <View style={styles.address}>
                <View style={styles.addressWrap}>
                    <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.basket}>
                <Image source={icons.basket} resizeMode='contain' style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    location: {
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: 'center'
    },
    basket: {
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center'
    },
    address: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addressWrap: {
        width: '70%',
        height: '100%',
        backgroundColor: COLORS.lightGray3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius
    }
});

export default Header;
