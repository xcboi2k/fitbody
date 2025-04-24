import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import OnboardingButton from '@/components/shared/OnboardingButton'
import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function GoalScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    const goal = [
        { label: 'Lose Weight', value: 'Lose Weight' },
        { label: 'Gain Weight', value: 'Gain Weight' },
        { label: 'Muscle Mass Gain', value: 'Muscle Mass Gain' },
        { label: 'Shape Body', value: 'Shape Body' },
        { label: 'Others', value: 'Others' },
    ];

    const [selectedGoal, setSelectedGoal] = useState('')
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <TouchableOpacity className='flex-row' onPress={() => navigation.navigate('SetUp', {screen: 'SetHeight'})}>
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
                        What Is Your Goal?
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] items-center mb-[30px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[30px] py-[20px] items-center bg-lightPurple mb-[50px]'>
                    {
                        goal.map((item) => (
                            <TouchableOpacity 
                                key={item.value} 
                                className='w-full flex flex-row items-center mb-[15px] bg-white rounded-[36px] p-[20px]'
                                onPress={() => setSelectedGoal(item.value)}
                            >
                                {/* Text Label */}
                                <Text className="text-black ml-2 text-[14px]">{item.label}</Text>
                                {/* Circle Icon */}
                                <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-black ml-auto`}>
                                    {selectedGoal === item.value && (
                                        <View className="h-3 w-3 rounded-full bg-limeGreen" />
                                    )}
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => navigation.navigate('SetUp', {screen: 'SetActivityLevel'})} />
                </View>
            </ScrollView>
        </View>
    )
}
