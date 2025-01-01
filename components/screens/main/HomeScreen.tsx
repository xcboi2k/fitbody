import React, { useState, useRef, useEffect } from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ClipboardList, Dumbbell } from 'lucide-react-native';

export default function HomeScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px]'>
                <Text className='text-[20px] text-lightPurple font-bold'>
                    Hi, User
                </Text>
                <View className='w-[30%] flex-row justify-between items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>
            <View className='w-full px-[30px]'>
                <Text className='text-[13px] text-white'>
                    It's time to challenge your limits.
                </Text>
            </View>
            <View className='w-full flex-row justify-between items-center mb-[25px]'>
                <View className='flex items-center p-[20px]'>
                    <Dumbbell size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Workout</Text>
                </View>
                <View className='h-[60px] border-l border-[#B3A0FF]' />
                <View className='flex items-center p-[20px]'>
                    <FontAwesome5 name="clipboard-list" size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Progress Tracking</Text>
                </View>
                <View className='h-[60px] border-l border-[#B3A0FF]' />
                <View className='flex items-center p-[20px]'>
                    <Ionicons name="nutrition" size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Nutrition</Text>
                </View>
                <View className='h-[60px] border-l border-[#B3A0FF]' />
                <View className='flex items-center p-[20px]'>
                    <FontAwesome name="group" size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Community</Text>
                </View>
            </View>
            <ScrollView>
                
            </ScrollView>
        </View>
    )
}
