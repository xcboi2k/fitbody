import React, { useEffect, useRef, useState } from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'

import OnboardingButton from '@/components/shared/OnboardingButton'

export default function ActivityLevelScreen() {
    const [selectedLevel, setSelectedLevel] = useState('')

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
                    <TouchableOpacity 
                        className={`w-full rounded-[35px] ${selectedLevel === 'Beginner' ? 'bg-limeGreen' : 'bg-white'} p-[12px] mb-[20px]`} 
                        onPress={() => setSelectedLevel('Beginner')}
                    >
                        <Text className={`text-[24px] text-center ${selectedLevel === 'Beginner' ? 'text-black' : 'text-lightPurple'}`}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-full rounded-[35px] ${selectedLevel === 'Intermediate' ? 'bg-limeGreen' : 'bg-white'} p-[12px] mb-[20px]`} 
                        onPress={() => setSelectedLevel('Intermediate')}
                    >
                        <Text className={`text-[24px] text-center ${selectedLevel === 'Intermediate' ? 'text-black' : 'text-lightPurple'}`}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-full rounded-[35px] ${selectedLevel === 'Advanced' ? 'bg-limeGreen' : 'bg-white'} p-[12px]`} 
                        onPress={() => setSelectedLevel('Advanced')}
                    >
                        <Text className={`text-[24px] text-center ${selectedLevel === 'Advanced' ? 'text-black' : 'text-lightPurple'}`}>Advanced</Text>
                    </TouchableOpacity>
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    )
}
