import React, { useEffect, useRef, useState } from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'

import OnboardingButton from '@/components/shared/OnboardingButton'

export default function SetProfileScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <TouchableOpacity className='flex-row'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[15px] text-limeGreen ml-[5px]'>
                        Back
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
                    <Text className='text-[25px] text-white font-bold mb-[20px]'>
                        Physical Activity Level
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] items-center mb-[30px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[30px] py-[20px] items-center mb-[50px]'>
                    
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    )
}
