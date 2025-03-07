import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function CommunityDiscussionForumScreen() {
    const [selected, setSelected] = useState('Discussion Forum');

    const reviews = [
        { id: 1, name: 'Madison', stars: 30254, comments: 12254, views: 1254 },
        { id: 2, name: 'Ethan', stars: 28500, comments: 11500, views: 1150 },
        { id: 3, name: 'Olivia', stars: 31000, comments: 13000, views: 1350 },
        { id: 4, name: 'Liam', stars: 29500, comments: 12000, views: 1280 },
        { id: 5, name: 'Sophia', stars: 32000, comments: 14000, views: 1450 },
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
                        // onPress={() => setSelected('Challenges')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Challenges' ? 'text-black' : 'text-lightPurple'}`}>Challenges</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full px-[30px] mb-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[10px]">Forums</Text>
                    {reviews.map((review) => (
                        <View 
                            key={review.id} 
                            className="w-full flex-col rounded-[10px] border-[2px] border-limeGreen p-[15px] mb-[20px]"
                        >
                            <View className='w-full flex flex-row items-center justify-between mb-[10px]'>
                                <View className='w-[50%] flex flex-row items-center'>
                                    <View className="w-[35px] h-[35px] rounded-full overflow-hidden">
                                        <Image
                                            source={require('@/assets/images/misc/sample-user.jpg')}
                                            className="w-full h-full object-cover"
                                        />
                                    </View>
                                    <Text className="text-limeGreen text-[15px] font-bold ml-[10px]">
                                        {review.name}
                                    </Text>
                                </View>
                                <AntDesign name="staro" size={20} color='#E2F163' />
                            </View>
                            
                            <Text className="text-white text-[14px] mb-[20px]">
                                Lorem ipsum dolor sit amet consectetur. Tortor aenean suspendisse pretium nunc non facilisi.
                            </Text>
                            
                            <View className='w-full flex flex-row justify-between'>
                                <View className="flex-row items-center mr-[10px]">
                                    <AntDesign name="star" size={12} color='#B3A0FF' />
                                    <Text className="text-limeGreen text-[12px] ml-1">{review.stars.toLocaleString()}</Text>
                                </View>

                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="comment-processing" size={12} color='#B3A0FF' />
                                    <Text className="text-limeGreen text-[12px] ml-1">{review.comments.toLocaleString()}</Text>
                                </View>

                                <View className="flex-row items-center">
                                    <Entypo name="eye" size={12} color='#B3A0FF' />
                                    <Text className="text-limeGreen text-[12px] ml-1">{review.views.toLocaleString()}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
