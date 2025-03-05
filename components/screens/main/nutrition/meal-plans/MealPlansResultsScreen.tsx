import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ButtonText from '@/components/shared/ButtonText';

export default function MealPlansResultsScreen() {
    const [selectedRecipe, setSelectedRecipe] = useState('');

    const healthFoods = [
        { id: 1, name: 'Avocado Toast', timeToConsume: 5, calories: 250 },
        { id: 2, name: 'Green Smoothie', timeToConsume: 3, calories: 180 },
        { id: 3, name: 'Quinoa Salad', timeToConsume: 10, calories: 350 },
        { id: 4, name: 'Egg & Spinach Omelette', timeToConsume: 10, calories: 300 },
        { id: 5, name: 'Banana & Peanut Butter', timeToConsume: 2, calories: 210 },
    ];

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[30px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Meal Plans
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>
            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full px-[30px] mb-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[5px]">Breakfast Plan For You</Text>
                    <Text className="text-white text-[14px] mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
                </View>
                <View className='w-full px-[30px] mb-[20px]'>
                    {healthFoods.map((item) => (
                        <TouchableOpacity 
                            key={item.id} 
                            className="flex-row items-center mb-[20px] justify-between" 
                            onPress={() => setSelectedRecipe(item.name)}
                        >
                            {/* Circle Icon */}
                            <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                {selectedRecipe === item.name && (
                                    <View className="h-3 w-3 rounded-full bg-limeGreen" />
                                )}
                            </View>

                            {/* Text Label */}
                            <View className="w-[90%] bg-white rounded-[20px] flex-row"
                            >
                                <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                    <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                        <Text className="text-black text-[16px]">{item.name}</Text>
                                    </View>
                                    <View className="flex-row justify-between items-start w-full">
                                        <View className="flex-row items-center mr-[10px]">
                                            <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                            <Text className="text-black text-[10px] ml-[2px]">
                                                {item.timeToConsume} Minutes
                                            </Text>
                                        </View>
                                        <View className="flex-row items-center">
                                            <MaterialCommunityIcons name="fire" size={18} color='black' />
                                            <Text className="text-black text-[10px]">
                                                {item.calories} Cal
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View className="w-[50%] relative">
                                    <Image
                                        source={require('@/assets/images/misc/squats.png')}
                                        className="h-[110px] w-full rounded-[20px] p-0"
                                    />
                                    <View className="absolute top-2 right-2">
                                        <AntDesign name="star" size={24} color="white" />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                    <View className='w-full items-center mt-[40px]'>
                        <ButtonText buttonText='See Recipe' onClick={() => {}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
