import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function ResourcesMainScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    const [selected, setSelected] = useState('Articles');

    const fitnessArticles = [
        {
            id: 1,
            title: "The Benefits of Strength Training",
            description: "Learn how strength training can improve muscle growth, bone density, and overall health.",
        },
        {
            id: 2,
            title: "How to Build an Effective Workout Routine",
            description: "Discover key elements of a balanced workout plan for strength, endurance, and flexibility.",
        },
        {
            id: 3,
            title: "The Importance of Recovery in Fitness",
            description: "Understand why rest days and proper recovery techniques are essential for muscle repair and growth.",
        },
        {
            id: 4,
            title: "Best Nutrition Tips for Muscle Gain",
            description: "Explore dietary strategies to maximize muscle growth and fuel your workouts.",
        },
        {
            id: 5,
            title: "Cardio vs. Weight Training: Which is Better?",
            description: "Compare the benefits of cardiovascular exercise and resistance training for overall fitness.",
        }
    ];

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'HomeMain',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Resources
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
                        className={`w-[48%] rounded-[25px] ${selected === 'Workout Videos' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                        onPress={() => setSelected('Workout Videos')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Workout Videos' ? 'text-black' : 'text-lightPurple'}`}>Workout Videos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[25px] ${selected === 'Articles' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                        onPress={() => setSelected('Articles')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Articles' ? 'text-black' : 'text-lightPurple'}`}>Articles & Tips</Text>
                    </TouchableOpacity>
                </View>

                {
                    selected === "Workout Videos" ? (
                        null
                    ) : (
                        <View className='w-full px-[30px] mb-[20px]'>
                            <Text className="text-limeGreen text-[20px] mb-[10px]">Challenges and Competitions</Text>
                            {fitnessArticles.map((article) => (
                                <TouchableOpacity className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    key={article.id}
                                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                                        screen: 'User',
                                        params: {
                                            screen: 'ResourcesDetails',
                                        },
                                    })}
                                >
                                    <View className="w-[50%] px-[15px] py-[10px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">{article.title}</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <Text className="text-black text-[13px]">{article.description}</Text>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/squats.png')}
                                            className="h-40 w-full rounded-[20px] p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="#E2F163" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}
