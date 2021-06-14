import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/screens/Home';
import Restaurants from './app/screens/Restaurants';
import Order from './app/screens/Order';
import Tabs from './app/navigation/Tabs';

const Stack = createStackNavigator();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name='Home' component={Tabs} />
                <Stack.Screen name='Restaurants' component={Restaurants} />
                <Stack.Screen name='Order' component={Order} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
