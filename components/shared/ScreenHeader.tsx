import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

interface HeaderProps {
    title: string,
    backPress: () => void
}

export default function ScreenHeader({title, backPress}: HeaderProps) {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    return (
        <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px]'>
            <Text className='text-[20px] text-lightPurple font-bold'>
                {title}
            </Text>
            <View className='w-[30%] flex-row justify-between items-center'>
                <TouchableOpacity onPress={backPress}
                >
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'Notifications',
                        },
                    })}
                >
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'ProfileMenu',
                        },
                    })}
                >
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
