import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function CommunityMainScreen() {
    const [selected, setSelected] = useState('Discussion Forum');

    const strengthTrainingDiscussions = [
        {
            title: 'Strength Training Techniques',
            description: 'Discussion on training methods',
            time: 'Today 17:05',
        },
        {
            title: 'Progressive Overload Tips',
            description: 'How to gradually increase resistance for muscle growth',
            time: 'Yesterday 14:30',
        },
        {
            title: 'Proper Squat Form',
            description: 'Avoid injuries with correct squatting techniques',
            time: 'Mar 5, 12:15',
        },
        {
            title: 'Deadlift Mistakes to Avoid',
            description: 'Common errors and how to fix them',
            time: 'Mar 4, 18:50',
        },
        {
            title: 'Building Strength Without Weights',
            description: 'Bodyweight exercises for strength gains',
            time: 'Mar 3, 09:45',
        },
    ];

    const fitnessChallenges = [
        {
            id: 1,
            title: "30-Day Squat Challenge",
            description: "Increase lower body strength and endurance with a progressive squat challenge.",
        },
        {
            id: 2,
            title: "Plank Endurance Challenge",
            description: "Test your core strength by holding a plank for increasing durations daily.",
        },
        {
            id: 3,
            title: "10K Running Competition",
            description: "Compete with runners worldwide to complete a 10-kilometer run in the best time.",
        },
        {
            id: 4,
            title: "Push-Up Strength Challenge",
            description: "Build upper body endurance by completing a set number of push-ups daily.",
        },
        {
            id: 5,
            title: "Cycling Marathon",
            description: "Participate in a long-distance cycling event and test your stamina.",
        }
    ];

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Community
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full flex-row justify-between items-center mb-[20px] px-[30px]'>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[25px] ${selected === 'Discussion Forum' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                        onPress={() => setSelected('Discussion Forum')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Discussion Forum' ? 'text-black' : 'text-lightPurple'}`}>Discussion Forum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[25px] ${selected === 'Challenges' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                        onPress={() => setSelected('Challenges')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Challenges' ? 'text-black' : 'text-lightPurple'}`}>Challenges</Text>
                    </TouchableOpacity>
                </View>

                {
                    selected == 'Discussion Forum' ? (
                        <>
                            <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                                <View className="bg-black w-full h-[310px] rounded-[20px] overflow-hidden">
                                    {/* Workout Image */}
                                    <View className="relative">
                                        <Image
                                            source={require('@/assets/images/misc/plank.png')} // Replace with your actual image
                                            className="w-full h-[250px] object-cover"
                                        />
                                    </View>
                                    {/* Workout Details */}
                                    <View className="px-[15px] py-[10px]">
                                        {/* Stats Row */}
                                        <View className='w-full flex flex-row items-center'>
                                            <View className='w-[80%] flex-col'>
                                                <Text className="text-limeGreen text-[14px] font-bold mb-[5px]">Cycling Challenge</Text>
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
                                            <View className="w-[20%] flex-row items-center justify-end">
                                                <AntDesign name="star" size={35} color="white" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View className='w-full px-[30px] mb-[20px]'>
                                <Text className="text-limeGreen text-[20px] mb-[10px]">Forums</Text>
                                <View className="w-full bg-purple rounded-[10px] p-[10px] mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    {
                                        strengthTrainingDiscussions.map((item, index) => (
                                            <View className='w-full flex-col border-b border-white mb-[10px]' key={index}>
                                                <View className='w-full flex flex-row justify-between'>
                                                    <Text className="text-white text-[14px] font-bold">{item.title}</Text>
                                                    <TouchableOpacity>
                                                        <Text className="text-white text-[14px] font-bold text-right ml-auto">See All</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View className='w-full flex flex-row justify-between mb-[20px]'>
                                                    <Text className="w-[60%] text-white text-[13px]">{item.description}</Text>
                                                    <Text className="text-white text-[13px]text-right ml-auto">{item.time}</Text>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                        </>
                    ) : (
                        <View className='w-full px-[30px] mb-[20px]'>
                            <Text className="text-limeGreen text-[20px] mb-[10px]">Challenges and Competitions</Text>
                            {fitnessChallenges.map((challenge) => (
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    key={challenge.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[10px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">{challenge.title}</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <Text className="text-black text-[13px]">{challenge.description}</Text>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/squats.png')}
                                            className="h-40 w-full rounded-[20px] p-0"
                                        />
                                    </View>
                                </View>
                            ))}
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}
