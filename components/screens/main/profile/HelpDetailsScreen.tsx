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
        </View>
    )
}
