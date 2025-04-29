import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

import ButtonText from '@/components/shared/ButtonText';

export default function MealPlansRecipeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[30px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'MealPlansResults',
                        },
                    })}
                >
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
                    <View className='w-full flex-row items-center mb-[10px]'>
                        <Text className="text-limeGreen text-[20px]">Avocado and Egg Toast</Text>
                        <AntDesign name="star" size={24} color="white" className='ml-auto'/>
                    </View>
                    <View className="flex-row items-start w-full">
                        <View className="flex-row items-center mr-[10px]">
                            <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                            <Text className="text-white text-[14px] ml-[2px]">
                                10 Minutes
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="fire" size={18} color='#B3A0FF' />
                            <Text className="text-white text-[14px]">
                                200 Cal
                            </Text>
                        </View>
                    </View>
                </View>

                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                        <Image
                            source={require('../../../../../assets/images/misc/plank.png')} // Replace with your actual image
                            className="w-full h-full object-cover"
                        />
                    </View>
                </View>

                <View className='w-full px-[30px] mb-[30px]'>
                    <Text className="text-limeGreen text-[14px] mb-[10px]">Ingredients</Text>
                    <Text className="text-white text-[14px] ml-[10px]">
                        • Wholemeal bread{'\n'}
                        • Ripe avocado slices{'\n'}
                        • Fried or poached egg{'\n'}
                    </Text>
                </View>

                <View className='w-full px-[30px] mb-[20px]'>
                    <Text className="text-limeGreen text-[14px] mb-[10px]">Preparation</Text>
                    <Text className="text-white text-[14px]">
                        Sed earum sequi est magnam doloremque aut porro dolores sit molestiae fuga. Et rerum inventore ut perspiciatis dolorum sed internos porro aut labore dolorem At quia reiciendis in consequuntur possimus.
                    </Text>

                    <View className='w-full items-center mt-[40px]'>
                        <ButtonText buttonText='Save Recipe' onClick={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'MealPlansMain',
                            },
                        })}
                    />
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}
