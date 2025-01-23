import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SettingsScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[15px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Settings
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full p-[30px] items-center mb-[20px]'>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <MaterialIcons name="notifications" size={24} color='white' />
                            </View>
                            <Text className='text-[18px] text-white'>
                                Notification Setting
                            </Text>
                        </View>
                        <ChevronDown size={20} color={'#E2F163'} />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <Ionicons name="key" size={24} color="white" />
                            </View>
                            <Text className='text-[18px] text-white'>
                                Password Setting
                            </Text>
                        </View>
                        <ChevronDown size={20} color={'#E2F163'} />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <FontAwesome name="user" size={24} color='white' />
                            </View>
                            <Text className='text-[18px] text-white'>
                                Delete Account
                            </Text>
                        </View>
                        <ChevronDown size={20} color={'#E2F163'} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
