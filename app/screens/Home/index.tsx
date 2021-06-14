import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../../constants';
import { homeData } from './homeData';
import Header from './Header';
import Categories from './Categories';
import RestList from './RestList';

const Home = (): JSX.Element | null => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [restaurants, setRestaurants] = useState(homeData.restaurantData);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Categories
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                restaurants={restaurants}
                setRestaurants={setRestaurants}
            />
            <RestList restaurants={restaurants} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
});

export default Home;
