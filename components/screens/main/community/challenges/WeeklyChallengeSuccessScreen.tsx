import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ChevronLeft } from 'lucide-react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ButtonText from '@/components/shared/ButtonText';


export default function WeeklyChallengeSuccessScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                </TouchableOpacity>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full px-[30px] items-center justify-center mb-[30px]'>
                    <Image
                        source={require('@/assets/icons/trophy.png')}
                        className="h-[320px] w-full"
                    />
                </View>

                <View className='w-full p-[30px] bg-lightPurple items-center'>
                    <Text className='text-[24px] text-black font-bold mb-[10px]'>
                        Congratulations!
                    </Text>
                    <View className='w-full flex-row rounded-[28px] bg-white items-center justify-around p-[10px]'>
                        <View className="flex-col items-center">
                            <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                            <Text className="text-black text-[12px] ml-1">30 Seconds</Text>
                        </View>

                        <View className="flex-col items-center">
                            <MaterialCommunityIcons name="fire" size={15} color='black' />
                            <Text className="text-black text-[12px] ml-1">3 Rep</Text>
                        </View>

                        <View className="flex-col items-center">
                            <FontAwesome5 name="walking" size={15} color="black" />
                            <Text className="text-black text-[12px] ml-1">Advanced</Text>
                        </View>
                    </View>
                </View>

                <View className='w-full items-center mt-[40px]'>
                    <ButtonText buttonText='Next Workout' variant='other' onClick={() => {}}/>
                    <ButtonText buttonText='Home' onClick={() => {}}/>
                </View>
            </ScrollView>
        </View>
    )
}
