import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ResourcesDetailsScreen() {
    const [selected, setSelected] = useState('Articles');

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
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
                        
                        <>
                            <View className='w-full px-[30px] mb-[20px]'>
                                <View className='w-full flex flex-row items-center mb-[10px]'>
                                    <Text className="text-limeGreen text-[20px]">Challenges and Competitions</Text>
                                    <AntDesign name="star" size={24} color="#E2F163" className='ml-auto'/>
                                </View>
                                <View className="flex flex-row items-center">
                                    <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                    <Text className="text-white text-[12px] ml-1">Published on September 15</Text>
                                </View>
                            </View>
                            <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                                <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                                    <Image
                                        source={require('@/assets/images/misc/plank.png')} // Replace with your actual image
                                        className="w-full h-full object-cover"
                                    />
                                </View>
                            </View>
                            <View className='w-full px-[30px] mb-[20px]'>
                                <Text className="text-white text-[12px] mb-[20px]">Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries, and unlock your full potential in the gym.</Text>

                                <Text className="text-limeGreen text-[14px] mb-[5px]">Plan Your Routine:</Text>
                                <Text className="text-white text-[12px] mb-[20px]">Before starting any workout, plan your routine for the week. Focus on different muscle groups on different days to allow for adequate rest and recovery.</Text>

                                <Text className="text-limeGreen text-[14px] mb-[5px]">Warm-Up:</Text>
                                <Text className="text-white text-[12px] mb-[20px]">Begin your workout with a proper warm-up session. This could include light cardio exercises like jogging or jumping jacks, as well as dynamic stretches to prepare your muscles for the upcoming workout.</Text>
                            </View>
                        </>
                    )
                }
            </ScrollView>
        </View>
    )
}
