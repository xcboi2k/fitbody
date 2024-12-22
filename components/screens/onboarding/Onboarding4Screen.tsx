import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { Play } from 'lucide-react-native'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function Onboarding4Screen() {
    return (
        <ImageBackground source={require('@/assets/images/onboarding/onboarding-image-4.png')} 
            style={{ flex: 1 }} resizeMode="stretch">
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', opacity: 0.5 }} />
            <View className='flex-1 items-center justify-center'>
                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <Image source={require('@/assets/icons/community-icon.png')} style={{ width: '30%', height: undefined, aspectRatio: 2, marginBottom: 15 }} resizeMode="contain" />
                    <Text className='text-white text-[20px] font-bold text-center mb-[15px]'>A Community For You,{'\n'}Challenge Yourself</Text>
                    <View className='w-full flex-row items-center justify-center'>
                        <View className='w-[20px] h-[4px] rounded-[12px] bg-purple mr-[5px]'/>
                        <View className='w-[20px] h-[4px] rounded-[12px] bg-purple mr-[5px]'/>
                        <View className='w-[20px] h-[4px] rounded-[12px] bg-white'/>
                    </View>
                </View>
                <OnboardingButton buttonText='Get Started' onClick={() => {}}/>
            </View>
        </ImageBackground>
    )
}
