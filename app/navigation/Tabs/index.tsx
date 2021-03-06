import React, { FC } from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { COLORS } from '../../constants';
import PropTypes from 'prop-types';
import tabs from '../tabsData';
import Home from '../../screens/Home';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';

interface ITabBarCustomButton {
    accessibilityState?: any;
    onPress?: any;
    children?: any;
}

const TabBarCustomButton = ({ accessibilityState, children, onPress }: ITabBarCustomButton): JSX.Element => {
    const isSelected = accessibilityState.selected;
    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                    <Svg width={75} height={61} viewBox='0 0 75 61'>
                        <Path
                            d='M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z'
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        );
    }
};

interface ICustomTabBar {
    props?: any;
}

const CustomTabBar: FC<ICustomTabBar> = (props) => {
    return isIphoneX() ? (
        <View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 30,
                    backgroundColor: COLORS.white
                }}
            />
            <BottomTabBar {...props.props} />
        </View>
    ) : (
        <BottomTabBar {...props.props} />
    );
};

CustomTabBar.propTypes = {
    props: PropTypes.any
};

const Tabs: React.FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: { borderTopWidth: 0, backgroundColor: 'transparent', elevation: 0 }
            }}
            tabBar={(props) => {
                return <CustomTabBar props={props} />;
            }}
        >
            {tabs.map((tab) => (
                <Tab.Screen
                    name={tab.name}
                    key={tab.id}
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused: focused }) => (
                            <Image
                                source={tab.image}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary
                                }}
                            />
                        ),
                        tabBarButton: (props) => {
                            return <TabBarCustomButton {...props} />;
                        }
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default Tabs;

Tabs.propTypes = {
    focused: PropTypes.object
};
