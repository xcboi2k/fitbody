import React from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function SetFingerprintScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <TouchableOpacity>
                    <ChevronLeft size={20} color={'#E2F163'} />
                </TouchableOpacity>
                <Text className='text-[20px] text-limeGreen font-bold'>
                    Set Your Fingerprint
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] bg-lightPurple items-center mb-[50px]'>
                    <Entypo name="fingerprint" size={250} color='white'/>
                </View>
                <View className='w-full px-[30px] items-center mb-[10px]'>
                    <OnboardingButton buttonText='Skip' onClick={() => {}} />
                </View>
                <View className='w-full px-[30px] items-center mb-[10px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    )
}
