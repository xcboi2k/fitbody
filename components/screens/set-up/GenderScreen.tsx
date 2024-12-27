import React, { useState } from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function GenderScreen() {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

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
                        What's Your Gender 
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] bg-lightPurple items-center mb-[50px]'>
                    <Text className='text-[14px] text-black text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[50px] mb-[30px] flex items-center justify-center'>
                    <View className='mb-[20px] flex items-center justify-center'>
                        <View 
                            className={`w-[165px] h-[165px] p-[20px] rounded-full border ${selectedGender === 'male' ? 'bg-limeGreen border-limeGreen' : 'bg-black border-white'} items-center justify-center mb-[15px]`} 
                            onTouchEnd={() => setSelectedGender('male')}
                        >
                            <Ionicons name="male" size={90} color={selectedGender === 'male' ? 'black' : 'white'} />
                        </View>
                        <Text className='text-[20px] text-white font-bold mb-[20px]'>
                            Male
                        </Text>
                    </View>
                    <View className='mb-[10px] flex items-center justify-center'>
                        <View 
                            className={`w-[165px] h-[165px] p-[20px] rounded-full border ${selectedGender === 'female' ? 'bg-limeGreen border-limeGreen' : 'bg-black border-white'} items-center justify-center mb-[15px]`} 
                            onTouchEnd={() => setSelectedGender('female')}
                        >
                            <Ionicons name="female-sharp" size={90} color={selectedGender === 'female' ? 'black' : 'white'} />
                        </View>
                        <Text className='text-[20px] text-white font-bold'>
                            Female
                        </Text>
                    </View>
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    )
}