import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { RootStackParamList } from '@/types/navigation';
import ResourcesTabNavigator from './tab-navigators/ResourcesTabNavigator';
import FavoritesTabNavigator from './tab-navigators/ArticlesTabNavigator';
import HelpTabNavigator from './tab-navigators/HelpTabNavigator';
import DashboardNavigator from './DashboardNavigator';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
    
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                const iconColor = focused ? '#FFFFFF' : '#CCC';
                const iconSize = 30;
        
                switch (route.name) {
                    case 'HomeTab':
                    return <Entypo name="home" size={iconSize} color={iconColor} />;
                    case 'ResourcesTab':
                    return <MaterialIcons name="article" size={iconSize} color={iconColor} />;
                    case 'FavoritesTab':
                    return <AntDesign name="star" size={iconSize} color={iconColor} />;
                    case 'HelpTab':
                    return <AntDesign name="customerservice" size={iconSize} color={iconColor} />;
                    default:
                    return null;
                }
                },
                // tabBarLabel: ({ focused }) => (
                // <Text style={{
                //     color: focused ? '#234791' : '#CCC',
                //     fontSize: 11,
                //     paddingTop: 0,
                // }}>
                //     {route.name}
                // </Text>
                // ),
                // tabBarInactiveBackgroundColor: '#FFFFFF',
                tabBarStyle: {
                backgroundColor: '#B3A0FF',
                position: 'relative',
                height: 65,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                paddingTop: 10,
                },
                tabBarItemStyle: {
                paddingVertical: 0,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomeTab" component={DashboardNavigator} />
            <Tab.Screen name="ResourcesTab" component={ResourcesTabNavigator} />
            <Tab.Screen name="FavoritesTab" component={FavoritesTabNavigator} />
            <Tab.Screen name="HelpTab" component={HelpTabNavigator} />
        </Tab.Navigator>
    )
}

export default TabNavigator