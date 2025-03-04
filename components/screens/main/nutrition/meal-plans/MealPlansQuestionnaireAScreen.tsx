import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import ButtonText from '@/components/shared/ButtonText';

export default function MealPlansQuestionnaireAScreen() {
    const [selectedDiet, setSelectedDiet] = useState('');
    const [selectedAllergy, setSelectedAllergy] = useState('');
    const [selectedMealType, setSelectedMealType] = useState('');

    const diet = [
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
        { label: 'Keto', value: 'Keto' },
        { label: 'Paleo', value: 'Paleo' },
        { label: 'No preferences', value: 'No preferences' },
    ];

    const allergy = [
        { label: 'Nuts', value: 'Nuts' },
        { label: 'Dairy', value: 'Dairy' },
        { label: 'Shellfish', value: 'Shellfish' },
        { label: 'Eggs', value: 'Eggs' },
        { label: 'No allergies', value: 'No allergies' },
    ];

    const mealType = [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Snacks', value: 'Snacks' },
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
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Dietary Preferences</Text>
                    <Text className="text-white text-[14px] mb-[10px]">What are your dietary preferences?</Text>

                    <View className="flex-row justify-between w-full px-4">
                        <View className="flex-1">
                            {diet.slice(0, 3).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedDiet(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedDiet === item.value && (
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
                            {diet.slice(3).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedDiet(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedDiet === item.value && (
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
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Allergies</Text>
                    <Text className="text-white text-[14px] mb-[10px]">Do you have any food allergies we should know about?</Text>

                    <View className="flex-row justify-between w-full px-4">
                        <View className="flex-1">
                            {allergy.slice(0, 3).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedAllergy(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedAllergy === item.value && (
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
                            {allergy.slice(3).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedAllergy(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedAllergy === item.value && (
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
                    <Text className="text-limeGreen text-[20px] mb-[15px]">Meal Types</Text>
                    <Text className="text-white text-[14px] mb-[10px]">Which meals do you want to plan?</Text>

                    <View className="flex-row justify-between w-full px-4">
                        <View className="flex-1">
                            {mealType.slice(0, 2).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedAllergy(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedMealType === item.value && (
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
                            {mealType.slice(2).map((item) => (
                                <TouchableOpacity 
                                    key={item.value} 
                                    className="flex-row items-center mb-2" 
                                    onPress={() => setSelectedMealType(item.value)}
                                >
                                    {/* Circle Icon */}
                                    <View className={`h-5 w-5 rounded-full border-[2px] flex items-center justify-center border-lightPurple`}>
                                        {selectedMealType === item.value && (
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
                        <ButtonText buttonText='Next' onClick={() => {}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
