import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function WeeklyChallengesScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'ChallengesMain',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Weekly Challenge
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full p-[30px] bg-lightPurple items-center'>
                    <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                        {/* Workout Image */}
                        <View className="relative">
                            <Image
                                source={require('@/assets/images/misc/plank.png')} // Replace with your actual image
                                className="w-full h-[140px] object-cover"
                            />
                        </View>

                        {/* Workout Details */}
                        <View className="px-[15px] py-[10px]">
                            {/* Stats Row */}
                            <View className='w-full flex flex-row items-center'>
                                <View className='w-[80%] flex-col'>
                                    <Text className="text-limeGreen text-[14px] font-bold mb-[5px]">Cycling Challange</Text>
                                    <View className="w-full flex-row items-center justify-between">
                                        <View className="flex-row items-center">
                                            <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                            <Text className="text-white text-[12px] ml-1">45 Minutes</Text>
                                        </View>

                                        <View className="flex-row items-center">
                                            <MaterialCommunityIcons name="fire" size={15} color='white' />
                                            <Text className="text-white text-[12px] ml-1">70 Kcal</Text>
                                        </View>

                                        <View className="flex-row items-center">
                                            <FontAwesome5 name="walking" size={15} color="white" />
                                            <Text className="text-white text-[12px] ml-1">5 Exercises</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View className='w-full px-[30px] mt-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Round 1</Text>
                    <TouchableOpacity className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'
                        onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'WeeklyChallengeDetails',
                            },
                        })}
                    >
                        <View className="w-[45px] h-[45px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                            <FontAwesome5 name="play" size={22} color="white" />
                        </View>
                        <View className='flex-col w-[50%]'>
                            <Text className='text-[13px] text-black font-bold'>
                                Endurance Ride
                            </Text>
                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                <Text className="text-lightPurple text-[12px] ml-1">10:30</Text>
                            </View>
                        </View>
                        <View className='flex-col w-[40%] justify-end'>
                            <Text className='text-[13px] text-lightPurple font-bold'>
                                Moderate
                            </Text>
                        </View>
                        
                    </TouchableOpacity>
                    <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                        <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                            <FontAwesome5 name="play" size={22} color="white" />
                        </View>
                        <View className='flex-col w-[50%]'>
                            <Text className='text-[13px] text-black font-bold'>
                                Hill Climbs
                            </Text>
                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                <Text className="text-lightPurple text-[12px] ml-1">05:00</Text>
                            </View>
                        </View>
                        <View className='flex-col w-[40%] justify-end'>
                            <Text className='text-[13px] text-lightPurple font-bold'>
                                High
                            </Text>
                        </View>
                        
                    </View>
                    <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                        <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                            <FontAwesome5 name="play" size={22} color="white" />
                        </View>
                        <View className='flex-col w-[50%]'>
                            <Text className='text-[13px] text-black font-bold'>
                                Interval Sprints
                            </Text>
                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                <Text className="text-lightPurple text-[12px] ml-1">07:00</Text>
                            </View>
                        </View>
                        <View className='flex-col w-[40%] justify-end'>
                            <Text className='text-[13px] text-lightPurple font-bold'>
                                High
                            </Text>
                        </View>
                        
                    </View>
                </View>

                <View className='w-full px-[30px] mt-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Round 2</Text>
                    <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                        <View className="w-[45px] h-[45px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                            <FontAwesome5 name="play" size={22} color="white" />
                        </View>
                        <View className='flex-col w-[50%]'>
                            <Text className='text-[13px] text-black font-bold'>
                                Tempo Ride
                            </Text>
                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                <Text className="text-lightPurple text-[12px] ml-1">08:00</Text>
                            </View>
                        </View>
                        <View className='flex-col w-[40%] justify-end'>
                            <Text className='text-[13px] text-lightPurple font-bold'>
                                Moderate
                            </Text>
                        </View>
                        
                    </View>
                    <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                        <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                            <FontAwesome5 name="play" size={22} color="white" />
                        </View>
                        <View className='flex-col w-[50%]'>
                            <Text className='text-[13px] text-black font-bold'>
                                Cadence Drill
                            </Text>
                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                <Text className="text-lightPurple text-[12px] ml-1">06:00</Text>
                            </View>
                        </View>
                        <View className='flex-col w-[40%] justify-end'>
                            <Text className='text-[13px] text-lightPurple font-bold'>
                                Moderate
                            </Text>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
