import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Play } from 'lucide-react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function ChallengesMainScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    return (
        <ImageBackground source={require('@/assets/images/misc/challenge-1.jpg')} style={{ flex: 1 }} resizeMode="cover">
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', opacity: 0.5 }} />
            <View className="relative w-full px-[30px] mt-[50px] mb-[20px]">
                {/* Header (Nutrition + Icons) */}
                <View className="flex-row w-full justify-between items-center">
                    <TouchableOpacity className="flex-row items-center"
                        onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'Community',
                            },
                        })}
                    >
                        <ChevronLeft size={20} color='white' />
                    </TouchableOpacity>
                    <View className="w-[20%] flex-row justify-around items-center">
                        <MaterialIcons name="notifications" size={25} color='white' />
                        <FontAwesome name="user" size={24} color='white' />
                    </View>
                </View>
            </View>
            <View className='flex-1 items-center justify-center'>
                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <View className='w-full flex-row items-center justify-center mb-[15px]'>
                        <Image source={require('@/assets/icons/workout-icon.png')} style={{ width: '20%', height: undefined, aspectRatio: 2}} resizeMode="contain" />
                        <Text className='text-white text-[20px] font-bold text-center'>Challenges</Text>
                    </View>
                    
                    <View className='w-full flex-row items-center justify-center'>
                        <Text className='text-[14px] text-black text-center mb-[15px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
                        </Text>
                    </View>
                </View>
                <OnboardingButton buttonText='Start Now' onClick={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'WeeklyChallenges',
                        },
                    })}
                />
            </View>
        </ImageBackground>
    )
}
