import React, { useState } from 'react'
import { Image, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ChevronDown, ChevronLeft } from 'lucide-react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HelpDetailsScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[15px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        type of help
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <View className='w-full flex flex-col items-center mb-[10px] px-[30px]'>
                <View className='w-full flex-row justify-center items-center mb-[15px]'>
                    <Text className={`text-[20px] text-center text-white`}>How Can We Help You?</Text>
                </View>
            </View>
            <View className='w-full flex-col items-center mb-[30px] px-[30px] mt-[10px]'>
                <View className='flex-row w-full items-center justify-between border-t border-b border-[#E2F163]'>
                    <View className='flex-col w-[70%] py-[30px]'>
                        <Text className='text-[18px] text-white'>
                            How can we help you?
                        </Text>
                        <Text className='text-[14px] text-white'>
                            Support
                        </Text>
                    </View>
                    <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                </View>
                <View className='flex-row w-full items-center justify-between border-b border-[#E2F163]'>
                    <View className='flex-col w-[70%] py-[30px]'>
                        <Text className='text-[18px] text-white'>
                            Help Center
                        </Text>
                        <Text className='text-[14px] text-white'>
                            General Information
                        </Text>
                    </View>
                    <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                </View>
            </View>
        </View>
    )
}
