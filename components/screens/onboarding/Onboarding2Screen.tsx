import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { Play } from 'lucide-react-native'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function Onboarding2Screen() {
    return (
        <ImageBackground source={require('@/assets/images/onboarding/onboarding-image-2.png')} style={{ flex: 1 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', opacity: 0.5 }} />
            <View className='flex-1 items-center justify-center'>
                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <Image source={require('@/assets/icons/workout-icon.png')} style={{ width: '30%', height: undefined, aspectRatio: 2, marginBottom: 15 }} resizeMode="contain" />
                    <Text className='text-white text-[20px] font-bold text-center mb-[15px]'>Start Your Journey Towards A{'\n'}More Active Lifestyle</Text>
                    <View className='w-full flex-row items-center justify-center'>
                        <View className='w-[20px] h-[4px] rounded-[12px] bg-white mr-[5px]'/>
                        <View className='w-[20px] h-[4px] rounded-[12px] bg-purple mr-[5px]'/>
                        <View className='w-[20px] h-[4px] rounded-[12px] bg-purple'/>
                    </View>
                </View>
                <OnboardingButton buttonText='Next' onClick={() => {}}/>
                <View className='absolute top-[40px] right-[20px] flex-row items-center'>
                    <Text className='text-[12px] text-limeGreen mr-[5px]' onPress={() => { /* Handle skip action */ }}>
                        Skip
                    </Text>
                    <Play size={15} color={'#E2F163'}/>
                </View>
            </View>
        </ImageBackground>
    )
}
