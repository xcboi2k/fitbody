import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import ButtonText from '@/components/shared/ButtonText';

export default function MealPlansQuestionnaireBScreen() {
    const [selectedCaloricGoal, setSelectedCaloricGoal] = useState('');
    const [selectedCookingTime, setSelectedCookingTime] = useState('');
    const [selectedServings, setSelectedServings] = useState('');

    const caloricGoal = [
        { label: 'Less than 1500 calories', value: 'Less than 1500 calories' },
        { label: '1500-2000 calories', value: '1500-2000 calories' },
        { label: 'More than 2000 calories', value: 'More than 2000 calories' },
        { label: "Not sure/Don't have a goal", value: "Not sure/Don't have a goal" },
    ];

    const cookingTime = [
        { label: 'Less than 15 minutes', value: 'Less than 15 minutes' },
        { label: '15-30 minutes', value: '15-30 minutes' },
        { label: 'More than 30 minutes', value: 'More than 30 minutes' },
    ];

    const servings = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3-4', value: '3-4' },
        { label: 'More than 4', value: 'More than 4' },
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
                <View className='w-full px-[30px] mb-[40px]'>
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Caloric Goal</Text>
                    <Text className="text-white text-[14px] mb-[10px]">What is your daily caloric intake goal?</Text>

                    <View className="flex-row justify-between w-full px-4">
                        <View className="flex-1">
                            {caloricGoal.map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedCaloricGoal(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedCaloricGoal === item.value && (
                                            <View className="h-3 w-3 rounded-full bg-limeGreen" />
                                        )}
                                    </View>

                                    {/* Text Label */}
                                    <Text className="text-white ml-2 text-[14px]">{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
                
                <View className='w-full px-[30px] mb-[40px]'>
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Cooking Time Preference</Text>
                    <Text className="text-white text-[14px] mb-[10px]">How much time are you willing to spend cooking each meal?</Text>

                    <View className="flex-row justify-between w-full px-4">
                        <View className="flex-1">
                            {cookingTime.map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedCookingTime(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedCookingTime === item.value && (
                                            <View className="h-3 w-3 rounded-full bg-limeGreen" />
                                        )}
                                    </View>

                                    {/* Text Label */}
                                    <Text className="text-white ml-2 text-[14px]">{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>

                <View className='w-full px-[30px] mb-[40px]'>
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Number of Servings</Text>
                    <Text className="text-white text-[14px] mb-[10px]">How many servings do you need per meal?</Text>

                    <View className="flex-row justify-between w-full px-4">
                        <View className="flex-1">
                            {servings.slice(0, 2).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedServings(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedServings === item.value && (
                                            <View className="h-3 w-3 rounded-full bg-limeGreen" />
                                        )}
                                    </View>

                                    {/* Text Label */}
                                    <Text className="text-white ml-2 text-[14px]">{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Right Column */}
                        <View className="flex-1">
                            {servings.slice(2).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedServings(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedServings === item.value && (
                                            <View className="h-3 w-3 rounded-full bg-limeGreen" />
                                        )}
                                    </View>

                                    {/* Text Label */}
                                    <Text className="text-white ml-2 text-[14px]">{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    
                    <View className='w-full items-center mt-[60px]'>
                        <ButtonText buttonText='Create' onClick={() => {}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
