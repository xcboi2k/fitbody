import React from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function SetUpScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <Image source={require('@/assets/images/setup/setup-image-1.png')} style={{ height: '60%', width: '100%' }} resizeMode="stretch" />
            <ScrollView className='mt-[20px]'>
                <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
                    <Text className='text-[30px] text-limeGreen text-center mb-[15px]'>
                        Consistency is{'\n'}The Key To progress.{'\n'}Don't Give Up! 
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] bg-lightPurple items-center mb-[50px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Next' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    )
}
