import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function MealIdeasDetailsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    const [selected, setSelected] = useState('Breakfast');

    const [hasVideo, setHasVideo] = useState(false)

    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'MealIdeasList',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Meal Ideas
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
                        className={`w-[32%] rounded-[35px] ${selected === 'Breakfast' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelected('Breakfast')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Breakfast' ? 'text-black' : 'text-lightPurple'}`}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selected === 'Lunch' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelected('Lunch')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Lunch' ? 'text-black' : 'text-lightPurple'}`}>Lunch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selected === 'Dinner' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelected('Dinner')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Dinner' ? 'text-black' : 'text-lightPurple'}`}>Dinner</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full px-[30px] mb-[20px]'>
                    <View className='w-full flex-row items-center mb-[10px]'>
                        <Text className="text-limeGreen text-[20px]">Spinach and Tomato Omelette</Text>
                        <AntDesign name="star" size={24} color="white" className='ml-auto'/>
                    </View>
                    <View className="flex-row items-start w-full">
                        <View className="flex-row items-center mr-[10px]">
                            <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                            <Text className="text-white text-[14px] ml-[2px]">
                                12 Minutes
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="fire" size={18} color='#B3A0FF' />
                            <Text className="text-white text-[14px]">
                                120 Cal
                            </Text>
                        </View>
                    </View>
                </View>

                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    {
                        hasVideo ? (
                            <View style={styles.contentContainer}>
                                <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture contentFit='cover' />
                                {/* Star Icon in Top-Right */}
                                <View className="absolute top-[25px] right-[65px]">
                                    <AntDesign name="star" size={30} color="#E2F163" />
                                </View>
                            </View>
                        ) : (
                            <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                                <View className="relative">
                                    <Image
                                        source={require('@/assets/images/misc/plank.png')} // Replace with your actual image
                                        className="w-full h-full object-cover"
                                    />
                                    <View className="absolute top-2 right-2 bg-limeGreen px-3 py-1 rounded-full">
                                        <Text className="text-black text-[12px] font-bold">Recipe Of The Day</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    
                </View>

                <View className='w-full px-[30px] mb-[30px]'>
                    <Text className="text-limeGreen text-[14px] mb-[10px]">Ingredients</Text>
                    <Text className="text-white text-[14px] ml-[10px]">
                        • 2-3 eggs{'\n'}
                        • A handful of fresh spinach{'\n'}
                        • 1 small tomato{'\n'}
                        • Salt and pepper to taste{'\n'}
                        • Olive oil or butter{'\n'}
                    </Text>
                </View>

                <View className='w-full px-[30px] mb-[20px]'>
                    <Text className="text-limeGreen text-[14px] mb-[10px]">Preparation</Text>
                    <Text className="text-white text-[14px]">
                        Sed earum sequi est magnam doloremque aut porro dolores sit molestiae fuga. Et rerum inventore ut perspiciatis dolorum sed internos porro aut labore dolorem At quia reiciendis in consequuntur possimus.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    video: {
        width: 350,
        height: 460,
        borderRadius: 20,
        position: 'relative'
    },
    controlsContainer: {
        padding: 10,
    },
});
