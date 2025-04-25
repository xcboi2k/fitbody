import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ChevronLeft, ChevronRight, ClipboardList, Dumbbell, MapPin } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px]'>
                <Text className='text-[20px] text-lightPurple font-bold'>
                    Hi, User
                </Text>
                <View className='w-[30%] flex-row justify-between items-center'>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'Search',
                            },
                        })}
                    >
                        <FontAwesome name="search" size={23} color='#B3A0FF' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'Notifications',
                            },
                        })}
                    >
                        <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'ProfileMenu',
                            },
                        })}
                    >
                        <FontAwesome name="user" size={24} color='#B3A0FF' />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='w-full px-[30px]'>
                <Text className='text-[13px] text-white'>
                    It's time to challenge your limits.
                </Text>
            </View>
            <View className='w-full flex-row justify-between items-center mb-[5px] px-[30px]'>
                <TouchableOpacity className='flex items-center p-[20px]' 
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'Workout',
                        },
                    })}
                >
                    <Dumbbell size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Workout</Text>
                </TouchableOpacity >
                <View className='h-[60px] border-l border-[#B3A0FF]' />
                <TouchableOpacity  className='flex items-center p-[20px]'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'ProgressTracking',
                        },
                    })}
                >
                    <FontAwesome5 name="clipboard-list" size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Progress{'\n'}Tracking</Text>
                </TouchableOpacity >
                <View className='h-[60px] border-l border-[#B3A0FF]' />
                <TouchableOpacity  className='flex items-center p-[20px]'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'Nutrition',
                        },
                    })}
                >
                    <Ionicons name="nutrition" size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Nutrition</Text>
                </TouchableOpacity >
                <View className='h-[60px] border-l border-[#B3A0FF]' />
                <TouchableOpacity  className='flex items-center p-[20px]'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'Community',
                        },
                    })}
                >
                    <FontAwesome name="group" size={40} color='#B3A0FF' />
                    <Text className='text-lightPurple text-[12px] mt-[5px]'>Community</Text>
                </TouchableOpacity >
            </View>
            <ScrollView>
                <View className='flex-row w-full px-[30px] justify-between items-center mb-[10px]'>
                    <Text className='text-[15px] text-limeGreen'>
                        Recommendations
                    </Text>
                    <TouchableOpacity className='flex-row'
                        onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'RecommendationsMain',
                            },
                        })}
                    >
                        <Text className='text-[12px] text-white mr-[5px]'>
                            See All
                        </Text>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </TouchableOpacity>
                </View>
                <View className='flex-row w-full px-[30px] justify-between items-center mb-[10px]'>
                    <View className="w-[48%] border border-white rounded-[12px] p-2 mb-[20px]"
                        // key={bookmark.id}
                    >
                        {/* Event Image */}
                        <View className="relative">
                            <Image
                                source={require('@/assets/images/misc/squats.png')}
                                className="h-40 w-full rounded-t-lg p-0"
                            />
                            <View className="absolute top-2 right-2">
                                <AntDesign name="star" size={24} color="#E2F163" />
                            </View>
                        </View>
                        <View className="mt-4">
                            <View className='flex-row justify-between items-start mb-[10px] w-full'>
                                <Text className="text-limeGreen text-[16px]">Squat Exercise</Text>
                            </View>
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="clock-time-eight" size={20} color='#B3A0FF' />
                                    <Text className="text-white text-[10px] ml-[2px]">
                                        12 Minutes
                                    </Text>
                                </View>
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="fire" size={24} color='#B3A0FF' />
                                    <Text className="text-white text-[10px] ml-[2px]">
                                        120 KCal
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="w-[48%] border border-white rounded-[12px] p-2 mb-[20px]"
                        // key={bookmark.id}
                    >
                        {/* Event Image */}
                        <View className="relative">
                            <Image
                                source={require('@/assets/images/misc/full-body-stretching.jpg')}
                                className="h-40 w-full rounded-t-lg p-0"
                            />
                            <View className="absolute top-2 right-2">
                                <AntDesign name="star" size={24} color="white" />
                            </View>
                        </View>
                        <View className="mt-4">
                            <View className='flex-row justify-between items-start mb-[10px] w-full'>
                                <Text className="text-limeGreen text-[16px]">Full Body Stretching</Text>
                            </View>
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="clock-time-eight" size={20} color='#B3A0FF' />
                                    <Text className="text-white text-[10px] ml-[2px]">
                                        12 Minutes
                                    </Text>
                                </View>
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="fire" size={24} color='#B3A0FF' />
                                    <Text className="text-white text-[10px] ml-[2px]">
                                        120 KCal
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <View className="bg-black h-[125px] w-full rounded-[20px] overflow-hidden flex-row items-center">
                        {/* Left Side: Text Content */}
                        <View className="flex-1 px-4">
                            <Text className="text-limeGreen text-[24px] text-center font-bold">Weekly Challenge</Text>
                            <Text className="text-white text-[12px] text-center mt-2">Plank With Hip Twist</Text>
                        </View>

                        {/* Right Side: Image */}
                        <View className="rounded-[20px] overflow-hidden h-full w-1/2">
                            <Image
                                source={require('@/assets/images/misc/plank.png')}
                                className="h-full w-full object-cover"
                            />
                        </View>
                    </View>
                </View>
                <View className='flex-row w-full px-[30px] justify-between items-center mb-[10px]'>
                    <Text className='text-[15px] text-limeGreen'>
                        Articles and Tips
                    </Text>
                    <TouchableOpacity className='flex-row'
                        onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'ResourcesMain',
                            },
                        })}
                    >
                        <Text className='text-[12px] text-white mr-[5px]'>
                            See All
                        </Text>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </TouchableOpacity>
                </View>
                <View className='flex-row w-full px-[30px] justify-between mb-[20px]'>
                    <View className="w-[48%]"
                        // key={bookmark.id}
                    >
                        <View className="relative">
                            <Image
                                source={require('@/assets/images/misc/eating.jpg')}
                                className="h-40 rounded-[20px] w-full p-0"
                            />
                            <View className="absolute top-2 right-2">
                                <AntDesign name="star" size={24} color="#E2F163" />
                            </View>
                        </View>
                        <Text className="text-white text-[12px] mt-[5px] ml-[10px]">
                            Supplement Guide...
                        </Text>
                    </View>
                    <View className="w-[48%]"
                        // key={bookmark.id}
                    >
                        <View className="relative">
                            <Image
                                source={require('@/assets/images/misc/routine.jpg')}
                                className="h-40 rounded-[20px] w-full p-0"
                            />
                            <View className="absolute top-2 right-2">
                                <AntDesign name="star" size={24} color="white" />
                            </View>
                        </View>
                        <Text className="text-white text-[12px] mt-[5px] ml-[10px]">
                            15 Quick & Effective Daily Routines...
                        </Text>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}
