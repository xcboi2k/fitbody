import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome5';

interface Workout {
    id: number;
    name: string;
    duration: string;
    reps: string;
    image: any;
    completed: boolean;
    isFavorite: boolean;
}

const workouts: Workout[] = [
    { id: 1, name: "Barbell Rows", duration: "10 Minutes", reps: "3 Rep", image: require('@/assets/images/misc/squats.png'), completed: true, isFavorite: false },
    { id: 2, name: "Hammer Curls", duration: "12 Minutes", reps: "4 Rep", image: require('@/assets/images/misc/squats.png'), completed: false, isFavorite: true },
    { id: 3, name: "Deadlifts", duration: "15 Minutes", reps: "5 Rep", image: require('@/assets/images/misc/squats.png'), completed: true, isFavorite: false },
    { id: 4, name: "Push Ups", duration: "8 Minutes", reps: "3 Rep", image: require('@/assets/images/misc/squats.png'), completed: false, isFavorite: true },
];

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    return arr.reduce<T[][]>((acc, _, i) => 
        (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
};

export default function RecommendationsMainScreen() {
    const workoutPairs: Workout[][] = chunkArray(workouts, 2); // Split into pairs

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Recommendations
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <View className="bg-black w-full h-[310px] rounded-[20px] overflow-hidden">
                        {/* Workout Image */}
                        <View className="relative">
                            <Image
                                source={require('@/assets/images/misc/plank.png')} // Replace with your actual image
                                className="w-full h-[250px] object-cover"
                            />
                            <View className="absolute top-2 right-2 bg-limeGreen px-3 py-1 rounded-full">
                                <Text className="text-black text-[12px] font-bold">Dumbbell Step Up</Text>
                            </View>
                        </View>

                        {/* Workout Details */}
                        <View className="px-[15px] py-[10px]">
                            {/* Stats Row */}
                            <View className='w-full flex flex-row items-center'>
                                <View className='w-[80%] flex-col'>
                                    <View className="w-full flex-row items-center justify-between">
                                        <View className='w-[90%] flex-col'>
                                            <View className="w-full flex-row items-center">
                                                <View className="flex-row items-center mr-[10px]">
                                                    <MaterialCommunityIcons name="clock-time-eight" size={12} color='white' />
                                                    <Text className="text-white text-[12px] ml-1">15 Minutes</Text>
                                                </View>

                                                <View className="flex-row items-center">
                                                    <MaterialCommunityIcons name="fire" size={15} color='white' />
                                                    <Text className="text-white text-[12px] ml-1">100 Kcal</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View className="w-[35%] flex-row items-center justify-end">
                                            <AntDesign name="star" size={35} color="white" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View className='w-full px-[30px]'>
                    {workoutPairs.map((pair, index) => (
                        <View key={index} className='flex-row justify-between items-center mb-[20px]'>
                            {pair.map((workout) => (
                                <View key={workout.id} className="w-[48%] border border-white rounded-[12px] p-2">
                                    {/* Workout Image */}
                                    <View className="relative">
                                        <Image source={workout.image} className="h-40 w-full rounded-t-lg" />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} 
                                                color={workout.isFavorite ? "#E2F163" : "white"} 
                                            />
                                        </View>
                                    </View>
                                    
                                    {/* Workout Details */}
                                    <View className="w-[98%] mt-4">
                                        <View className="flex-row items-center justify-between">
                                            {/* Workout Name */}
                                            <Text className="text-limeGreen text-[16px]">{workout.name}</Text>

                                            {/* Status Icon (Check or Plus) */}
                                            <View className={`w-[20px] h-[20px] rounded-full bg-lightPurple items-center justify-center`}>
                                                <FontAwesome6 name="play" size={10} color="white" />
                                            </View>
                                        </View>

                                        <View className="flex-row items-center justify-between mt-2">
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="clock-time-eight" size={20} color='#B3A0FF' />
                                                <Text className="text-white text-[10px] ml-[2px]">{workout.duration}</Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={24} color='#B3A0FF' />
                                                <Text className="text-white text-[10px] ml-[2px]">{workout.reps}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
