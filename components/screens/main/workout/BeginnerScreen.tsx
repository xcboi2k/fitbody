import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function BeginnerScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    const round1 = [
        { 
            id: 1,
            title: "Dumbbell Rows",
            time: "00:30",
            repetition: "3x",
            bgColor: "bg-lightPurple",
        },
        { 
            id: 2,
            title: "Russian Twists",
            time: "00:15",
            repetition: "2x",
            bgColor: "bg-limeGreen",
        },
        { 
            id: 3,
            title: "Squats",
            time: "00:30",
            repetition: "3x",
            bgColor: "bg-limeGreen",
        },
    ];

    const round2 = [
        { 
            id: 1,
            title: "Tabata Intervals",
            time: "00:10",
            repetition: "2x",
            bgColor: "bg-lightPurple",
        },
        { 
            id: 2,
            title: "Bicycle Crunches",
            time: "00:15",
            repetition: "4x",
            bgColor: "bg-limeGreen",
        },
    ];

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'Workout',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Beginner
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
                    <View className="bg-black w-full h-[180px] rounded-[20px] overflow-hidden">
                        {/* Workout Image */}
                        <View className="relative">
                            <Image
                                source={require('../../../../assets/images/misc/plank.png')} // Replace with your actual image
                                className="w-full h-[140px] object-cover"
                            />
                            <View className="absolute top-2 right-2 bg-limeGreen px-3 py-1 rounded-full">
                                <Text className="text-black text-[12px] font-bold">Functional Training</Text>
                            </View>
                        </View>

                        {/* Workout Details */}
                        <View className="px-[15px] py-[10px]">
                            {/* Stats Row */}
                            <View className='w-full flex flex-row items-center'>
                                <View className='w-[80%] flex-col'>
                                    <View className="w-full flex-row items-center justify-between">
                                        <View className="flex-row items-center">
                                            <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                            <Text className="text-white text-[12px] ml-1">45 Minutes</Text>
                                        </View>

                                        <View className="flex-row items-center">
                                            <MaterialCommunityIcons name="fire" size={15} color='white' />
                                            <Text className="text-white text-[12px] ml-1">1450 Kcal</Text>
                                        </View>

                                        <View className="flex-row items-center">
                                            <FontAwesome5 name="walking" size={15} color="white" />
                                            <Text className="text-white text-[12px] ml-1">Beginner</Text>
                                        </View>
                                    </View>
                                </View>
                                <View className="w-[20%] flex-row items-center justify-end">
                                    <AntDesign name="star" size={20} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View className='w-full px-[30px] mt-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Round 1</Text>
                    {round1.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            className="w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]"
                            onPress={() => navigation.navigate('AuthenticatedScreens', {
                                screen: 'User',
                                params: {
                                    screen: 'WorkoutBeginnerRoutine',
                                },
                            })}
                        >
                            <View className={`w-[45px] h-[45px] rounded-full ${item.bgColor} items-center justify-center p-[5px] mr-[10px]`}>
                                <FontAwesome5 name="play" size={22} color="white" />
                            </View>
                            <View className="flex-col w-[50%]">
                                <Text className="text-[13px] text-black font-bold">{item.title}</Text>
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="clock-time-eight" size={15} color="#B3A0FF" />
                                    <Text className="text-lightPurple text-[12px] ml-1">{item.time}</Text>
                                </View>
                            </View>
                            <View className="flex-col w-[40%] justify-end">
                                <Text className="text-[13px] text-lightPurple font-bold">
                                    Repetition {item.repetition}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <View className='w-full px-[30px] mt-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Round 2</Text>
                    {round2.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            className="w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]"
                            onPress={() => navigation.navigate('AuthenticatedScreens', {
                                screen: 'User',
                                params: {
                                    screen: 'WorkoutBeginnerRoutine',
                                },
                            })}
                        >
                            <View className={`w-[45px] h-[45px] rounded-full ${item.bgColor} items-center justify-center p-[5px] mr-[10px]`}>
                                <FontAwesome5 name="play" size={22} color="white" />
                            </View>
                            <View className="flex-col w-[50%]">
                                <Text className="text-[13px] text-black font-bold">{item.title}</Text>
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="clock-time-eight" size={15} color="#B3A0FF" />
                                    <Text className="text-lightPurple text-[12px] ml-1">{item.time}</Text>
                                </View>
                            </View>
                            <View className="flex-col w-[40%] justify-end">
                                <Text className="text-[13px] text-lightPurple font-bold">
                                    Repetition {item.repetition}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
